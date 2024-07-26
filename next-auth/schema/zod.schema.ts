import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string().trim().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, { message: "Password must contain at least one uppercase letter" }),
  confirmPassword: z.string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, { message: "Password must contain at least one uppercase letter" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type TypeSignUpFields = z.infer<typeof SignUpSchema>;

export const SignUpInitialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const SignInSchema = z.object({
  emailOrUsername: z.string(),
  password: z.string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, { message: "Password must contain at least one uppercase letter" }),
});

export type TypeSignInFields = z.infer<typeof SignInSchema>;

export const SignInInitialValues = {
  emailOrUsername:'',
  password: '',
};



