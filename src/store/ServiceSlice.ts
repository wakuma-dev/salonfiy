import { type StateCreator } from "zustand";
import type { Store } from "./types";
import type { Service } from "./service.types";
type ServiceState = {
    services: Service[];
    selectedCategory: Service["category"];
}
type ServiceAction = {
    setServices: (services: Service[]) => void;
    setSelectedCategory: (category: Service["category"] | "Hair") => void;
}
export type ServiceSlice = ServiceState & ServiceAction;

export const createServiceSlice: StateCreator<Store, [['zustand/devtools', never]], [], ServiceSlice> = (set) => ({
    services: [],
    selectedCategory: "Hair",
    setServices: (services) => set(
        {services},
        false,
        "services/setServices"
    ),
   setSelectedCategory: (category) => set(
    {selectedCategory:category},
    false,
    "services/setSelectedCategory"
   )
})