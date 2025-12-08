
"use client";

import { useMemo } from 'react';
import type { Term } from '@/lib/data';
import TermCard from './term-card';

export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const sortedTerms = useMemo(() => {
    return [...terms].sort((a, b) => a.term.localeCompare(b.term));
  }, [terms]);

  return (
    <div className="space-y-8">
      <div className="space-y-6">
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
