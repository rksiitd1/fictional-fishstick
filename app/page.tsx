'use client'

import { useState } from 'react'
import Tab from './components/Tab'
import NoteArea from './components/NoteArea'

const contexts = ['Work', 'Personal', 'Ideas']

export default function LegalPad() {
  const [activeTab, setActiveTab] = useState(0)
  const [notes, setNotes] = useState(contexts.map(() => ''))

  const handleNoteChange = (newNote: string) => {
    const updatedNotes = [...notes]
    updatedNotes[activeTab] = newNote
    setNotes(updatedNotes)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-yellow-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          {contexts.map((context, index) => (
            <Tab
              key={context}
              label={context}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <NoteArea
          value={notes[activeTab]}
          onChange={handleNoteChange}
        />
      </div>
    </div>
  )
}

