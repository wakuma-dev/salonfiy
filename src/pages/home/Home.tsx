import { Suspense, lazy } from "react";
import {Helmet} from "react-helmet-async"
const Hero = lazy(() => import("../home/components/Hero"));
const HowItWorks = lazy(() => import("../home/components/HowItWorks"));
const Banner = lazy(() => import("../home/components/Banner"));
const Faq = lazy(() => import("../home/components/Faq"));
const SalonVideo = lazy(() => import("../home/components/SalonVideo"));
const Reviews = lazy(() => import("../home/components/Reviews"));
const Stats = lazy(() => import("../home/components/Stats"));
import StatsSkeleton from "./skeletons/StatsSkeleton";
import ReviewsSkeleton from "./skeletons/ReviewsSkeleton";
import SalonVideoSkeleton from "./skeletons/SalonVideoSkeleton";
import HeroSkeleton from "./skeletons/HeroSkeleton";
import HowItWorksSkeleton from "./skeletons/HowItWorksSkeleton";
import BannerSkeleton from "./skeletons/BannerSkeleton";
import FaqSkeleton from "./skeletons/FaqSkeleton";
import Services from "@/features/services/pages/Services";
export default function Home(){
    return(
     <>
     <Helmet>
        <title>Salonfiy - Book Beauty & Wellness Services</title>
        <meta name="description" content="Discover and book trusted beauty and wellness services with Salonify. Explore salons for hair, nails, makeup, brows, tattoos, and more—all in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Helmet>
     <Suspense fallback={<HeroSkeleton />}>
     <Hero />
     </Suspense>
     
     <Services />
     <Suspense fallback={<BannerSkeleton />}>
     <Banner />
     </Suspense>
     <Suspense fallback={<HowItWorksSkeleton />}>
     <HowItWorks />
     </Suspense>
     <Suspense fallback={<SalonVideoSkeleton />}>
     <SalonVideo />
     </Suspense>
     <Suspense fallback={<FaqSkeleton />}>
     <Faq />
     </Suspense>
     <Suspense fallback={<ReviewsSkeleton />}>
     <Reviews />
     </Suspense>
     <Suspense fallback={<StatsSkeleton />}>
     <Stats />
     </Suspense>
     </>
    )
}