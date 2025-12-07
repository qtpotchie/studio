
"use client";

import { useState, useMemo } from 'react';
import type { Term } from '@/lib/data';
import TermCard from '@/components/term-card';
import WordOfTheDay from './word-of-the-day';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = useMemo(() => {
    if (!searchQuery) {
      return terms;
    }
    return terms.filter((term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [terms, searchQuery]);

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <WordOfTheDay terms={terms} />
      </div>

      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No terms found for &quot;{searchQuery}&quot;.</p>
        </div>
      )}
    </div>
  );
}
