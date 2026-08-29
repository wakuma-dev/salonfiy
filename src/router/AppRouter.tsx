import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, type ComponentType } from "react";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/home/Home";
import RouteErrorBoundary from "@/components/error/RouteErrorBoundary";
import SuspenseLoader from "@/common/SuspenseLoader";
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const withSuspense = (Component: ComponentType) => (
    <RouteErrorBoundary>
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
        <SuspenseLoader /></div>}>
        <Component />
    </Suspense>
    </RouteErrorBoundary>
);
const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "services/:serviceId",
          element: withSuspense(ServiceDetails),
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/wishlist",
              element: withSuspense(WishlistPage),
            },
            {
              path: "/profile",
              element: withSuspense(ProfilePage),
            },
          ],
        },
      ],
    },

    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: withSuspense(LoginPage),
        },
        {
          path: "/signup",
          element: withSuspense(SignupPage),
        },
      ],
    },

    {
      path: "*",
      element: withSuspense(NotFound),
    },
  ],
  {
    basename: "/salonfiy",
  }
);
export default router;
