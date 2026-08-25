import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";

interface Props {
  fallback?: ReactNode;
  children: ReactNode;
}

export default function RouteErrorBoundary({
  fallback,
  children,
}: Props) {
  const location = useLocation();
  const boundaryRef = useRef<ErrorBoundary>(null);

  useEffect(() => {
    if (boundaryRef.current?.state.hasError) {
      boundaryRef.current.resetErrorBoundary();
    }
  }, [location.pathname]);

  return (
    <ErrorBoundary ref={boundaryRef} fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}