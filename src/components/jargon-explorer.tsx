"use client";

import { useState, useMemo, FormEvent, useEffect } from 'react';
import type { Term } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/term-card';
import { Button } from '@/components/ui/button';
import { useSearchHistory } from '@/context/search-history-context';
import { useDebounce } from '@/hooks/use-debounce';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const { addSearchQuery } = useSearchHistory();

  const debouncedSearch = useDebounce(searchQuery, 300);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilterQuery(searchQuery);
    if (searchQuery) {
      addSearchQuery(searchQuery);
    }
  };

  useEffect(() => {
    setFilterQuery(debouncedSearch);
  }, [debouncedSearch]);

  const filteredTerms = useMemo(() => {
    if (!filterQuery) {
      return terms;
    }
    return terms.filter((term) =>
      term.term.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [terms, filterQuery]);

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
