import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FirebaseError } from "firebase/app";
import { Button } from "@/components/ui/button";
export default function LogoutButton(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            navigate("/", {replace: true})
        }catch(error){
            if(error instanceof FirebaseError){
                console.error("Firebase Code Error", error.code, error.message)
            }else{
                console.error("failed to logout", error)
            }
        }finally{
            setLoading(false)
        }
    }
    return(
     <Button variant="outline"
             disabled={loading}
             onClick={handleLogout}>
                Logout
             </Button>
            
    )
}