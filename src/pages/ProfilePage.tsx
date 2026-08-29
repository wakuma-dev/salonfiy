import { useStore } from "@/store/Store";
import { Helmet } from "react-helmet-async";
import { useAuthStore } from "@/features/auth/store/useAuthStore";
import useUserProfile from "@/features/user/hooks/useUserProfile";
import { User } from "lucide-react";
import ThemeToggle from "@/layout/navbar/ThemeToggle";
export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const { userData, loading } = useUserProfile(user?.uid)
  const theme = useStore((state) => state.theme);
  const isProfileReady = Boolean(user && !loading && userData);
  const firstName = userData?.firstName;
  const firstLetter = userData?.email?.charAt(0).toUpperCase();
  return (
    <main className={`w-full min-h-screen ${theme === "light" ? "bg-[#f7f7f7] text-black" :  "bg-[#121212] text-white"}`}>
      <Helmet>
        <title>Profile | Salonify</title>
        <meta name="description" 
              content="Manage your salonify profile and account information" />
      </Helmet>
     
      <div className="max-w-9/10  mx-auto grid grid-cols-1 gap-4 lg:grid-cols-[40%_60%] lg:h-screen">
       <div className={`py-4 flex flex-col items-start gap-3 lg:border-r
        ${theme === "light" ? "border-gray-300" : "border-gray-700" }`}>
        <h1 className="text-[30px] leading-[34px] md:text-[40px] md:leading-[42px] font-bold">Profile</h1>
       </div>
     
        <div className="md:py-4 flex flex-col gap-3">
          <h2 className="hidden md:block text-[24px] leading-[28px] md:text-[28px] md:leading-[34px] font-semibold">About me</h2>
          <div className={`flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl w-full md:max-w-[420px]
           ${theme === "light" ? "bg-white  text-black" : "bg-[#1e1e1e]  text-white"}`}>
            <div className={`h-22 w-22 rounded-full text-[50px] leading-[52px] font-semibold flex items-center justify-center
               ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
             {isProfileReady && firstLetter ? firstLetter : <User />}
            </div>
            <span className="text-[32px] leading-[36px] font-medium">
             {isProfileReady && firstName ? firstName : "Guest"}
             </span>
           </div>
        </div>
        <div className={`mt-2.5 flex flex-col md:hidden gap-2.5 p-2.5 rounded-md 
           ${theme === "light" ? "bg-white text-black" : "bg-[#1e1e1e] text-white"}`}>
        <p>Preferences</p>
        <div className={`w-full border-t ${theme === "light" ?  "border-gray-300" : "border-gray-700"}`} />
          <ThemeToggle />
          </div>
         </div>
   
    </main>
  );
}