import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import LoreForm from './components/LoreForm'

export default async function Home() {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  if (session?.user?.role !== 'developer') {
    redirect('/coming-soon')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-sans">
      <header className="py-4 px-6 flex justify-between items-center bg-slate-700 shadow-lg border-b border-slate-700">
        <h1 className="text-3xl font-bold text-cyan-500 tracking-wide">Lore Forge</h1>
        <p className="text-gray-300">Welcome back, {session?.user?.email}</p>
      </header>

      <LoreForm session={session} />

      <footer className="mt-auto py-4 text-center text-sm text-gray-400 bg-slate-700 shadow-inner border-t border-slate-700">
        Powered by <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="underline text-cyan-500 hover:text-purple-500">Hugging Face</a>
      </footer>
    </div>
  )
}
