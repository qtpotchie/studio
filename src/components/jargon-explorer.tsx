"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Term } from '@/lib/data';
import TermCard from './term-card';
import WordOfTheDay from './word-of-the-day';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [sortOrder, setSortOrder] = useState('alphabetical');

  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const sortedTerms = useMemo(() => {
    let sorted = [...terms];
    
    if (sortOrder === 'alphabetical') {
      return sorted.sort((a, b) => a.term.localeCompare(b.term));
    }
    
    return sorted.sort(() => Math.random() - 0.5);

  }, [terms, sortOrder]);


  return (
    <div className="space-y-8">
      <WordOfTheDay terms={terms} />
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center max-w-xl mx-auto">
          <div className="flex w-full md:w-auto items-center gap-2">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[180px] h-14 text-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="random">Random</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {sortedTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTerms.map((term) => (
              <TermCard key={term.id} term={term} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No terms found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
