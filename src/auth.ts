// src/auth.ts
import { getServerSession } from "next-auth"
import { cookies } from "next/headers"
import GitHubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
 callbacks: {
  // async signIn({ user }) {
  //   console.log("User signing in:", user)
  //   const allowedEmails = ["c.alexreed@gmail.com"]
  //   return allowedEmails.includes(user.email!)
  // },
  async session({ session, token }) {
    if (session?.user?.email === "c.alexreed@gmail.com") {
      session.user.role = "developer" // attach custom role
    } else {
      session.user.role = "user"
    }
    return session
  }
},

  secret: process.env.NEXTAUTH_SECRET,
}


export function auth() {
  return getServerSession(authOptions)
}