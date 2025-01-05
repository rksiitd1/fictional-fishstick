interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-t-lg focus:outline-none ${
        isActive
          ? 'bg-yellow-200 text-gray-800'
          : 'bg-yellow-100 text-gray-600 hover:bg-yellow-200'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

