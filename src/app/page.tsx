
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

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const { setOpen } = useSearch();

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <header className="text-center flex flex-col items-center space-y-4">
          <Logo className="w-24 h-24" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
            TechTermz
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Search, browse, and master the language of tech. Your go-to dictionary
            for IT and tech jargon, available offline.
          </p>
        </header>
        <div className="flex justify-center items-center gap-4 px-4">
          <Button
            variant="outline"
            className="h-14 text-lg px-8 border-2"
            onClick={() => setOpen(true)}
          >
            <Search className="mr-3 h-5 w-5" />
            <span>Search</span>
          </Button>
          <Button
            variant="outline"
            className="h-14 text-lg px-8 border-2"
            onClick={() => setIsExplorerOpen(true)}
          >
            <BookOpen className="mr-3 h-5 w-5" />
            <span>Explore</span>
          </Button>
        </div>

        <WordOfTheDay terms={terms} />
      </div>
      <ExplorerDialog 
        isOpen={isExplorerOpen} 
        setOpen={setIsExplorerOpen} 
        terms={terms} 
      />
    </>
  );
}
