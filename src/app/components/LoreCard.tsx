// components/LoreCard.tsx
'use client'

import { useState } from 'react'
import { DocumentIcon, ScaleIcon, ClipboardIcon, InformationCircleIcon, DocumentTextIcon, BookOpenIcon } from '@heroicons/react/24/solid'

type LoreCardProps = {
  title: string
  content: string
  prompt?: string
  genre: string
  type: string
}

export default function LoreCard({ title, content, prompt, genre, type }: LoreCardProps) {
  const [copyFeedback, setCopyFeedback] = useState('Content Copy');
  const [saveFeedback, setSaveFeedback] = useState('Save All TXT');

  const thisgenre = genre?.toUpperCase()[0].concat(genre?.toLowerCase().slice(1));
  const thistype = type?.toUpperCase()[0].concat(type?.toLowerCase().slice(1));
  const thistitle = title?.toUpperCase()[0].concat(title?.toLowerCase().slice(1));
  const newfile = thistitle.concat(`\n\n${content}\n\nLore Type: ${thistype}\n\nGenre: ${thisgenre}\n\nYour prompt: ${prompt}`);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyFeedback('Copied!');
      setTimeout(() => setCopyFeedback('Content Copy'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyFeedback('Failed!');
      setTimeout(() => setCopyFeedback('Content Copy'), 2000);
    }
  };

  const handleSaveAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([newfile], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, '_').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setSaveFeedback('Saved!');
    setTimeout(() => setSaveFeedback('Save All TXT'), 2000);
  };

  return (
    <div className="p-8 rounded-xl bg-gray-900 border border-gray-700 shadow-xl ring-1 ring-cyan-500/20 transform hover:scale-[1.01] transition-transform duration-200 ease-out hover:border-none hover:shadow-none hover:ring-0"> 
        <div className="pb-6 border-b border-gray-700 mb-6">
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-cyan-400 items-center gap-2"> 
            {thistype} Lore Title: <br /><br />
            <span className='text-fuchsia-900'>{title}</span>
          </h2>          
          </div>
        </div>
      {/* Lore Prompt Details */}
      {prompt && (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-50 flex items-center gap-2"> 
          <InformationCircleIcon className="h-5 w-5 text-gray-400" /> Your Prompt Details: 
        </h3>
        <p className="bg-gray-950 p-4 rounded-lg italic text-gray-400 border border-gray-700 text-sm leading-relaxed">
          **Prompt:** <span className="text-gray-50">{prompt}</span> 
        </p>
        <div className='flex flex-wrap justify-center sm:justify-start gap-4 text-sm'>
          <span className="text-gray-400 bg-gray-950 p-3 rounded-lg border border-gray-700 flex items-center gap-1 uppercase"> 
            <DocumentIcon className="h-4 w-4 text-cyan-400" /> Type: <span className="text-gray-50 font-bold"> {type || 'N/A'}</span> 
          </span>
          <span className="text-gray-400 bg-gray-950 p-3 rounded-lg border border-gray-700 flex items-center gap-1 uppercase"> 
            <BookOpenIcon className="h-4 w-4 text-cyan-400" /> Genre: <span className="text-gray-50 font-bold"> {genre || 'N/A'}</span> 
          </span>
        </div>
      </div>
      )}

      {/* Lore Content */}
        <div className={`${!prompt ? 'pt-0' : 'pt-6'}`}>
         <h3 className="text-xl font-semibold text-gray-50 mb-4 flex items-center gap-2"> 
           <DocumentTextIcon className="h-5 w-5 text-cyan-400" /> The Lore Forge's Output:
          </h3>
          <div className="bg-gray-950 p-6 rounded-lg font-mono text-gray-50 whitespace-pre-wrap leading-relaxed border border-gray-700 max-h-[calc(100vh-350px)] overflow-y-auto custom-scrollbar shadow-inner">
            {content}
          </div>
        </div>
      {/* Generated Lore Notes and Buttons */}
      <div className="pt-6">
        <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
          <div className="flex space-x-3">
        <button
          onClick={handleCopyToClipboard}
          className="cursor-pointer bg-gray-950 hover:bg-gray-700 text-gray-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2 border border-gray-700 uppercase opacity-90 hover:opacity-100 transform hover:scale-[1.05] active:scale-95" 
        >
          <ClipboardIcon className="h-4 w-4 text-cyan-400" /> {copyFeedback}
        </button>
        <button
          onClick={handleSaveAsTxt}
          className="cursor-pointer bg-gray-950 hover:bg-gray-700 text-gray-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2 border border-gray-700 uppercase opacity-90 hover:opacity-100 transform hover:scale-[1.05] active:scale-95" 
        >
          <ScaleIcon className="h-4 w-4 text-cyan-400" /> {saveFeedback}
        </button>
      </div>
      </div>
    </div>
</div>
    
  )
}

