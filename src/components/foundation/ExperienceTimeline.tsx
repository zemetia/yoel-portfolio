'use client';

import { Fragment, useRef, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/types/zemetia-portfolio';
import { cn } from '@/lib/cn';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ITEM_WIDTH = 320;
const INTRA_GROUP_GAP = 20;
const INTER_GROUP_GAP = 80;
const BASE_OFFSET = 60;
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type ProcessedExperience = Experience & {
  x: number;
  width: number;
  zone: 'top' | 'bottom';
  year: number;
};

type TimelineGroup = {
  id: string;
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

  const { timelineGroups, totalWidth } = useMemo(() => {
    if (!experiences || experiences.length === 0) {
      return { timelineGroups: [], totalWidth: 0 };
    }

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

    const sorted = [...experiences].map(exp => {
      const start = parseDate(exp.startDate);
      const sortValue = start.year * 12 + start.month;
      return { ...exp, sortValue, startYear: start.year, startMonth: start.month };
    }).sort((a, b) => {
      if (a.sortValue !== b.sortValue) return a.sortValue - b.sortValue;
      return 0;
    });

    const groups: Record<string, typeof sorted> = {};
    sorted.forEach(item => {
      const key = `${item.startYear}-${item.startMonth}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });

    let currentX = 0;
    const timelineGroups: TimelineGroup[] = [];

    const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
      const [aY = 0, aM = 0] = a.split('-').map(Number);
      const [bY = 0, bM = 0] = b.split('-').map(Number);
      return (aY * 12 + aM) - (bY * 12 + bM);
    });

    sortedGroupKeys.forEach((key, groupIndex) => {
      const items = groups[key] ?? [];
      if (!items.length || !items[0]) return;
      const firstItem = items[0];
      const groupYear = firstItem.startYear;
      const groupMonth = firstItem.startMonth;
      const zone = groupIndex % 2 === 0 ? 'top' : 'bottom';
      const processedItems: ProcessedExperience[] = [];
      const groupStart = currentX;

      items.forEach((item) => {
        processedItems.push({ ...item, x: currentX, width: ITEM_WIDTH, zone, year: item.startYear });
        currentX += ITEM_WIDTH + INTRA_GROUP_GAP;
      });

      currentX -= INTRA_GROUP_GAP;
      const groupEnd = currentX;
      currentX += INTER_GROUP_GAP;
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

    return { timelineGroups, totalWidth: currentX + 600 };
  }, [experiences]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const top = rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;
      const scrollDist = -top;
      setScrollProgress(Math.max(0, Math.min(scrollDist, maxScroll)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDistance = Math.max(0, totalWidth);
  const containerHeight = scrollDistance + (typeof window !== 'undefined' ? window.innerHeight : 1000);
  const centerLineX = scrollProgress;

  const activeYear = useMemo(() => {
    const active = timelineGroups.find(g =>
      centerLineX >= g.xStart - INTER_GROUP_GAP / 2 &&
      centerLineX <= g.xEnd + INTER_GROUP_GAP / 2
    );
    if (active) return active.year;

    let closest = timelineGroups[0];
    let minDiff = Infinity;
    for (const group of timelineGroups) {
      const groupMid = (group.xStart + group.xEnd) / 2;
      const diff = Math.abs(groupMid - centerLineX);
      if (diff < minDiff) { minDiff = diff; closest = group; }
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-tech-bg">

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
            left: '50%',
            transform: `translate3d(-${scrollProgress}px, 0, 0)`,
            width: `${totalWidth}px`
          }}
        >
          <div className="absolute top-1/2 -left-[100vh] w-[40000px] h-px bg-neutral-800" />

          {timelineGroups.map((group) => {
            const isBelow = group.zone === 'bottom';
            const verticalOffset = BASE_OFFSET;

            return (
              <Fragment key={group.id}>
                {/* Vertical Line */}
                <div
                  className={cn("absolute w-px bg-neutral-700 transition-colors duration-500")}
                  style={{
                    left: `${group.xConnector}px`,
                    height: `${verticalOffset}px`,
                    [isBelow ? 'top' : 'bottom']: '50%'
                  }}
                />

                {/* Connector Dot */}
                <div
                  className={cn("absolute w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-600 transition-colors duration-500")}
                  style={{
                    left: `${group.xConnector - 3}px`,
                    top: `calc(50% - 3px)`
                  }}
                />

                {/* Items */}
                {group.items.map((exp) => {
                  const dist = Math.abs(exp.x - centerLineX);
                  const isActive = dist < (ITEM_WIDTH / 2 + 100);
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
