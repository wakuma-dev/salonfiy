import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, type ComponentType } from "react";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import RouteErrorBoundary from "@/components/error/RouteErrorBoundary";
const HomePage = lazy(() => import("../pages/home/Home"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const withSuspense = (Component: ComponentType) => (
    <RouteErrorBoundary>
    <Suspense fallback={<div>loading...</div>}>
        <Component />
    </Suspense>
    </RouteErrorBoundary>
);
const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: withSuspense(HomePage)
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: withSuspense(LoginPage)
            },
            {
                path: "/signup",
                element: withSuspense(SignupPage)
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/wishlist",
                element: withSuspense(WishlistPage)
            }
        ],
    },
     {
        path: "*",
        element: withSuspense(NotFound)
    }
   
],
{
    basename: "/salonfiy"
});
export default router;
