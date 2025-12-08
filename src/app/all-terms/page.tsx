"use client";
import { terms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Term } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

type GroupedTerms = {
  [key: string]: Term[];
};

export default function AllTermsPage() {

  const groupedTerms = terms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as GroupedTerms);

  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">All Terms</h1>
          <Badge variant="secondary" className="text-lg">{terms.length}</Badge>
        </div>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <div className="space-y-8">
        {sortedKeys.map((letter) => (
          <section key={letter}>
            <h2 className="text-3xl font-bold font-headline pb-4 mb-4 border-b border-border">
              {letter}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              {groupedTerms[letter].sort((a,b) => a.term.localeCompare(b.term)).map((term) => (
                <li key={term.id}>
                  <Link href={`/term/${term.slug}`} className="hover:underline text-primary">
                    {term.term}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
