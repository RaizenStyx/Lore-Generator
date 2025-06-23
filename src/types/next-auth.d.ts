// types/next-auth.d.ts
import type { Session } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: Session["user"] & {
      role?: "developer" | "user"
    }
  }
}
