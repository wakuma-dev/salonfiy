import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth(){
    const setUser = useAuthStore((state) => state.setUser);
    const setLoading = useAuthStore((state) => state.setLoading);
    useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
       
    });
     return () => unsubscribe();

    }, [setUser, setLoading]);
 }