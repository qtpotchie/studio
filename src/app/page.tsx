
"use client";

import Logo from '@/components/logo';
import { terms } from '@/lib/data';
import SearchTrigger from '@/components/search-trigger';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import WordOfTheDay from '@/components/word-of-the-day';
import Link from 'next/link';
import { useState } from 'react';
import JargonExplorer from '@/components/jargon-explorer';

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  return (
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
        <SearchTrigger />
        <Button
          variant="outline"
          className="h-14 text-lg px-8 border-2"
          onClick={() => setIsExplorerOpen(!isExplorerOpen)}
        >
          <BookOpen className="mr-3 h-5 w-5" />
          <span>Explore</span>
        </Button>
      </div>

      {isExplorerOpen ? (
        <JargonExplorer terms={terms} />
      ) : (
        <WordOfTheDay terms={terms} />
      )}
    </div>
  );
}
