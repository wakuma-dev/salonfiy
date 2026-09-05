import type { ThemeSlice } from "./ThemeSlice";
import type { ServiceSlice } from "./ServiceSlice";
import type { RecentSlice } from "./RecentSlice";
import type { SearchSlice } from "./SearchSlice";
export type Store = ThemeSlice & ServiceSlice & RecentSlice & SearchSlice;