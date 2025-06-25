"use client"
import { Session } from 'next-auth'
import { InformationCircleIcon, LinkIcon } from '@heroicons/react/24/solid'

export default function Footer({ session }: { session: Session }) {

  return (

<footer className="mt-auto py-4 px-6 text-center text-sm text-gray-400 bg-gray-900 shadow-inner border-t border-gray-700">
  <div className="mb-2 flex items-center justify-center gap-2">
    <InformationCircleIcon className="h-5 w-5 text-cyan-400" /> 
    {session ? (
      <p className="text-gray-50 font-medium">Signed in with this email: <span className="text-cyan-400">{session.user?.email}</span></p> 
    ) : (
      <p className="text-gray-50">You are not signed in.</p> 
    )}
  </div>
  <p className="flex items-center justify-center gap-1">
    Will be Powered by{' '}
    <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-fuchsia-500 transition-colors duration-200 flex items-center gap-1">
      Vertex AI <LinkIcon className="h-4 w-4" />
    </a>
     Developed by Connor Reed
  </p>
</footer>
    
  )
}
