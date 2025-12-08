
"use client";

import Logo from '@/components/logo';
import { terms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, Mic, Search } from 'lucide-react';
import WordOfTheDay from '@/components/word-of-the-day';
import Link from 'next/link';
import { useState } from 'react';
import ExplorerDialog from '@/components/explorer-dialog';
import { useSearch } from '@/hooks/use-search';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { useVoiceSearch } from '@/context/voice-search-context';

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const { setOpen } = useSearch();
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();

  return (
    <>
      <div className="relative container mx-auto px-4 flex flex-col h-screen py-8">
        <header className="relative text-center flex flex-col items-center space-y-2 pt-12 flex-shrink-0">
          <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onOpen}
              className="h-12 w-12 transition-transform duration-200 ease-in-out active:rotate-90"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            <Button variant="outline" size="icon" onClick={() => setVoiceOpen(true)} className="h-12 w-12">
              <Mic className="h-6 w-6" />
              <span className="sr-only">Voice Search</span>
            </Button>
          </div>
          <Logo className="w-16 h-16 md:w-24 md:h-24" />
          <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            TechTermz
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
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

        <div className="flex-shrink-0 pb-4 md:pb-0 relative">
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
