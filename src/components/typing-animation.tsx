
"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/cn"

type TypingAnimationProps = {
  sequences: (string | number)[]
  className?: string
}

export function TypingAnimation({ sequences, className }: TypingAnimationProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [sequenceIndex, setSequenceIndex] = useState(0)

  useEffect(() => {
    if (!sequences || sequences.length === 0) return

    const currentSequenceItem = sequences[sequenceIndex % sequences.length]

    // Handle number-based pauses
    if (typeof currentSequenceItem === "number") {
      const timer = setTimeout(() => {
        setSequenceIndex((prev) => prev + 1)
      }, currentSequenceItem)
      return () => clearTimeout(timer)
    }

    const currentString = currentSequenceItem ?? ''
    const typingSpeed = 120
    const deletingSpeed = 50
    const speed = isDeleting ? deletingSpeed : typingSpeed

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting from the current text state
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1))
        } else {
          // Finished deleting. Stop deleting and let the next loop handle typing.
          // The sequenceIndex already points to the new string that should be typed.
          setIsDeleting(false)
        }
      } else {
        // Typing the currentString
        if (text.length < currentString.length) {
          setText((prev) => currentString.substring(0, prev.length + 1))
        } else {
          // Finished typing, start deleting after a pause (which is the next item in the sequence)
          setIsDeleting(true)
          setSequenceIndex((prev) => prev + 1)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, sequenceIndex, sequences])

  return (
    <span className={cn(className, "transition-opacity duration-300")}>
      {text}
      <span className="animate-pulse">_</span>
    </span>
  )
}
