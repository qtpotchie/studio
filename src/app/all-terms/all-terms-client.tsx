"use client";
import { useState, useEffect } from 'react';
import { terms as staticTerms } from '@/lib/data';
import type { Term } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type GroupedTerms = {
  [key: string]: Term[];
};

export default function AllTermsClient() {
  const [terms, setTerms] = useState<Term[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setTerms(staticTerms);
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a loading state or nothing on the server and initial client render
    return <p>Loading terms...</p>;
  }
  
  const termCount = terms.length;

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
    <>
      <div className="absolute top-[3.7rem] left-0 right-0 flex justify-center">
        <Badge variant="secondary" className="text-base sm:text-lg">{termCount}</Badge>
      </div>
      <div className="space-y-8 mt-[-2rem]">
        {sortedKeys.map((letter) => (
          <section key={letter}>
            <h2 className="text-2xl sm:text-3xl font-bold font-headline pb-4 mb-4 border-b border-border">
              {letter}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
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
    </>
  );
}
