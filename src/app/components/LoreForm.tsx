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
  {
    text: "A clandestine organization of bio-engineered super-soldiers, operating beyond government control.",
    type: "faction",
    genre: "sci-fi"
  },
  {
    text: "A clandestine organization of bio-engineered super-soldiers, operating beyond government control.",
    type: "faction",
    genre: "sci-fi"
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
  const [title, setTitle] = useState('Title')
  const [result, setResult] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleGenerate = () => {
    startTransition(async () => {
      setSubmittedPrompt(prompt)
      const lore = await generateLore(prompt, type, genre)
      setResult(lore)
    });
  };

  const handleSamplePromptClick = (sample: typeof samplePrompts[0]) => {
    setPrompt(sample.text)
    setType(sample.type)
    setGenre(sample.genre)
  }

  // const handleDummyPromptClick = (lore: typeof dummyLoreData[0]) => {
  //   setPrompt(lore.text)
  //   setType(lore.type)
  //   setGenre(lore.genre)
  //   setResult(lore.content)
  //   setSubmittedPrompt(lore.text)
  //   setTitle(lore.title);
  // }
  

  return (
    <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
       {/* Left Column: Generator Controls */}
      <section className="lg:col-span-1 space-y-6 p-6 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-500/20 border border-gray-700"> 
        <h1 className="flex justify-center text-center text-3xl font-bold text-cyan-400 tracking-wide mb-4">
          Generate New Lore with The Lore Forge
        </h1>
        {/* Prompt Input */}
        <div className="space-y-3">
          <label htmlFor="prompt" className="block font-medium text-gray-50 text-lg mb-1">
            Craft Your Lore Prompt:
          </label>
          <textarea
            id="prompt"
            className="w-full p-4 border border-gray-700 rounded-lg bg-gray-950 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 resize-y" 
            placeholder="Describe your character, faction, world, or quest..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={8}
          />
        </div>
      {/* Type and Genre Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lore-type" className="block font-medium text-gray-50 mb-1">
              Lore Type:
            </label>
            <select
              id="lore-type"
              className="cursor-pointer w-full p-3 rounded-lg bg-gray-950 text-gray-50 border border-gray-700 focus:ring-2 focus:ring-cyan-400 appearance-none bg-no-repeat bg-right-center pr-8 custom-select-arrow"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%2322D3EE' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3E%3C/svg%3E")`, backgroundSize: '1.25em', backgroundPosition: 'right 0.75em center' }}
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
            <label htmlFor="lore-genre" className="block font-medium text-gray-50 mb-1">
              Genre:
            </label>
            <select
              id="lore-genre"
              className="cursor-pointer w-full p-3 rounded-lg bg-gray-950 text-gray-50 border border-gray-700 focus:ring-2 focus:ring-cyan-400 appearance-none bg-no-repeat bg-right-center pr-8 custom-select-arrow"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%2322D3EE' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3E%3C/svg%3E")`, backgroundSize: '1.25em', backgroundPosition: 'right 0.75em center' }}
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
          className="cursor-pointer w-full bg-cyan-400 text-gray-950 px-6 py-3 rounded-lg font-bold hover:bg-fuchsia-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2 text-lg uppercase tracking-wide transform hover:scale-[1.01] active:scale-98"
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

        { /* --- Dummy Prompts Section --- */}
        {/* <div className="space-y-3 pt-4 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-gray-50">Dummy Data</h3>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {dummyLoreData.map((lore, index) => (
              <button
                key={index}
                onClick={() => handleDummyPromptClick(lore)}
                className="cursor-pointer bg-gray-950 hover:bg-gray-700 text-gray-50 text-sm px-4 py-2 rounded-full transition-colors duration-200 shrink-0 border border-gray-700 flex items-center gap-1 opacity-90 hover:opacity-100 transform hover:scale-[1.02] active:scale-98"
              >
                 <SparklesIcon className="h-4 w-4 text-cyan-400" />
                {lore.title} - {lore.type} - {lore.genre}
              </button>
            ))}
          </div>
        </div> */}

        {/* --- Sample Prompts Section --- */}
        <div className="space-y-3 pt-4 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-gray-50">Quick prompt:</h3>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {samplePrompts.map((sample, index) => (
              <button
                key={index}
                onClick={() => handleSamplePromptClick(sample)}
                className="cursor-pointer bg-gray-950 hover:bg-gray-700 text-gray-50 text-sm px-4 py-2 rounded-full transition-colors duration-200 shrink-0 border border-gray-700 flex items-center gap-1 opacity-90 hover:opacity-100 transform hover:scale-[1.02] active:scale-98"
              >
                 <SparklesIcon className="h-4 w-4 text-cyan-400" />
                {sample.type} - {sample.genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Lore Result Section --- */}
      <section className="lg:col-span-2 p-6 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-500/20 border border-gray-700 flex flex-col">
        {result ? (
          <div className="flex-grow overflow-hidden">
            <LoreCard title={title} content={result} prompt={submittedPrompt} genre={genre} type={type} />
          </div>
        ) : (
          <div className="flex-grow flex-column items-center content-center justify-center text-gray-400 text-center p-4 text-xl tracking-wide">
            <p className="mb-4">Welcome{session?.user?.name ? `, ${session.user.name}` : ''}!</p>
            <p>Your generated lore will appear here. Start by crafting a prompt in the Forge!</p>
            <p className="text-lg mt-2">(This is the real Forge, meant for development eyes only)</p>
          </div>
        )}
      </section>
      <p className="text-sm text-gray-300">{session?.user?.name}'s previous prompts... (Future Idea)</p>
    </main>
  )
}
