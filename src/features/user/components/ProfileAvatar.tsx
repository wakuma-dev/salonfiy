import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { useStore } from "@/store/Store";
import useUserProfile from "../hooks/useUserProfile";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function ProfileAvatar() {
  const theme = useStore((state) => state.theme);
  const user = useAuthStore((state) => state.user);
  const { userData, loading } = useUserProfile(user?.uid);
  const navigate = useNavigate();
  const firstLetter = userData?.email?.charAt(0).toUpperCase();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={() => navigate("/profile")}
      className={`border transition-colors cursor-pointer ${
        theme === "light"
          ? "border-[#DDDDDD] bg-white hover:bg-[#f7f7f7]"
          : "border-[#444444] bg-[#1e1e1e] text-[#f5f5f5] hover:bg-[#292929]"
      }`}
    >
      {user && !loading && firstLetter ? (
        firstLetter
      ) : (
        <UserRound size={18} />
      )}
    </Button>
  );
}