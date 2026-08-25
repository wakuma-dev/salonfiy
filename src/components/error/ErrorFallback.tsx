interface Props {
    error?: Error;
    resetErrorBoundary: () => void;

}
export default function ErrorFallback({ error, resetErrorBoundary}: Props){
    return(
    <div role="alert"
         className="flex flex-col items-center justify-center gap-2">
            <h3>Something went wrong</h3>
            {error && (<pre className="text-red-400">{error.message}</pre>)}
            <button onClick={resetErrorBoundary}>Try again</button>
         </div>
    )
}