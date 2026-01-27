"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Banner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check localStorage only on client side
    const isSubscribed = localStorage.getItem("cti_subscribed") === "1"
    setOpen(!isSubscribed)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-sky-400 border-b border-black/10">
      {/* Centered content */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-3">
          <p className="text-[16px] text-white font-mono">
            Want to Submit A Pitch?
          </p>

          <a
            href="/submit"
            className="ml-6 rounded bg-white px-7 py-1.5 text-[16px] font-mono font-medium text-sky-600 hover:bg-zinc-50"
          >
            Go
          </a>
        </div>
      </div>

      {/* Close button */}
      <button
        type="button"
        aria-label="Close banner"
        onClick={() => setOpen(false)}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/90 hover:text-white"
      >
        <X className="w-6 h-6" strokeWidth={2.2} />
      </button>
    </div>
  )
}
