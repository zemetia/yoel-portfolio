'use client';

import { Fragment, useRef, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/types/zemetia-portfolio';
import { cn } from '@/lib/cn';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ITEM_WIDTH = 320;
const INTRA_GROUP_GAP = 20; // Small gap between items in same month
const INTER_GROUP_GAP = 80; // Large gap between different months
const BASE_OFFSET = 60; // Distance from axis to card
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type ProcessedExperience = Experience & {
  x: number;
  width: number;
  zone: 'top' | 'bottom';
  year: number; 
};

type TimelineGroup = {
  id: string; // "YYYY-MM"
  year: number;
  month: number;
  xStart: number;
  xEnd: number;
  xConnector: number;
  zone: 'top' | 'bottom';
  items: ProcessedExperience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [, setWindowWidth] = useState(0);

  // 1. Data Normalization & Layout Calculation
  const { 
    timelineGroups,
    totalWidth
  } = useMemo(() => {
    if (!experiences || experiences.length === 0) {
      return { 
          timelineGroups: [], 
          totalWidth: 0
      };
    }

    // Helper: Parse Date
    const parseDate = (dateStr: string) => {
      const now = new Date();
      if (!dateStr || dateStr.toLowerCase() === 'present') {
        return { year: now.getFullYear(), month: now.getMonth() };
      }
      
      const parts = dateStr.split(' ');
      if (parts.length !== 2) return { year: 2000, month: 0 }; 
      
      const monthStr = (parts[0] ?? '').substring(0, 3);
      const year = parseInt(parts[1] ?? '', 10);
      const month = MONTH_NAMES.findIndex(m => m === monthStr);
      
      if (month === -1 || isNaN(year)) return { year: 2000, month: 0 };
      
      return { year, month };
    };

    // 1. Initial Processing & Sorting
    const sorted = [...experiences].map(exp => {
      const start = parseDate(exp.startDate);
      // Create a sortable value: year * 12 + month
      const sortValue = start.year * 12 + start.month;
      return { ...exp, sortValue, startYear: start.year, startMonth: start.month };
    }).sort((a, b) => {
        // Sort by Start Date Ascending (Oldest first)
        if (a.sortValue !== b.sortValue) return a.sortValue - b.sortValue;
        return 0; // Stable sort
    });

    // 2. Grouping by Month + Year
    const groups: Record<string, typeof sorted> = {};
    sorted.forEach(item => {
        const key = `${item.startYear}-${item.startMonth}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
    });

    // 3. Sequential Layout of Groups
    let currentX = 0; // Start at 0, padding handled via CSS
    const timelineGroups: TimelineGroup[] = [];

    // Sort group keys to ensure chronological order
    const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
        const [aY = 0, aM = 0] = a.split('-').map(Number);
        const [bY = 0, bM = 0] = b.split('-').map(Number);
        return (aY * 12 + aM) - (bY * 12 + bM);
    });

    sortedGroupKeys.forEach(key => {
        const items = groups[key] ?? [];
        if (!items.length || !items[0]) return;
        const firstItem = items[0];
        const groupYear = firstItem.startYear;
        const groupMonth = firstItem.startMonth;

        // Zone by Year (Odd = Top, Even = Bottom)
        const zone = groupYear % 2 !== 0 ? 'top' : 'bottom';

        const processedItems: ProcessedExperience[] = [];
        const groupStart = currentX;
        
        items.forEach((item) => {
            processedItems.push({
                ...item,
                x: currentX,
                width: ITEM_WIDTH,
                zone: zone,
                year: item.startYear
            });
            // Gap logic: if last item in group, no gap here (handled by inter-group)
            // But we actually add the gap AFTER the item usually. 
            // Let's add INTRA gap for all, then subtract it and add INTER gap at end.
            currentX += ITEM_WIDTH + INTRA_GROUP_GAP;
        });

        // Correction: The last item added redundant INTRA_GROUP_GAP.
        // We want INTER_GROUP_GAP after the group.
        currentX -= INTRA_GROUP_GAP; 
        const groupEnd = currentX; // End of last card
        currentX += INTER_GROUP_GAP;

        // Connector Alignment: Left Edge of First Item
        // First item is at groupStart.
        const connectorX = groupStart; 

        timelineGroups.push({
            id: key,
            year: groupYear,
            month: groupMonth,
            xStart: groupStart,
            xEnd: groupEnd, 
            xConnector: connectorX,
            zone,
            items: processedItems
        });
    });

    // Determine Total Width with Safety Padding at End
    // We also need padding at Start efficiently. 
    // The Scroll Logic assumes content starts at 0 and we pad via CSS.
    return {
      timelineGroups,
      totalWidth: currentX + 600 // Extra space at end
    };
  }, [experiences]);

  // 2. Initial Setup & Resize Handler
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Scroll Mapping
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const top = rect.top;
      
      const maxScroll = container.offsetHeight - window.innerHeight;
      const scrollDist = -top;
      
      // Clamp logic
      setScrollProgress(Math.max(0, Math.min(scrollDist, maxScroll)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // We want the Start of the content (x=0) to be at the Center of the screen initially.
  // Scroll 0 = Translate 0.
  // If we want x=0 to be at Center, we need `left: 50vw` on the wrapper or `padding-left: 50vw`.
  // Let's use `left: 50%` on the track and `x` positions relative to that.
  
  const scrollDistance = Math.max(0, totalWidth); // Total scrolling distance
  const containerHeight = scrollDistance + (typeof window !== 'undefined' ? window.innerHeight : 1000);

  // Calculate Center Line relative to the Track's coordinate system (starting at 0)
  // Track is shifted by -scrollProgress + 50vw.
  // Screen Center is at 50vw.
  // So: (TrackStart + x) = ScreenCenter
  // (-scrollProgress + 50vw + x) = 50vw
  // x = scrollProgress.
  // So the "Active X" on the track is exactly `scrollProgress`.
  // Wait, if we start at scroll 0, scrollProgress = 0. Active X = 0. 
  // First item is at 0. So First Item is Active. Correct.
  
  const centerLineX = scrollProgress;

  // Active Year Calculation
  const activeYear = useMemo(() => {
     // Find group that covers centerLineX or is closest
     // We consider the group "active" if we are currently looking at it.
     // Since centerLineX is the viewport center relative to track start.
     
     // 1. Exact range match
     const active = timelineGroups.find(g => 
        centerLineX >= g.xStart - INTER_GROUP_GAP/2 && 
        centerLineX <= g.xEnd + INTER_GROUP_GAP/2
     );
     if (active) return active.year;
     
     // 2. Fallback: Find closest
     let closest = timelineGroups[0];
     let minDiff = Infinity;
     
     for (const group of timelineGroups) {
         // Midpoint of group
         const groupMid = (group.xStart + group.xEnd) / 2;
         const diff = Math.abs(groupMid - centerLineX);
         if (diff < minDiff) {
             minDiff = diff;
             closest = group;
         }
     }
     
     return closest ? closest.year : new Date().getFullYear();
  }, [centerLineX, timelineGroups]);

  if (!experiences || experiences.length === 0) return null;

  return (
    <section 
      ref={containerRef} 
      className="relative z-10"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* Background Year Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="flex flex-col items-center justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeYear}
                        initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.2, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative"
                    >
                        <span className="text-[12rem] xl:text-[16rem] font-black text-white/5 leading-none block select-none whitespace-nowrap">
                            [{activeYear}]
                        </span>
                    </motion.div>
                </AnimatePresence>
                <div className="text-xl md:text-2xl text-neutral-500 font-mono mt-4 tracking-[0.5em] uppercase opacity-60">
                    experiences
                </div>
            </div>
        </div>

        {/* Horizontal Track */}
        <div 
          ref={trackRef}
          className="absolute top-0 h-full will-change-transform z-10"
          style={{ 
            left: '50%', // Start track at center of screen
            transform: `translate3d(-${scrollProgress}px, 0, 0)`,
            width: `${totalWidth}px`
          }}
        >
            {/* Timeline Axis Line */}
            {/* We want the axis to extend infinitely or covers the track?
                The track starts at 0 (center screen) and goes right.
                We probably want lines to left too? 
                Let's make axis extraordinarily wide or use pseudo element on container.
                Or just wide enough for content.
             */}
            <div className="absolute top-1/2 -left-[100vh] w-[40000px] h-px bg-neutral-800" />
            
            {/* Groups */}
            {timelineGroups.map((group) => {
                const isBelow = group.zone === 'bottom';
                
                // Group Active? If centerLineX is within group range?
                // Actually focus is per ITEM now.
                const verticalOffset = BASE_OFFSET;

                 // Connector Line (Shared per Group, Aligned to Start/Left)
                return (
                    <Fragment key={group.id}>
                         {/* Vertical Line */}
                         <div 
                            className={cn(
                                "absolute w-px bg-neutral-700 transition-colors duration-500"
                            )}
                            style={{
                                left: `${group.xConnector}px`, // Aligned to First Item Left
                                height: `${verticalOffset}px`,
                                [isBelow ? 'top' : 'bottom']: '50%' 
                            }} 
                        />

                        {/* Connector Dot (On Axis) */}
                         <div 
                            className={cn(
                                "absolute w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-600 transition-colors duration-500"
                            )}
                            style={{
                                left: `${group.xConnector - 3}px`, // Center dot on line
                                top: `calc(50% - 3px)` 
                            }}
                        />

                        {/* Items in Group */}
                        {group.items.map((exp) => {
                             // Active: When the Left Edge of the card crosses the Center Line (scrollProgress)
                             // Let's give it a zone: if scrollProgress is between [x - 50, x + ITEM_WIDTH] ?
                             // Ideally we highlight the item closest to 0.
                             // Dist = abs(exp.x - scrollProgress).
                             // If Dist < ITEM_WIDTH / 2 ?
                             
                             const dist = Math.abs(exp.x - centerLineX);
                             const isActive = dist < (ITEM_WIDTH / 2 + 100); // Tolerance
                             const isPast = (exp.x + ITEM_WIDTH) < centerLineX;
                             
                             return (
                                <div
                                    key={exp.id}
                                    className={cn(
                                        "absolute flex flex-col transition-all duration-500",
                                        isActive ? "opacity-100 scale-100 z-20" : "opacity-40 scale-95 grayscale z-10",
                                        isPast ? "opacity-20" : ""
                                    )}
                                    style={{
                                        left: `${exp.x}px`,
                                        width: `${ITEM_WIDTH}px`,
                                        [isBelow ? 'top' : 'bottom']: '50%',
                                        transform: `translateY(${isBelow ? verticalOffset : -verticalOffset}px)`
                                    }}
                                >
                                    {/* Content Card */}
                                    <div className={cn(
                                        "relative pl-4 py-2 border-l border-neutral-800",
                                         isActive ? "border-electric-blue" : "border-transparent" 
                                    )}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={cn(
                                                "text-xs font-mono px-1.5 py-0.5 rounded",
                                                isActive ? "bg-electric-blue/10 text-electric-blue" : "bg-neutral-900 text-neutral-500"
                                            )}>
                                                {exp.startDate} - {exp.endDate}
                                            </span>
                                        </div>
                                        
                                        <h3 className={cn(
                                            "text-xl font-bold tracking-tight mb-1 leading-tight",
                                            isActive ? "text-white" : "text-neutral-400"
                                        )}>
                                            {exp.title}
                                        </h3>
                                        
                                        <div className="text-sm font-mono text-neutral-500 mb-3">
                                            {exp.company}
                                        </div>
                                        
                                        <p className="text-neutral-400 text-xs leading-relaxed line-clamp-4">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                             );
                        })}

                    </Fragment>
                );
            })}
        </div>
      </div>
    </section>
  );
}
