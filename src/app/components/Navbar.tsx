"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Lore Forge</h1>
      <div>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : session ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn("github")}>Sign In</button>
        )}
      </div>
    </nav>
  )
}
