import type { Term } from '@/lib/data';
import TermCard from './term-card';
import { Button } from './ui/button';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface JargonExplorerProps {
  terms: Term[];
}

type SortOption = 'alphabetical' | 'newest' | 'random';

export default function JargonExplorer({ terms }: JargonExplorerProps) {
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical');

  const sortTerms = (terms: Term[], option: SortOption) => {
    switch (option) {
      case 'newest':
        return [...terms].reverse(); // Assuming newest are last in data.ts
      case 'random':
        return [...terms].sort(() => Math.random() - 0.5);
      case 'alphabetical':
      default:
        return [...terms].sort((a, b) => a.term.localeCompare(b.term));
    }
  };
  
  const sortedTerms = sortTerms(terms, sortOption);

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          Jargon Explorer
        </h2>
        <Select onValueChange={(value: SortOption) => setSortOption(value)} defaultValue={sortOption}>
            <SelectTrigger className="w-full md:w-[180px] h-14 text-lg">
                <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="random">Random</SelectItem>
            </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTerms.map((term) => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>
    </section>
  );
}
