"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Term } from '@/lib/data';
import TermCard from './term-card';
import WordOfTheDay from './word-of-the-day';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const sortedTerms = useMemo(() => {
    return [...terms].sort((a, b) => a.term.localeCompare(b.term));
  }, [terms]);

  return (
    <div className="space-y-8">
      <WordOfTheDay terms={terms} />
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center max-w-xl mx-auto">
          
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
