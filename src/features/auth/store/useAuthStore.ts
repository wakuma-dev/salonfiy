import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User } from "firebase/auth";
import { signup as signupService, 
         login as loginService, 
         logout as logoutService } from "../services/authService";
import type { LoginDataType, RegisterDataType } from "../schema/authSchema";
type AuthState = { 
    user: User | null;
    loading: boolean;
    error: string | null
}
type AuthAction = {
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    signup: (data: RegisterDataType) => Promise<void>;
    login: (data: LoginDataType) => Promise<void>;
    logout: () => Promise<void>;
}
type AuthStore = AuthState & AuthAction;

export const useAuthStore = create<AuthStore>()(
    devtools((set) => ({
            user: null,
            loading: true,
            error: null,
            setUser: (user) => set({user}),
            setLoading: (loading) => set({loading}),
            signup: async (data) => {
                set({loading: true, error: null});
                try{
                const user = await signupService(data);
                set({
                    user,
                    loading: false
                })
                }catch(error){
                    console.error(error);
                    set({
                        loading: false,
                        error: "Failed to create account"
                    });
                    throw error
                }
            },
            login: async (data) => {
                set({
                    loading: true,
                    error: null
                });
                try{
                    const user = await loginService(data);
                    set({
                        user,
                        loading: false
                  })
                }catch(error){
                    console.error(error);
                    set({
                        loading: false,
                        error: "Failed to login"
                    });
                    throw error
                }
            },
            logout: async () => {
                set({
                    loading: true,
                    error: null
                })
                try {
                    await logoutService();
                    set({
                        loading: false,
                        user: null
                    })
                }catch(error){
                    console.error(error);
                    set({
                        loading: false,
                        error: "Failed to logout"
                    });
                    throw error;
                }
            }
        }))
    )
