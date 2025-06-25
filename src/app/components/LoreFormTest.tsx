'use client'

import { useState } from 'react'
import LoreCard from './LoreCard'
import { Session } from 'next-auth'
import { testLoreEntries, type LoreEntry } from '@/app/data/testLoreEntries'

import { SparklesIcon, BookOpenIcon } from '@heroicons/react/24/solid'

// Type definition for the current page's internal state for Lore Type
type LoreType = 'character' | 'faction' | 'world' | 'quest';

export default function LoreFormTestPage({ session }: { session: Session }) {
  const [prompt, setPrompt] = useState('')
  const [type, setType] = useState<LoreType>('character')
  const [genre, setGenre] = useState('general')
  const [title, setTitle] = useState('Title')
  const [result, setResult] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('');

// --- Filtered Test Lore Data (for display in buttons) ---
  const filteredTestLore = testLoreEntries.filter(entry => {
    return (type === 'character' || entry.type === type) &&
           (genre === 'general' || entry.genre === genre);
  });
  
  // --- Handle Click on a Test Lore Button ---
  const handleTestPromptClick = (lore: LoreEntry) => { // Use LoreEntry interface here
    setPrompt(lore.text); // Set disabled textbox to the prompt text
    setType(lore.type);   // Set selected type in dropdown
    setGenre(lore.genre); // Set selected genre in dropdown
    setResult(lore.content); // Directly set the content for LoreCard
    setSubmittedPrompt(lore.text); // Display the prompt in LoreCard
    setTitle(lore.title); // Set the title for LoreCard
  };

  
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
            disabled
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
              onChange={(e) => setType(e.target.value as LoreType)} // Cast to LoreType
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


        { /* --- Test Prompts Section --- */}
        <div className="space-y-3 pt-4 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-gray-50">Select a pre-generated prompt to see result</h3>
          <div className="flex flex-wrap gap-2 max-h-50 overflow-y-auto pr-2 custom-scrollbar">
            {filteredTestLore.length > 0 ? (
              filteredTestLore.map((lore, index) => (
                <button
                  key={index}
                  onClick={() => handleTestPromptClick(lore)}
                  className="cursor-pointer bg-gray-950 hover:bg-gray-700 text-gray-50 text-sm px-4 py-2 rounded-full transition-colors duration-200 shrink-0 border border-gray-700 flex items-center gap-1 opacity-90 hover:opacity-100 transform hover:scale-[1.02] active:scale-98"
                >
                  <SparklesIcon className="h-4 w-4 text-cyan-400" />
                  {lore.title}
                </button>
              ))
            ) : (
              <p className="text-gray-400 italic">No matching test lore entries found for the selected filters.</p>
            )}
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
            <p>Select a pre-generated lore prompt from the left panel to see how The Lore Forge works!</p>
            <p className="text-lg mt-2">(This is a demo page, the main Forge is coming soon!)</p>
          </div>
        )}
      </section>
        {/* --- ALL AVAILABLE TEST PROMPTS OVERVIEW --- */}
      <section className="lg:col-span-3 space-y-6 p-6 bg-gray-900 rounded-xl shadow-xl ring-1 ring-cyan-500/20 border border-gray-700 mt-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3 justify-center">
          <BookOpenIcon className="h-8 w-8 text-fuchsia-500" /> Complete Lore Demo Collection
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Below is a full list of all the pre-generated lore examples available in the Test Forge. Click on any entry in the left panel to load its details and generated content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 custom-scrollbar max-h-[500px] overflow-y-auto pr-2">
          {testLoreEntries.map((lore, index) => (
            <div key={index} className="bg-gray-950 p-4 rounded-lg border border-gray-800 shadow-inner space-y-2 opacity-90 hover:opacity-100 transition-opacity transform hover:scale-[1.01]">
              <h3 className="text-lg font-semibold text-gray-50 flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-cyan-400" />
                {lore.title}
              </h3>
              <p className="text-sm text-gray-400">
                <span className="font-medium text-cyan-400">{lore.type}:</span> {lore.text}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700">
                  Type: <span className="font-medium text-gray-50">{lore.type}</span>
                </span>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700">
                  Genre: <span className="font-medium text-gray-50">{lore.genre}</span>
                </span>
                <button 
                onClick={() => handleTestPromptClick(lore)} 
                className="bg-gray-800 text-gray-50 px-2 py-1 rounded-full border border-gray-700 hover:bg-cyan-400 hover:text-fuchsia-500 cursor-pointer">
                  Select Prompt
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
