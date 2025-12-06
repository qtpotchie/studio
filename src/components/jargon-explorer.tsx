"use client";

import { useState, useMemo, useEffect, useCallback } from 'react';
import type { Term } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/term-card';
import { Button } from '@/components/ui/button';
import { useSearchHistory } from '@/context/search-history-context';
import { useDebounce } from '@/hooks/use-debounce';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const { addSearchQuery } = useSearchHistory();
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearchQuery) {
      addSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, addSearchQuery]);

  const filteredTerms = useMemo(() => {
    return terms
      .filter((term) => {
        if (activeLetter) {
          return term.term.toUpperCase().startsWith(activeLetter);
        }
        return true;
      })
      .filter((term) => {
        if (searchQuery) {
          return term.term.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
      });
  }, [terms, searchQuery, activeLetter]);

  return (
    <div className="space-y-8">
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for a term..."
            className="pl-10 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
        <Button
          variant={activeLetter === null ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveLetter(null)}
        >
          All
        </Button>
        {ALPHABET.map((letter) => (
          <Button
            key={letter}
            variant={activeLetter === letter ? 'default' : 'outline'}
            size="sm"
            className="w-9"
            onClick={() => setActiveLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>

      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No terms found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
