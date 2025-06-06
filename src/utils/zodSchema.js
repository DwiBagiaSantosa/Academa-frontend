import { z } from "zod"

export const signUpSchema = z.object({
    name: z.string().nonempty("Name is required").min(5, "Name must be at least 5 characters long"),
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters long"),
    role: z.enum(["manager", "student"], { required_error: "Please select a role" }),
})

export const signInSchema = signUpSchema.omit({ name: true, role: true })

export const createCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(5, { message: "Please select a category" }),
    tagline: z.string().min(5),
    description: z.string().min(5),
    thumbnail: z.any().refine((file) => file?.name, { message: "Thumbnail is required" }),
})

export const updateCourseSchema = createCourseSchema.partial({ thumbnail: true })

export const mutateContentSchema = z.object({
    title: z.string().min(5),
    type: z.string().min(3, { message: "Please select a type" }),
    youtubeId: z.string().optional(),
    text: z.string().optional(),
}).superRefine((val, ctx) => {
    const parseYoutubeId = z.string().min(4).safeParse(val.youtubeId)
    const parseText = z.string().min(4).safeParse(val.text)

    if (val.type === "video") {
        if (!parseYoutubeId.success) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Youtube Id is required",
                path: ["youtubeId"]
            })
        }

    }
    
    if (val.type === "text") {
        if (!parseText.success) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Content text is required",
                path: ["text"]
            })
        }
    }
})

export const createStudentSchema = z.object({
    name: z.string().min(5, { message: "Full Name must be at least 5 characters long" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    photo: z.any().refine((file) => file?.name, { message: "Photo is required" }),
})

export const updateStudentSchema = createStudentSchema.omit({ photo: true, password: true })

export const addStudentCourseSchema = z.object({
    studentId: z.string().min(5, { message: "Please select a student" }),
})