import { X } from 'lucide-react'
import { QuoteForm } from './QuoteForm'

export function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <QuoteForm onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

