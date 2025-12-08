
import { terms } from '@/lib/data';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AllTermsPage() {
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term));

  const groupedTerms = sortedTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof terms>);

  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-end gap-4">
          <h1 className="text-3xl md:text-4xl font-bold font-headline flex items-center">
            <BookOpen className="mr-4 h-8 w-8" />
            All Terms
          </h1>
          <span className="text-xl text-muted-foreground font-medium pb-1">({terms.length})</span>
        </div>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-8">
        {alphabet.map((letter) => (
          <div key={letter} id={`letter-${letter}`}>
            <h2 className="text-2xl font-bold font-headline text-primary mb-4 pb-2 border-b-2 border-primary/30">
              {letter}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              {groupedTerms[letter].map((term) => (
                <Link href={`/term/${term.slug}`} key={term.id} className="block hover:text-primary transition-colors group">
                  <div className="flex items-center p-2 rounded-md group-hover:bg-accent">
                    <span className="text-primary mr-3 text-xl">&bull;</span>
                    <span className='flex-1'>{term.term}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
