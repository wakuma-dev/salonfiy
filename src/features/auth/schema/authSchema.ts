import { z } from "zod";
export const registerSchema = z.object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.string().min(1, { message: "Email is required"}).email({message: "Invalid email address"}),
    password: z.string().min(1, {message: "Password is required"}).min(8, {message: "Password should contain 8 characters"}),
    confirmPassword: z.string().min(1, {message: ("Confirm password is required")}),
    agreeTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and condition"
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
});
export const loginSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email address"}),
    password: z.string().min(1,{message: "Password is required"}).min(8, {message: "Password should contain 8 characters"})
});
export type LoginDataType = z.infer<typeof loginSchema>;
export type RegisterDataType = z.infer<typeof registerSchema>;
