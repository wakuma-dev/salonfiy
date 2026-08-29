import { useStore } from "@/store/Store";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuTabs from "./MenuTabs";
import ProfileAvatar from "@/features/user/components/ProfileAvatar";
interface NavbarProps {
  hideMenuTabs: boolean;
}
export default function Navbar({hideMenuTabs}: NavbarProps) {
  const theme = useStore((state) => state.theme);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl ${
        theme === "light" ? "bg-[#FFFFFF]" : "bg-[#000000]"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto hidden w-[90%] items-center justify-between md:flex py-5">
        <Logo />
        {!hideMenuTabs && <MenuTabs />}
        <div className="flex gap-3">
        <ProfileAvatar />
        <MenuButton />
        </div>
      </div>
         <div className={`w-full hidden md:block border-t ${theme === "light" ?  "border-gray-300" : "border-gray-700"}`} />
    </nav>
  );
}