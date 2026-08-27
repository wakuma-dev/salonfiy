import { create } from "zustand";
import type { Store } from "./types";
import { devtools, persist } from "zustand/middleware";
import { createThemeSlice } from "./ThemeSlice";
import { createServiceSlice } from "./ServiceSlice";
import { createRecentSlice } from "./RecentSlice";
export const useStore = create<Store>()(
    devtools(
     persist(
        (...args) => ({
        ...createThemeSlice(...args),
        ...createServiceSlice(...args),
        ...createRecentSlice(...args)
        }),
        {
            name: "salonfiy-storage",
            partialize: (state) => ({
                theme: state.theme,
                items: state.items
            })
        }
     )   
    )
)