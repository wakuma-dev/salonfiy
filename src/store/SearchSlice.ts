import type { StateCreator } from "zustand";
import type { Service } from "./service.types";
import type { Store } from "./types";
type SearchState = {
    searchQuery: string;
   services: Service[],
   isLoading: boolean,
   filteredService: Service[]
}
type SearchAction = {
    setSearchQuery: (query: string) => void;
    setAllServices: (services: Service[]) => void;
    executeSearch: () => void;
}
export type SearchSlice = SearchState & SearchAction;

export const createSearchSlice: StateCreator<Store, [["zustand/devtools", never]], [], SearchSlice> = (set, get) => ({
   searchQuery: "",
   services: [],
   isLoading: false,
   filteredService: [],
   setSearchQuery: (query) => set({searchQuery: query}),
   setAllServices: (services) => {
    set({services, filteredService: services})
   },
   executeSearch: () => {
    const { searchQuery, services } = get();
    if(!searchQuery.trim()){
        set({
            filteredService: services,
            isLoading: false
        });
        return;
    }
    set({
        isLoading: true,
    });
    const filtered = services.filter((service) => 
     service.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    set({
        filteredService: filtered,
        isLoading: false
    })
   }
 })
