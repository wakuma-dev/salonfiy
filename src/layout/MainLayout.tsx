import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Tabbar from "./mobile/mobileTabbar/Tabbar";
import Footer from "./footer/Footer";
import ScrollToTop from "@/common/ScrollToTop";
export default function MainLayout(){
    return(
        <>
        <ScrollToTop />
        <Navbar />  
        <main className="md:pt-20">
        <Outlet />
        </main>
        <Footer />
        <Tabbar />
         </>
    )
}