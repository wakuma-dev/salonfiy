import { Navigate, Outlet, useLocation} from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/useAuthStore";
export default function ProtectedRoute(){
    const user = useAuthStore((state) => state.user);
    const loading = useAuthStore((state) => state.loading);
    const location = useLocation();
    if(loading){
        return<p>loading...</p>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace />
    }
    return <Outlet />
}