"use client"

import { useRef, useState, useEffect } from "react"
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion"
import { cn } from "@/lib/cn"

// Utility to wrap a number between min and max
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

interface InfiniteCarouselProps {
  children: React.ReactNode[]
  direction?: "left" | "right"
  speed?: number
  className?: string
  pauseOnHover?: boolean
}

export function InfiniteCarousel({
  children,
  direction = "left",
  speed = 1,
  className,
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const baseVelocity = direction === "left" ? speed : -speed
  const [isPaused, setIsPaused] = useState(false)
  
  return (
    <div 
        className={cn("overflow-hidden w-full", className)}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <CarouselContent 
        items={children} 
        baseVelocity={baseVelocity} 
        isPaused={isPaused}
      />
    </div>
  )
}

function CarouselContent({ items, baseVelocity, isPaused }: { items: React.ReactNode[], baseVelocity: number, isPaused: boolean }) {
    const x = useMotionValue(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const [contentWidth, setContentWidth] = useState(0)
    
    // Repeat items to ensure smooth scrolling
    // We duplicate enough times to ensure we can scroll infinitely without gaps
    const duplicatedItems = [...items, ...items, ...items, ...items]
    
    useEffect(() => {
        if (containerRef.current) {
            // Calculate one set's width.
            // Since we have 4 sets, and the container holds all 4.
            const totalWidth = containerRef.current.scrollWidth
            setContentWidth(totalWidth / 4)
        }
    }, [items])

    useAnimationFrame((_t, delta) => {
        if (isPaused) return

        // Calculate move amount
        // Factor of 50 implies 50px/sec per speed unit roughly
        const moveBy = baseVelocity * (delta / 1000) * 100

        const currentX = x.get()
        let newX = currentX + moveBy
        
        if (contentWidth > 0) {
            // We wrap the position to stay within the bounds of one set width.
            // This creates the infinite effect.
            // e.g. -1000 -> 0 -> -1000
            newX = wrap(-contentWidth, 0, newX)
        }
        
        x.set(newX)
    })
    
    return (
        <motion.div
            ref={containerRef}
            className="flex gap-4 w-max"
            style={{ x }}
        >
            {duplicatedItems.map((child, idx) => (
                <div key={idx} className="flex-shrink-0">
                    {child}
                </div>
            ))}
        </motion.div>
    )
}
