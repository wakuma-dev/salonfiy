import type { Service } from "@/store/service.types";
export type WishlistProp = {
    id: string;
    userId: string;
    wishlistId: string;
    service: Service;
}