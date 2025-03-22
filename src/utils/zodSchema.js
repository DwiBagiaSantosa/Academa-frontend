import { z } from "zod"

export const signUpSchema = z.object({
    name: z.string().nonempty("Name is required").min(5, "Name must be at least 5 characters long"),
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
})

export const signInSchema = signUpSchema.omit({ name: true })

export const createCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(5, { message: "Please select a category" }),
    tagline: z.string().min(5),
    description: z.string().min(5),
    thumbnail: z.any().refine((file) => file?.name, { message: "Thumbnail is required" }),
})

export const updateCourseSchema = createCourseSchema.partial({ thumbnail: true })