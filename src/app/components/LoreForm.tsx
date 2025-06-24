'use client'

import { useState, useTransition } from 'react'
import { generateLore } from '@/app/actions/generateLore'
import LoreCard from './LoreCard'
import { Session } from 'next-auth'

import { SparklesIcon } from '@heroicons/react/24/solid'

const samplePrompts = [
  {
    text: "A mysterious swordsman who wanders a post-apocalyptic desert, searching for lost technology.",
    type: "character",
    genre: "general"
  },
  {
    text: "A forgotten king, cursed to roam the land as a spectral knight, seeks redemption.",
    type: "character",
    genre: "fantasy"
  },
  {
    text: "A galaxy-spanning empire on the brink of civil war, fractured by political intrigue and ancient prophecies.",
    type: "world",
    genre: "sci-fi"
  },
  {
    text: "A street-level hacker uncovers a corporate conspiracy that threatens the entire city's data network.",
    type: "character",
    genre: "cyberpunk"
  },
  {
    text: "Recover the legendary 'Blade of Whispers' from the tomb of the Shadow Emperor.",
    type: "quest",
    genre: "fantasy"
  },
  {
    text: "A clandestine organization of bio-engineered super-soldiers, operating beyond government control.",
    type: "faction",
    genre: "sci-fi"
  },
]

export default function LoreForm({ session }: { session: Session }) {
  const [prompt, setPrompt] = useState('')
  const [type, setType] = useState('character')
  const [genre, setGenre] = useState('general')
  const [result, setResult] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleGenerate = () => {
    startTransition(async () => {
      setSubmittedPrompt(prompt)
      const lore = await generateLore(prompt, type, genre)
      setResult(lore)
    })
  }

  const handleSamplePromptClick = (sample: typeof samplePrompts[0]) => {
    setPrompt(sample.text)
    setType(sample.type)
    setGenre(sample.genre)
  }

  return (
    <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
      <section className="lg:col-span-1 space-y-6 p-6 bg-slate-400 rounded-xl shadow-tech border border-slate-700">
       <p className="text-sm text-gray-300">Signed in as {session?.user?.email}</p>
        <h1 className="flex justify-center text-center text-3xl font-bold text-gray-300 tracking-wide">
          Generate New Lore with The Lore Forge
        </h1>

        <div className="space-y-3">
          <label htmlFor="prompt" className="block font-medium text-gray-300 text-lg">
            Craft Your Lore Prompt:
          </label>
          <textarea
            id="prompt"
            className="w-full p-3 border border-slate-700 rounded-lg bg-blue-900 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
            placeholder="Describe your character, faction, world, or quest..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={8}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lore-type" className="block font-medium text-gray-300 mb-1">
              Lore Type:
            </label>
            <select
              id="lore-type"
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-300 border border-slate-700 focus:ring-2 focus:ring-cyan-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="character">Character Lore</option>
              <option value="faction">Faction Lore</option>
              <option value="world">World Lore</option>
              <option value="quest">Quest Lore</option>
            </select>
          </div>

          <div>
            <label htmlFor="lore-genre" className="block font-medium text-gray-300 mb-1">
              Genre:
            </label>
            <select
              id="lore-genre"
              className="w-full p-3 rounded-lg bg-blue-900 text-gray-300 border border-slate-700 focus:ring-2 focus:ring-cyan-500"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="general">General</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isPending || !prompt}
          className="w-full bg-cyan-500 text-gray-300 px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <SparklesIcon className="h-5 w-5 animate-pulse animate-spin" /> Forging Lore...
            </>
          ) : (
            <>
              <SparklesIcon className="h-5 w-5" /> Generate Lore
            </>
          )}
        </button>

        <div className="space-y-3 pt-4 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-gray-300">Or try a sample prompt:</h3>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {samplePrompts.map((sample, index) => (
              <button
                key={index}
                onClick={() => handleSamplePromptClick(sample)}
                className="bg-blue-900 hover:bg-border-subtle text-gray-300 text-sm px-3 py-1 rounded-full transition-colors duration-200 shrink-0 border border-slate-700"
              >
                {sample.type} - {sample.genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:col-span-2 p-6 bg-slate-400 rounded-xl shadow-lg border border-slate-700 flex flex-col">
        {result ? (
          <div className="flex-grow overflow-hidden">
            <LoreCard content={result} prompt={submittedPrompt} />
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-700 text-center p-4">
            <p>Your generated lore will appear here. Start by crafting a prompt on the left!</p>
          </div>
        )}
      </section>
    </main>
  )
}
