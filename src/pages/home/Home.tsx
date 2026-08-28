import {Helmet} from "react-helmet-async"
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import HowItWorks from "./components/HowItWorks";

import Services from "@/features/services/pages/Services";
export default function Home(){
    return(
     <>
     <Helmet>
        <title>Salonfiy - Book Beauty & Wellness Services</title>
        <meta name="description" content="Discover and book trusted beauty and wellness services with Salonify. Explore salons for hair, nails, makeup, brows, tattoos, and more—all in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Helmet>
     <Hero />
     <Services />
     <Banner />
     <HowItWorks />
     <Faq />
     </>
    )
}