import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  SparklesIcon, InformationCircleIcon, GlobeAltIcon, LinkIcon,
  BoltIcon, AdjustmentsVerticalIcon, ShareIcon, CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline'

export default async function ComingSoon() {
   const session = await auth()
  
    if (!session) {
      redirect('/api/auth/signin')
    }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-sans">
      <Navbar session={session} />
       <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8 bg-gray-950 text-gray-50">
  {/* Left Column: Hero & Intro (Full width on small, 1/3 on large) */}
  <section className="lg:col-span-1 space-y-8 p-8 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-400/20 border border-gray-700 flex flex-col justify-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-400 leading-tight tracking-tighter text-center sm:text-left animate-fade-in">
      <span className="block">The Forge Awaits:</span>
      <span className="block text-fuchsia-500 mt-2">Crafting Worlds.</span>
    </h1>
    <p className="text-lg text-gray-50 leading-relaxed text-center sm:text-left opacity-90 animate-fade-in delay-200">
      You&apos;ve stumbled upon the digital foundry where narratives ignite. Lore Forge is your AI-powered co-creator, designed to streamline your game development workflow by generating rich, detailed lore with unprecedented ease.
    </p>
    <div className="flex justify-center sm:justify-start pt-6">
        <Link href="/test-forge" className="bg-cyan-400 text-gray-950 px-8 py-4 rounded-lg font-bold text-xl uppercase tracking-wider shadow-lg hover:bg-fuchsia-500 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in delay-50 flex items-center gap-3">
            <SparklesIcon className="h-7 w-7 animate-pulse" /> Try The Test Forge!
        </Link>
    </div>
  </section>

  {/* Right Column: Features & Future (Full width on small, 2/3 on large) */}
  <section className="lg:col-span-2 space-y-10 p-8 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-400/20 border border-gray-700 flex flex-col justify-start">
    <h2 className="text-3xl font-bold text-gray-50 mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
      <InformationCircleIcon className="h-8 w-8 text-cyan-400" /> What is The Lore Forge?
    </h2>
    <div className="text-lg text-gray-50 leading-relaxed space-y-4">
      <p>
        Say goodbye to writer&apos;s block and endless brainstorming. With Lore Forge, you can swiftly generate compelling narratives for your characters, intricate histories for your factions, expansive backstories for your worlds, and detailed outlines for your quests. Simply provide a high-level prompt, select your desired genre, and watch as our advanced AI brings your concepts to life.
      </p>
      <p className="italic text-gray-400">
        &quot;Accelerate your creativity. Focus on building your game, not getting stuck on lore.&quot;
      </p>
    </div>

    <h2 className="text-3xl font-bold text-gray-50 mb-6 border-b border-gray-700 pb-4 flex items-center gap-3">
      <BoltIcon className="h-8 w-8 text-fuchsia-500" /> The Future of Storytelling:
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-50 leading-relaxed">
      <div className="space-y-3 p-4 bg-gray-950 rounded-lg border border-gray-800 shadow-inner">
        <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <AdjustmentsVerticalIcon className="h-6 w-6" /> Customizable AI Models
        </h3>
        <p>Train the AI on your specific game&apos;s lore, style guides, and tone to generate truly unique narratives that fit seamlessly into your universe.</p>
      </div>
      <div className="space-y-3 p-4 bg-gray-950 rounded-lg border border-gray-800 shadow-inner">
        <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <GlobeAltIcon className="h-6 w-6" /> Expanded Genres & Tones
        </h3>
        <p>Dive deeper into niche genres, explore specific narrative tones, or generate lore in multiple languages for global appeal.</p>
      </div>
      <div className="space-y-3 p-4 bg-gray-950 rounded-lg border border-gray-800 shadow-inner">
        <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <ShareIcon className="h-6 w-6" /> Collaborative Features
        </h3>
        <p>Work seamlessly with your team. Share lore drafts, provide feedback, and iterate on narratives in a shared workspace.</p>
      </div>
      <div className="space-y-3 p-4 bg-gray-950 rounded-lg border border-gray-800 shadow-inner">
        <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <CodeBracketIcon className="h-6 w-6" /> Direct Integrations & Export
        </h3>
        <p>Export lore directly into popular game engines, documentation formats, or connect via API for dynamic in-game content.</p>
      </div>
    </div>    
  </section>
</div>
  <div className="flex-grow grid grid-cols-1 lg:grid-cols-1 gap-8 p-6 lg:p-8 bg-gray-950 text-gray-50">
<section className="space-y-10 p-8 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-400/20 border border-gray-700 flex flex-col justify-start">
{/* Call to Action: Support Us */}
<div className="pt-10  mb-10 text-center">
  <h2 className="text-3xl font-bold text-gray-50 mb-6 flex items-center justify-center gap-3">
    <HeartIcon className="h-8 w-8 text-fuchsia-500" /> Support Lore Forge&apos;s Vision
  </h2>
  <p className="text-lg text-gray-50 leading-relaxed mb-8">
    Lore Forge is a passion project, built by a solo developer dedicated to empowering game creators. If you believe in this vision and want to see Lore Forge grow, consider supporting its development. Your contributions fuel future features and ensure this tool remains accessible to all.
  </p>
  <a href="https://6801801549663.gumroad.com/l/nayuj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-fuchsia-500 text-gray-950 px-8 py-4 rounded-lg font-bold text-xl uppercase tracking-wider shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95">
    <LinkIcon className="h-6 w-6 mr-2" /> Support Development
  </a>
  <p className="text-lg text-gray-50 leading-relaxed mt-8">
   Click the link to donate now and/or to get a free notion template for writting down ideas about articles you&apos;ve read, and to help fund the continued development of Lore Forge. Your support makes a difference!
  </p>
</div>
</section>
</div>
  <Footer session={session} />
</div>
  )
}
