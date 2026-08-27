import type { StateCreator } from "zustand";
import type { Service } from "./service.types";
import type { Store } from "./types";
const MAX_VIEWED = 8;
type RecentState = {
    items: Service[]
}
type RecentAction = {
    addService: (service: Service) => void;
    clearViewed: () => void;
}
export type RecentSlice = RecentState & RecentAction;

export const createRecentSlice: StateCreator<Store, [['zustand/devtools', never]], [], RecentSlice> = (set, get) => ({
     items: [],
     addService: (service) => {
        const filtered = get().items.filter((item) => item.id !== service.id);
        set({
            items: [service, ...filtered].slice(0, MAX_VIEWED)
        },
        false,
        "items/addService"
    
    )
     },
     clearViewed: () => set(
        {items: []},
        false,
        "items/clearViewed"
    
    )
});