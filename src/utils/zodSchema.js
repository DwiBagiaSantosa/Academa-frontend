import { z } from "zod"

export const signUpSchema = z.object({
    name: z.string().nonempty("Name is required").min(5, "Name must be at least 5 characters long"),
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
})

export const signInSchema = signUpSchema.omit({ name: true })