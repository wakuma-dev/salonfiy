export type Service = {
    id: string;
    name: string;
    category: "Hair" | "Makeup" | "Nails" | "Facial & Skincare" | "Massage & Spa" | "Foot Care" | "Hair Removal"
    info: string;
    price: number;
    image: string;
    duration: number;
    tags: ("trending" | "new" | "recommend")[]
}