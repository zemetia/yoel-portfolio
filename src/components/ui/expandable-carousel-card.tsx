"use client"

import { useEffect, useId, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/cn"

interface ExpandableCardProps {
  title: string
  description: string
  image?: string
  content: React.ReactNode
  className?: string
  i?: number
  headerContent?: React.ReactNode
}

export function ExpandableCarouselCard({
  title,
  description,
  image,
  content,
  className,
  i = 0,
  headerContent,
}: ExpandableCardProps) {
  const [active, setActive] = useState<boolean>(false)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // defer to avoid setState-in-render
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [active])

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      // Since the modal is portalled, ref.current (which is inside the modal) check still works 
      // provided the ref is attached to the modal content div.
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(false)
      }
    }

    if (active) {
      window.addEventListener("mousedown", onClickOutside)
    }

    return () => {
      window.removeEventListener("mousedown", onClickOutside)
    }
  }, [active])

  return (
    <>
      <motion.div
        layoutId={`card-${id}-${i}`}
        onClick={() => setActive(true)}
        className={cn(
          "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 cursor-pointer transition-colors p-4",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
      >
        <div className="flex flex-col gap-2">
          <motion.div layoutId={`image-${id}-${i}`} className="w-full">
            {image && (
              <Image
                src={image}
                alt={title}
                width={400}
                height={192}
                className="h-48 w-full rounded-lg object-cover object-top"
                unoptimized
              />
            )}
          </motion.div>
          <div className="flex flex-col gap-1 p-2">
            {headerContent ? (
                <motion.div layoutId={`description-${id}-${i}`}>
                    {headerContent}
                </motion.div>
            ) : (
                <>
                    <motion.h3
                    layoutId={`title-${id}-${i}`}
                    className="text-lg font-bold text-neutral-100"
                    >
                    {title}
                    </motion.h3>
                    <motion.p
                    layoutId={`description-${id}-${i}`}
                    className="text-sm text-neutral-400 line-clamp-3"
                    >
                    {description}
                    </motion.p>
                </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Portal the Modal Overlay */}
      {mounted && createPortal(
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-[9999]">
              {/* Transparent Overlay as requested */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-transparent w-full h-full"
                onClick={() => setActive(false)} // Click background to close
              />
              <motion.div
                layoutId={`card-${id}-${i}`}
                ref={ref}
                className="w-full max-w-4xl h-full md:h-[fit-content] md:max-h-[90%] flex flex-col bg-neutral-900 border border-neutral-800 sm:rounded-3xl overflow-hidden z-[10000] shadow-2xl"
              >
                <div className="relative">
                  <motion.div layoutId={`image-${id}-${i}`}>
                    {image && (
                      <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={256}
                        className="w-full h-64 sm:rounded-t-3xl object-cover object-top"
                        unoptimized
                      />
                    )}
                  </motion.div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActive(false)
                    }}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col p-6 overflow-y-auto">
                  <div className="flex flex-col gap-2 mb-4">
                    <motion.h3
                      layoutId={`title-${id}-${i}`}
                      className="text-2xl font-bold text-neutral-100"
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${id}-${i}`}
                      className="text-base text-neutral-400"
                    >
                      {description}
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-neutral-300 text-sm leading-relaxed"
                  >
                     {content}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
