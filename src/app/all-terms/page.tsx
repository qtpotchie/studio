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
import { Badge } from '@/components/ui/badge';

export default function AllTermsPage() {
  const groupedTerms = terms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof terms>);

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
            <AccordionTrigger className="text-2xl font-headline hover:no-underline">
              <div className='flex items-center gap-4'>
                {letter}
                <Badge variant="secondary">{groupedTerms[letter].length}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-2">
                {groupedTerms[letter].sort((a,b) => a.term.localeCompare(b.term)).map((term) => (
                  <li key={term.id}>
                    <Link href={`/term/${term.slug}`} className="block p-3 rounded-lg hover:bg-accent transition-colors">
                      <h3 className="font-semibold text-lg">{term.term}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{term.definition}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
