"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Term } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import TermCard from '@/components/term-card';
import { useSearchHistory } from '@/context/search-history-context';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const { addSearchQuery } = useSearchHistory();

  const filteredTerms = useMemo(() => {
    if (!submittedQuery) {
      // Show all terms if the submitted query is empty
      return terms;
    }
    return terms.filter((term) =>
      term.term.toLowerCase().includes(submittedQuery.toLowerCase())
    );
  }, [terms, submittedQuery]);

  useEffect(() => {
    if (submittedQuery.trim()) {
      addSearchQuery(submittedQuery);
    }
  }, [submittedQuery]); // addSearchQuery is stable

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto">
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
        {/* Hidden submit button to allow form submission on Enter */}
        <button type="submit" className="hidden" />
      </form>

      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>No terms found for &quot;{submittedQuery}&quot;.</p>
        </div>
      )}
    </div>
  );
}
