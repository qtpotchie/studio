"use client";

import { useState, useMemo, FormEvent } from 'react';
import type { Term } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/term-card';
import { Button } from '@/components/ui/button';
import { useSearchHistory } from '@/context/search-history-context';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [filterQuery, setFilterQuery] = useState('');
  const { addSearchQuery } = useSearchHistory();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    addSearchQuery(searchQuery);
    setFilterQuery(searchQuery);
  };

  const filteredTerms = useMemo(() => {
    let results = terms;

    if (activeLetter) {
      results = results.filter((term) =>
        term.term.toUpperCase().startsWith(activeLetter)
      );
    }

    if (filterQuery) {
      results = results.filter((term) =>
        term.term.toLowerCase().includes(filterQuery.toLowerCase())
      );
    }
    
    return results;
  }, [terms, filterQuery, activeLetter]);
  
  const handleLetterClick = (letter: string | null) => {
    setActiveLetter(letter);
    setSearchQuery('');
    setFilterQuery('');
  }

  return (
    <div className="space-y-8">
      <div className="max-w-xl mx-auto">
        <form
          className="relative flex items-center gap-2"
          onSubmit={handleSearchSubmit}
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for a term..."
            className="pl-10 text-lg flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
        <Button
          variant={activeLetter === null ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleLetterClick(null)}
        >
          All
        </Button>
        {ALPHABET.map((letter) => (
          <Button
            key={letter}
            variant={activeLetter === letter ? 'default' : 'outline'}
            size="sm"
            className="w-9"
            onClick={() => handleLetterClick(letter)}
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
