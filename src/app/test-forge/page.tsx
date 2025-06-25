import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import LoreFormTestPage from '../components/LoreFormTest'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default async function TestForgePage() {
  const session = await auth()

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-sans">

      <Navbar session={session} />

      <LoreFormTestPage session={session} />

      <Footer session={session} />
      
    </div>
  )
}
