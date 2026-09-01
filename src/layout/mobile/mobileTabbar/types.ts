import { type LucideIcon } from "lucide-react";
import { Home, User, Heart, Search } from "lucide-react";
type TabbarProps = {
   icon: LucideIcon,
   path: string;
}
export const tabBars: TabbarProps[] = [
    {  icon: Home,
    path: "/"},
      {
      icon: Search,
      path: "/search"
    },
    {
        icon: Heart,
        path: "/wishlist"
    },
    {
      icon: User,
      path: "/profile"
    },
  
  
]