"use client"

import { useEffect, useCallback, useState } from "react"
import { cn } from "@/lib/cn"

interface SectionHeadingProps {
  words: string[]
  className?: string
}

export function SectionHeading({ words, className }: SectionHeadingProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const tick = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i] ?? '';
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((n) => n + 1);
      setDelta(150);
    } else {
      setDelta(isDeleting ? 50 : 150);
    }
  }, [loopNum, words, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <div className={cn("flex flex-col items-center justify-center w-full mb-12", className)}>
      <h2 className="text-4xl md:text-6xl font-bold font-heading text-center h-[1.2em]">
        <span className="text-white">{text}</span>
        <span className="animate-pulse text-tech-accent">_</span>
      </h2>
    </div>
  )
}
