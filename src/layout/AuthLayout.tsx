import { Outlet } from "react-router-dom";
import ScrollToTop from "@/common/ScrollToTop";
export default function AuthLayout(){
    return(
        <>
        <ScrollToTop />
        <main>
            <Outlet />
        </main>
        </>
    )
}