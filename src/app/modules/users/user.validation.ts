import { z } from 'zod';

// Signup Validation Schema
export const signupSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

// Signin Validation Schema
export const signinSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

// Update Profile Validation Schema
export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    planType: z.enum(['normal', 'premium']).optional(),
  }),
});

// Forgot Password Validation Schema
export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    password: z.string().min(6),
  }),
});
