import type { StateCreator } from "zustand";
import type { Store } from "./types";
type ThemeState = {
    theme: "light" | "dark"
};
type ThemeAction = {
    toggleTheme: () => void;
}
export type ThemeSlice = ThemeState & ThemeAction;

export const createThemeSlice: StateCreator<Store, [['zustand/devtools', never]], [], ThemeSlice> = (set) => ({
    theme: "light",
    toggleTheme: () => set((state) => ({
        theme: state.theme === "light" ? "dark" : "light"
     }),
     false,
     "theme/toggleTheme"
    )
})