interface NoteAreaProps {
  value: string
  onChange: (newValue: string) => void
}

export default function NoteArea({ value, onChange }: NoteAreaProps) {
  return (
    <div className="relative bg-yellow-100 p-8">
      <textarea
        className="w-full h-[calc(100vh-12rem)] bg-transparent resize-none focus:outline-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #999 31px, #999 32px)',
          lineHeight: '32px',
          padding: '0 0 0 32px',
          backgroundAttachment: 'local',
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing your notes here..."
      />
      <div
        className="absolute top-0 left-8 bottom-0 w-0.5 bg-red-400"
        style={{ marginLeft: '30px' }}
      />
    </div>
  )
}

