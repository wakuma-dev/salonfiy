import { create } from "zustand";
import type { Store } from "./types";
import { devtools, persist } from "zustand/middleware";
import { createThemeSlice } from "./ThemeSlice";
export const useStore = create<Store>()(
    devtools(
     persist(
        (...args) => ({
        ...createThemeSlice(...args)
        }),
        {
            name: "theme-storage",
            partialize: (state) => ({
                theme: state.theme
            })
        }
     )   
    )
)