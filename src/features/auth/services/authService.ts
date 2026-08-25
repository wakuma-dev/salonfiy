import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { setDoc, doc } from "firebase/firestore";
import type { LoginDataType, RegisterDataType } from "../schema/authSchema";
export const signup = async (data: RegisterDataType) => {
    const { firstName, lastName, email, password } = data;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    await setDoc(doc(db, "users", uid), {
        uid,
        firstName,
        lastName,
        email,
        createdAt: new Date().toISOString()
    })
    return userCredential.user


}
export const login = async (data: LoginDataType) => {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    return userCredential.user;
}
export const logout = async () => {
    await signOut(auth);
}
