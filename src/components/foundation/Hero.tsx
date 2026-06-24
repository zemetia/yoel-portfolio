import { H1, Body } from './Typography';
import { Grid, Col } from './LayoutWrapper';
import { cn } from '@/lib/cn';
import { ArrowRight, FileText } from 'lucide-react'; // Basic icon, usually installed. If not, I'll fallback to text.
import Link from 'next/link';

import { VantaBackground } from '@/components/ui/VantaBackground';
import { TypingAnimation } from '@/components/typing-animation';

interface HeroProps {
    name?: string;
    subtitle?: string;
    sequences?: string[];
}

export function Hero({ name, subtitle, sequences }: HeroProps) {
  // If no sequences provided, default to these
  const defaultSequences = [
    "System Architect",
    2000,
    "Data Engineer",
    2000,
    "Renew the world with mind and creativity",
    5000
  ];

  // If sequences ARE provided (e.g. ["a", "b"]), interleave them with pauses
  const activeSequences = sequences && sequences.length > 0
    ? sequences.flatMap(seq => [seq, 2000]) 
    : defaultSequences;

  return (
    <VantaBackground>
      <div className="mx-auto max-w-desktop w-full px-page-margin">
      <section className="min-h-screen flex flex-col justify-center py-20">
        <Grid>
          <Col span={10} className="lg:col-span-12 xl:col-span-10">
            <div className="space-y-8 md:space-y-12">
               <div className="block mb-4 text-tech-accent animate-in fade-in slide-in-from-bottom-4 duration-1000 font-mono text-sm tracking-widest uppercase">
                <TypingAnimation sequences={activeSequences} />
              </div>
              
              <H1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                {name || "Building robust digital foundations for complex data."}
              </H1>
              
              <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <Body>
                  {subtitle || "Specializing in high-performance infrastructure, distributed systems, and clean architecture. Prioritizing efficiency and maintainability over temporary trends."}
                </Body>
              </div>

              <div className="pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 flex flex-wrap gap-6 items-center">
                <a 
                  href="#projects" 
                  className={cn(
                      "group inline-flex items-center text-tech-primary hover:text-tech-accent transition-colors duration-300",
                      "border-b border-tech-secondary/30 pb-1 hover:border-tech-accent"
                  )}
                >
                  <span className="mr-2 font-mono text-sm tracking-wide">VIEW WORK</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <Link 
                  href="/cv-builder" 
                  className={cn(
                      "group inline-flex items-center text-tech-primary hover:text-tech-accent transition-colors duration-300",
                      "border-b border-tech-secondary/30 pb-1 hover:border-tech-accent"
                  )}
                >
                    <FileText className="mr-2 w-4 h-4" />
                    <span className="mr-2 font-mono text-sm tracking-wide">CV BUILDER</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Col>
        </Grid>
      </section>
      </div>
    </VantaBackground>
  );
}
