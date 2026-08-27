import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./router/AppRouter";
import useAuth from "./features/auth/hooks/useAuth";
export default function App(){
  useAuth();
  return(
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  )
}