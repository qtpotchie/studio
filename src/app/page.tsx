
"use client";

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { BookOpen, Search } from 'lucide-react';
import WordOfTheDay from '@/components/word-of-the-day';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearch } from '@/hooks/use-search';
import GlobalControls from '@/components/global-controls';
import { cn } from '@/lib/utils';
import { terms } from '@/lib/data';


export default function Home() {
  const { setOpen } = useSearch();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500); 
    }, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative container mx-auto px-4 flex flex-col h-screen py-8">
        <header className="text-center flex flex-col items-center space-y-4 pt-12 flex-shrink-0">
          <GlobalControls />
          <div className="border rounded-lg p-4 md:p-6 flex flex-col items-center gap-4 bg-card/50">
            <Logo className={cn("w-16 h-16 md:w-24 md:h-24", isAnimating && "animate-rotate-timed")} />
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
              TechTermz
            </h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-md pt-2 px-4 sm:px-0">
            Search, browse, and master the language of tech. Your go-to dictionary for IT and tech jargon.
          </p>
        </header>

        <div className="flex-grow flex flex-col justify-center items-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 w-full max-w-sm sm:max-w-md mx-auto my-6">
            <Button
                variant="secondary"
                className="h-12 text-base border-2 border-transparent w-full sm:basis-2/3 shadow-md group"
                onClick={() => setOpen(true)}
            >
                <Search className="mr-3 h-5 w-5 transition-transform group-hover:animate-search-pulse" />
                <span>Search</span>
            </Button>
            <Button
                variant="secondary"
                className="h-12 text-base px-4 border-2 border-transparent w-full sm:basis-1/3 shadow-md group"
                asChild
            >
                <Link href="/jargon-explorer">
                    <BookOpen className="mr-3 h-5 w-5 transition-transform group-hover:animate-book-open" />
                    <span>Explore</span>
                </Link>
            </Button>
            </div>
        </div>

        <div className="flex-shrink-0 pb-4 md:pb-8 relative">
          <div className="absolute bottom-full left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            <WordOfTheDay terms={terms} />
        </div>
      </div>
    </>
  );
}
