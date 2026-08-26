import { useState } from "react";
import { useStore } from "@/store/Store";
import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyInput } from "@/features/auth/components/FormInput";
import {
  type LoginDataType,
  loginSchema,
} from "@/features/auth/schema/authSchema";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FirebaseError } from "firebase/app";
import { login } from "@/features/auth/services/authService";
import bgBanner from "../assets/596837f77ff5f6db5b98de824c66a883.jpg";
import { Check, type LucideIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface Props {
  icon: LucideIcon;
  desc: string;
  iconBg: string;
  iconText: string;
}

const items: Props[] = [
  {
    icon: Check,
    desc: "Easy online booking 24/7",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
  {
    icon: Check,
    desc: "Verified reviews from real customers",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
  {
    icon: Check,
    desc: "Verified reviews from real customers",
    iconBg: "bg-[#7D53BF]",
    iconText: "text-[#ffffff]",
  },
];

const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const theme = useStore((state) => state.theme);

  const navigate = useNavigate();
  const location = useLocation();

  function getFirebaseLoginError(error: FirebaseError): string {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later.";
      default:
        console.error("Firebase Code Error", error.code, error.message);
        return "Something went wrong";
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    try {
      setLoginError("");
      await login(data);

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      if (error instanceof FirebaseError) {
        setLoginError(getFirebaseLoginError(error));
      } else {
        console.error("Unexpected error is occurred", error);
        setLoginError("Something went wrong. Please try again");
      }
    }
  };

  const onError: SubmitErrorHandler<LoginDataType> = (error) => {
    console.error(error);
  };

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden ${
        theme === "light"
          ? "bg-[#f7f7f7] text-black"
          : "bg-[#121212] text-white"
      }`}
    >
       <Helmet>
        <title>Sign In | Salonify</title>
        <meta name="description" content="Sign in to Salonify to manage your beauty and wellness appointments." />
        <meta name="robots" content="noindex, nofollow" />
       </Helmet>
      <div className="mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Banner */}
        <div
          className="p-4  md:p-10 w-full lg:w-1/2 h-40 flex flex-col items-start justify-center lg:justify-between lg:h-screen"
          style={{
            backgroundImage: `linear-gradient(
              135deg,
              rgba(57, 20, 112, 0.92) 0%,
              rgba(96, 40, 189, 0.72) 55%,
              rgba(28, 12, 52, 0.75) 100%
            ),
            url(${bgBanner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span className="text-[17px] leading-[26px] font-bold">
            Salonify
          </span>

          <div className="hidden lg:flex flex-col gap-6">
            <span className="uppercase tracking-widest text-[12px] leading-[16px]">
              Salonfiy
            </span>

            <h1 className="text-[40px] leading-[40px] max-w-lg font-bold">
              Your Beauty & Wellness Booking Platform
            </h1>

            <p className="max-w-lg text-[14px] leading-[20px] font-normal">
              Discover and book appointments with the best salons, spas, and
              wellness providers in your area.
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

        <div className="relative z-10 p-4 md:p-10 w-full lg:w-1/2 flex flex-1 items-start lg:items-center justify-center min-h-[calc(100dvh-5rem)] -mt-16 md:mt-20 lg:mt-0">
          <Card
            className={`w-full max-w-[420px] p-2.5 md:px-4 py-6 rounded-2xl ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          >
            <CardHeader className="flex flex-col items-start gap-1.5 w-full">
              <CardTitle className="text-[20px] leading-[27px] md:text-[24px] md:leading-[32px] font-bold">
                Welcome back
              </CardTitle>

              <CardDescription className="text-[14px] leading-[20px] font-normal text-[#64748b]">
                Sign In
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <MyInput
                  control={control}
                  label="Email"
                  name="email"
                  aria-invalid={errors?.email ? "true" : "false"}
                  placeholder="name@example.com"
                  className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                />

                <MyInput
                  control={control}
                  label="Password"
                  name="password"
                  isPasswordField
                  aria-invalid={errors?.password ? "true" : "false"}
                  placeholder="Enter your password"
                  className={`border focus:ring-1 focus:ring-[#5A21B5] ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                />

                {loginError && (
                  <p className="text-red-400 text-xs">{loginError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`p-2.5 border border-transparent flex items-center justify-center cursor-pointer rounded-xl mt-1.5 text-[14px] leading-[20px] bg-[#6D28D9] font-bold ${
                    theme === "light" ? "text-white" : "text-black"
                  }`}
                >
                  {isSubmitting ? "abebe" : "Sign In"}
                </button>
              </form>

              <div className="flex items-center justify-center my-4">
                <span className="text-[14px] leading-[20px] font-norma;">
                  Don't have an account?
                  <NavLink
                    to="/signup"
                    className="font-semibold ml-2 text-[#5b21b6]"
                  >
                    Sign Up
                  </NavLink>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;