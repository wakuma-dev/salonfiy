import { z } from "zod";
export const registerSchema = z.object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password should contain 8 characters"),
    confirmPassword: z.string(),
    agreeTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and condition"
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
});
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password should contain 8 characters")
});
export type LoginDataType = z.infer<typeof loginSchema>;
export type RegisterDataType = z.infer<typeof registerSchema>;
