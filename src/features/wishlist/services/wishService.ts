import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import type { WishlistProp } from "../types";


export const parseWishlist = async (userId: string) : Promise<WishlistProp[]> => {
try{
    const q = query(collection(db, "wishlist"), where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const wishlist: WishlistProp[] = snapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data()
    })) as WishlistProp[];
    return wishlist;
}catch(error){
    if(error instanceof FirebaseError){
        console.error("Firebase Code Error", error.code, error.message)
    }
    else{
        console.error("An unexpected error is occurred")
    }
}
return [];
}


