
"use client";

import Logo from '@/components/logo';
import { terms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { BookOpen, Search } from 'lucide-react';
import WordOfTheDay from '@/components/word-of-the-day';
import Link from 'next/link';
import { useState } from 'react';
import ExplorerDialog from '@/components/explorer-dialog';
import { useSearch } from '@/hooks/use-search';
import GlobalControls from '@/components/global-controls';

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const { setOpen } = useSearch();

  return (
    <>
      <div className="relative container mx-auto px-4 flex flex-col h-screen py-8">
        <header className="text-center flex flex-col items-center space-y-4 pt-12 flex-shrink-0">
          <GlobalControls />
          <Logo className="w-16 h-16 md:w-24 md:h-24" />
          <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            TechTermz
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md pt-2">
            Search, browse, and master the language of tech. Your go-to dictionary
            for IT and tech jargon, available offline.
          </p>
        </header>

        <div className="flex-grow flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2 px-4 w-full max-w-sm sm:max-w-md mx-auto my-6">
            <Button
                variant="outline"
                className="h-12 text-base border-2 basis-2/3"
                onClick={() => setOpen(true)}
            >
                <Search className="mr-3 h-5 w-5" />
                <span>Search</span>
            </Button>
            <Button
                variant="outline"
                className="h-12 text-base px-4 border-2 basis-1/3"
                onClick={() => setIsExplorerOpen(true)}
            >
                <BookOpen className="mr-3 h-5 w-5" />
                <span>Explore</span>
            </Button>
            </div>
        </div>

        <div className="flex-shrink-0 pb-4 md:pb-8 relative">
          <div className="absolute bottom-full left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            <WordOfTheDay terms={terms} />
        </div>
      </div>
      <ExplorerDialog 
        isOpen={isExplorerOpen} 
        setOpen={setIsExplorerOpen} 
        terms={terms} 
      />
    </>
  );
}
