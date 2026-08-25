import { useStore } from "@/store/Store";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuTabs from "./MenuTabs";

export default function Navbar() {
  const theme = useStore((state) => state.theme);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl ${
        theme === "light" ? "bg-[#F7F7F7]" : "bg-[#121212]"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto hidden w-[90%] items-center justify-between md:flex py-5">
        <Logo />
        <MenuTabs />
        <MenuButton />
      </div>
    </nav>
  );
}