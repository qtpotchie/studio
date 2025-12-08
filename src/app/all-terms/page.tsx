
"use client";
import { terms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Term } from '@/lib/data';

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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">All Terms</h1>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <Accordion type="multiple" className="w-full">
        {sortedKeys.map((letter) => (
          <AccordionItem value={letter} key={letter}>
            <AccordionTrigger className="text-2xl font-headline">
              {letter} ({groupedTerms[letter].length})
            </AccordionTrigger>
            <AccordionContent>
              <div className="divide-y divide-border">
                {groupedTerms[letter].map((term) => (
                  <Link href={`/term/${term.slug}`} key={term.id} className="block p-4 hover:bg-accent">
                    <h3 className="font-semibold text-lg">{term.term}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{term.definition}</p>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
