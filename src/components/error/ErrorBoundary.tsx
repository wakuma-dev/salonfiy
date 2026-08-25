import { Component, type ReactNode, type ErrorInfo } from "react";
import ErrorFallback from "./ErrorFallback";

interface Props {
    fallback?: ReactNode;
    children: ReactNode;
    onError?: (error: Error, info: ErrorInfo) => void;
}
interface State {
    hasError: boolean;
    error: Error | null
}
export class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {hasError: false, error: null}
    }
    static getDerivedStateFromError(error: Error): State{
        return {hasError: true, error}
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error Boundary", error, errorInfo);
        this.props.onError?.(error, errorInfo)
    }
    resetErrorBoundary = () => {
        this.setState({hasError: false, error: null})
    }
    override render() {
        if(this.state.hasError){
            if(this.props.fallback){
            return this.props.fallback
            }
            return(
                <ErrorFallback
                 error={this.state.error ?? undefined}
                 resetErrorBoundary={this.resetErrorBoundary}
                 />
            )
        }
        return this.props.children ?? null
    }
}