import { useState } from "react"
import { useForm, type SubmitHandler, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signup } from "@/features/auth/services/authService";
import { type RegisterDataType, registerSchema } from "@/features/auth/schema/authSchema";
import { useStore } from "@/store/Store";
import { MyInput } from "@/features/auth/components/FormInput";
import { NavLink, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Helmet } from "react-helmet-async";
import { MyCheckbox } from "@/features/auth/components/FormCheckbox";
import bgBanner from "../assets/f48ed71ef140bab0546c3ac5df7bdcc4.jpg";
import { Check, type LucideIcon } from "lucide-react";
import Loader from "@/common/Loader";
interface Props {
    icon: LucideIcon;
    desc: string;
    iconBg: string;
    iconText: string;
}
const items: Props[] = [
  {
    icon: Check,
    desc: "Create your personal beauty profile",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
  {
    icon: Check,
    desc: "Book your favorite salon services easily",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
  {
    icon: Check,
    desc: "Manage your bookings in one place",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
];
const SignupPage = () => {
  const theme = useStore((state) => state.theme);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { control, handleSubmit, formState: {errors, isSubmitting}} = useForm<RegisterDataType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
    }
  });
  function getFirebaseRegisterError(error: FirebaseError): string {
    switch(error.code){
      case "auth/email-already-in-use":
        return "This email is already registered";
      case "auth/network-request-failed":
        return "Network error. please check your connection";
      case "auth/operation-not-allowed":
        return "Email registration is currently disabled";
      case "auth/quota-exceed":
        return "Too many requests. Please try again later"
      default: 
      console.error("Firebase Code Error", error.code, error.message);
      return "Something went wrong"
    }
  }
  const onSubmit: SubmitHandler<RegisterDataType> = async (data) => {
    setRegisterError("");
   try {
    await signup(data);
    navigate("/login");
   }catch(error){
    if(error instanceof FirebaseError){
    setRegisterError(getFirebaseRegisterError(error));
    }else{
    console.error("Unexpected error is occurred");
    setRegisterError("Something went wrong please try again later");
    }
   }
  };
  const onError: SubmitErrorHandler<RegisterDataType> = (error) => {
    console.error(error);
  }
  return (
    <section className={`w-full min-h-screen overflow-hidden ${theme === "light" ? "bg-[#f7f7f7] text-black" : "bg-[#121212] text-white"}`}>
      <Helmet>
         <title>Sign Up | Salonify</title>
      </Helmet>
     <div className="mx-auto flex flex-col lg:flex-row min-h-screen">
       <div className="p-4 md:p-10 w-full lg:w-1/2 h-40 flex 
       flex-col items-start justify-center lg:justify-between lg:h-screen"
           style={{
             backgroundImage: `linear-gradient(
             135deg,
               rgba(57, 20, 112, 0.92) 0%,
              rgba(96, 40, 189, 0.72) 55%,
              rgba(28, 12, 52, 0.75) 100%
             ),
             url(${bgBanner})
             `,
             backgroundPosition: "center",
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
           }}>
             <span className="text-[17px] leading-[26px] font-bold">
            Salonify
          </span>
          <div className="hidden lg:flex flex-col gap-6">
              <span className="uppercase tracking-widest text-[12px] leading-[16px]">
              Salonify
            </span>
             <h1 className="text-[40px] leading-[40px] max-w-lg font-bold">
              Your Beauty & Wellness Booking Platform
            </h1>
             <p className="max-w-lg text-[14px] leading-[20px] font-normal">
             Create your Salonify account and make booking your favorite beauty services simple and convenient
            </p>
               <div className="flex flex-col gap-2">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.desc}-${index}`}
                    className="w-full flex items-center gap-3 p-2 rounded-md bg-[#613AA7]"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${item.iconBg}`}
                    >
                      <Icon className={`h-4 w-4 ${item.iconText}`} />
                    </div>

                    <p className="font-medium text-[15px] leading-[21px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
           </div>
          <div className="relative p-4 md:p-10 w-full lg:w-1/2 flex flex-1 items-start lg:items-center
           justify-center min-h-[calc(100dvh-5rem)] -mt-16 -md:mt-20 lg:mt-0">
             <Card 
               className={`w-full max-w-[420px] px-2.5 md:px-4 py-6 rounded-2xl ${
               theme === "light" ? "bg-white" : "bg-black"}`}>
               <CardHeader className="flex flex-col items-start gap-1.5 w-full">
                <CardTitle className="text-[20px] leading-[27px] md:text-[24px] md:leading-[32px] font-bold">
                 Create an account
                </CardTitle>
                 <CardDescription className="text-[14px] leading-[20px] font-normal text-[#64748b]">
                 Sign Up
                 </CardDescription>
               </CardHeader>
               <CardContent>
                <form onSubmit={handleSubmit(onSubmit,onError)}
                      className="flex flex-col gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                  <MyInput
                   control={control}
                   label="First name"
                   placeholder="John"
                   name="firstName"
                   aria-invalid={errors.firstName ? "true" : "false"}
                   className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                   />
                   <MyInput
                    control={control}
                    label="Last name"
                    placeholder="Doe"
                    name="lastName"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                    />
                </div>
                <MyInput
                 control={control}
                 name='email'
                 label="Email"
                 placeholder="name@example.com"
                 aria-invalid={errors.email ? "true" : "false"}
                 className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                  />
                  <MyInput
                   control={control}
                   label="Password"
                   name="password"
                   isPasswordField
                   placeholder="Create a password"
                   aria-invalid={errors.password ? "true" : "false"}
                   className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                   />
                   <MyInput
                    control={control}
                    label="Confirm password"
                    name="confirmPassword"
                    isPasswordField
                    placeholder="Confirm your password"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                     className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                  />
                  <MyCheckbox
                   control={control}
                   label="I agree to the Terms of Service and Privacy Policy"
                   name="agreeTerms"
                   />
                   {registerError && (
                      <p className="text-red-400 text-xs">
                        {registerError}
                      </p>
                   )}
                   <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`p-2.5 border border-transparent flex items-center justify-center cursor-pointer rounded-xl mt-1.5 text-[14px] leading-[20px] bg-[#6D28D9] font-bold ${
                    theme === "light" ? "text-white" : "text-black"
                  }`}
                >
                  {isSubmitting ? (<Loader />) : ("Sign up")}
                </button>
                </form>
                <div className="flex items-center justify-center my-4">
                                <span className="text-[14px] leading-[20px] font-norma;">
                                  Don't have an account?
                                  <NavLink
                                    to="/login"
                                    className="font-semibold ml-2 text-[#5b21b6]"
                                  >
                                    Sign In
                                  </NavLink>
                                </span>
                </div>
               </CardContent>
               </Card>
           </div>
     </div>
    </section>
  )
}

export default SignupPage