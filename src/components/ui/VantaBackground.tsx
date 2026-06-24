"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Script from "next/script";

interface VantaBackgroundProps {
  children?: ReactNode;
  className?: string;
}

type VantaEffect = { destroy: () => void };

declare global {
  interface Window {
    VANTA: Record<string, (opts: Record<string, unknown>) => VantaEffect>;
    THREE: unknown;
  }
}

export function VantaBackground({ children, className }: VantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded && !vantaEffect && vantaRef.current && window.VANTA?.NET) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3B82F6, // Electric Blue
          backgroundColor: 0x0E0F12,
          points: 10.00,
          maxDistance: 22.00,
          spacing: 18.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isScriptLoaded, vantaEffect]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />
      {threeLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="afterInteractive"
          onLoad={() => setIsScriptLoaded(true)}
        />
      )}
      
      <div className={`vanta-container ${className || ''}`} ref={vantaRef}>
          <div className="relative z-10 w-full h-full pointer-events-none">
              <div className="pointer-events-auto w-full h-full">
                {children}
              </div>
          </div>
      </div>
    </>
  );
}
