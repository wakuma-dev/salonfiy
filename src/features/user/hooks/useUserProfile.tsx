import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { getDoc, doc } from "firebase/firestore";

interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
}
export default function useUserProfile(uid: string | undefined){
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    if(!uid){
        setUserData(null);
        setLoading(false);
        return;
    }
    const fetchUser = async () => {
        try {
            setLoading(true);
            const userRef = doc(db, "users", uid);
            const snapshot = await getDoc(userRef);
           if(snapshot.exists()){
                setUserData(snapshot.data() as UserProfile)
            }
            else{
                setUserData(null);
            }
        }catch(error){
             console.error("failed to fetch data", error);
        }finally{
            setLoading(false);
        }
    };
    fetchUser();
    }, [uid]);
    return { userData, loading}
}