import { type LucideIcon } from "lucide-react";
import { Home, User, Heart } from "lucide-react";
type TabbarProps = {
   icon: LucideIcon,
   path: string;
}
export const tabBars: TabbarProps[] = [
    {  icon: Home,
    path: "/"},
    {
        icon: Heart,
        path: "/wishlist"
    },
    {
      icon: User,
      path: "/login"
    }
  
]