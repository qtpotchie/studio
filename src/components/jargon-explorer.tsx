"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Term } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/term-card';
import { useSearchHistory } from '@/context/search-history-context';
import { useDebounce } from '@/hooks/use-debounce';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { addSearchQuery } = useSearchHistory();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredTerms = useMemo(() => {
    if (!debouncedSearchQuery) {
      return terms;
    }
    return terms.filter((term) =>
      term.term.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [terms, debouncedSearchQuery]);

  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      addSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]); // addSearchQuery is stable

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

      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No terms found for &quot;{debouncedSearchQuery}&quot;.</p>
        </div>
      )}
    </div>
  );
}
