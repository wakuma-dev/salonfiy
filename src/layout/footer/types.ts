import type { IconType } from "react-icons"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

interface SocialLinksProps {
    icon: IconType,
    path: string;
}
export const socialLinks: SocialLinksProps[] = [
    {
        icon: FaFacebookF,
        path: "https://www.facebook.com"
    },
    {
        icon: FaInstagram,
        path: "https://www.instagram.com"
    },
    {
        icon: FaTwitter,
        path: "https://www.twitter.com"
    },
    {
        icon: FaLinkedin,
        path: "https://www.linkedin.com"
    }
]