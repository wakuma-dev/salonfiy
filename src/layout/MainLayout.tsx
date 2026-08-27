import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Tabbar from "./mobile/mobileTabbar/Tabbar";
import Footer from "./footer/Footer";
import ScrollToTop from "@/common/ScrollToTop";
export default function MainLayout(){
    const location = useLocation();
    const hideFooterRoute = [
        "/profile",
        "/wishlist"
    ];
    const hideMenuRoute = [
        "/profile",
        "/wishlist"
    ]
    const hideFooter = hideFooterRoute.includes(location.pathname);
    const hideMenuTabs = hideMenuRoute.includes(location.pathname);
    return(
        <>
        <ScrollToTop />
        <Navbar hideMenuTabs={hideMenuTabs}/>  
        <main className="md:pt-19">
        <Outlet />
        </main>
        {!hideFooter && <Footer />}
        <Tabbar />
         </>
    )
}