// components/LoreCard.tsx
'use client'

import { useState } from 'react'
import { ScaleIcon, ClipboardIcon } from '@heroicons/react/24/solid'

type LoreCardProps = {
  title?: string
  content: string
  prompt?: string
}

export default function LoreCard({ title = "Generated Lore", content, prompt }: LoreCardProps) {
  const [copyFeedback, setCopyFeedback] = useState('Copy');
  const [saveFeedback, setSaveFeedback] = useState('Save TXT');

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyFeedback('Copied!');
      setTimeout(() => setCopyFeedback('Copy'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyFeedback('Failed!');
      setTimeout(() => setCopyFeedback('Copy'), 2000);
    }
  };

  const handleSaveAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, '_').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setSaveFeedback('Saved!');
    setTimeout(() => setSaveFeedback('Save TXT'), 2000);
  };

  return (
    <div className="rounded-xl shadow-tech bg-slate-400 border border-slate-700 transform hover:scale-[1.005] transition-transform duration-200 ease-out"> {/* Updated background, border */}

      {/* Generated Lore Heading and Buttons */}
      <div className="p-6 pb-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-300">Generated Lore</h2> {/* Updated text color */}
          <div className="flex space-x-3">
            <button
              onClick={handleCopyToClipboard}
              className="bg-blue-900 hover:bg-border-subtle text-gray-300 px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-1 border border-slate-700" 
            >
              <ClipboardIcon className="h-4 w-4" /> {copyFeedback}
            </button>
            <button
              onClick={handleSaveAsTxt}
              className="bg-blue-900 hover:bg-border-subtle text-gray-300 px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-1 border border-slate-700"
            >
              <ScaleIcon className="h-4 w-4" /> {saveFeedback}
            </button>
          </div>
        </div>
      </div>

      {prompt && (
        <div className="mb-6 pb-6 border-b border-dashed border-slate-700 p-6 pt-0"> {/* Updated border color */}
          <h3 className="text-xl font-semibold mb-3 text-gray-300">Your Prompt:</h3> {/* Updated text color */}
          <p className="bg-blue-900 p-4 rounded-lg italic text-gray-400 border border-slate-700"> {/* Updated colors, added border */}
            {prompt}
          </p>
        </div>
      )}

      {/* Lore Content */}
      <div className={`p-6 ${!prompt ? 'pt-6' : 'pt-0'}`}>
        <div className="bg-blue-900 p-6 rounded-lg font-mono text-gray-300 whitespace-pre-wrap leading-relaxed border border-slate-700 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar"> {/* Updated colors, border */}
          {content}
        </div>
      </div>
    </div>
  )
}