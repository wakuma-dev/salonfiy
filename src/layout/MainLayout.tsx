import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Tabbar from "./mobile/mobileTabbar/Tabbar";
import Footer from "./footer/Footer";
import ScrollToTop from "@/common/ScrollToTop";
import NavbarLogo from "./mobile/mobileNavbar/NavbarLogo";
export default function MainLayout(){
    const location = useLocation();
    const hideFooterRoute = [
        "/profile",
        "/wishlist"
    ];
    const hideMenuRoute = [
        "/profile",
        "/wishlist",
        
    ]
    const hideFooter = hideFooterRoute.includes(location.pathname);
    const hideMenuTabs = hideMenuRoute.includes(location.pathname) || location.pathname.startsWith("/services");
    return(
        <>
        <ScrollToTop />
        <Navbar hideMenuTabs={hideMenuTabs}/>  
        <NavbarLogo />
        <main className="md:pt-19">
        <Outlet />
        </main>
        {!hideFooter && <Footer />}
        <Tabbar />
         </>
    )
}