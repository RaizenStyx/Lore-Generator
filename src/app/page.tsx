import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import LoreForm from './components/LoreForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default async function Home() {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  if (session?.user?.role !== 'developer') {
    redirect('/coming-soon')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 font-sans">

      <Navbar session={session} />

      <LoreForm session={session} />

      <Footer session={session} />

      
    </div>
  )
}
