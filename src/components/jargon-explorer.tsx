
"use client";

import type { Term } from '@/lib/data';
import TermCard from './term-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useMemo } from 'react';

interface JargonExplorerProps {
  terms: Term[];
}

export default function JargonExplorer({ terms }: JargonExplorerProps) {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedTerms = useMemo(() => {
    const sorted = [...terms];
    if (sortOrder === 'asc') {
      sorted.sort((a, b) => a.term.localeCompare(b.term));
    } else {
      sorted.sort((a, b) => b.term.localeCompare(a.term));
    }
    return sorted;
  }, [terms, sortOrder]);


  return (
    <section className="space-y-8">
       <div className="flex justify-end">
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Sort A-Z</SelectItem>
            <SelectItem value="desc">Sort Z-A</SelectItem>
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
