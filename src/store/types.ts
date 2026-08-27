import type { ThemeSlice } from "./ThemeSlice";
import type { ServiceSlice } from "./ServiceSlice";
import type { RecentSlice } from "./RecentSlice";
export type Store = ThemeSlice & ServiceSlice & RecentSlice;