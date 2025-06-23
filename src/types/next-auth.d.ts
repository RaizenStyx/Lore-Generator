// types/next-auth.d.ts
import type { NextAuth } from "next-auth" // Keeps TypeScript happy

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      role?: "developer" | "user"
    }
  }
}
