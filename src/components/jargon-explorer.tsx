import type { Term } from '@/lib/data';
import TermCard from './term-card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface JargonExplorerProps {
  terms: Term[];
}

export default function JargonExplorer({ terms }: JargonExplorerProps) {
  
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTerms.map((term) => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>
    </section>
  );
}
