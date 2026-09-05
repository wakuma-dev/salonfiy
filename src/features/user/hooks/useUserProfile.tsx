import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

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
   
    const updateUser = async (data: Partial<UserProfile>) => {
        if(!uid){
            throw new Error("User Id is required")
        }
        try {
            setLoading(true);
            const userRef = doc(db, "users", uid);
            await updateDoc(userRef, data);
            const snapshot = await getDoc(userRef);
            if(snapshot.exists()){
                setUserData(snapshot.data() as UserProfile);
            }else{
                setUserData(null);
            }
        }catch(error){
            if(error instanceof FirebaseError){
                console.error("Firebase Code Error", error.code, error.message);
                throw error;
            }else{
                console.log("Unexpected code error is occurred")
            }
        }
    }
    return { userData, loading, updateUser}
}