import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Term } from '@/lib/data';
import BookmarkToggle from './bookmark-toggle';

interface TermCardProps {
  term: Term;
}

export default function TermCard({ term }: TermCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 relative group">
      <CardHeader className="flex-grow">
        <CardTitle className="font-headline text-2xl pr-12">{term.term}</CardTitle>
        <CardDescription className="pt-2 line-clamp-3">
          {term.definition}
        </CardDescription>
      </CardHeader>
      <Link href={`/term/${term.slug}`} className="absolute inset-0 z-0" aria-label={`View details for ${term.term}`} />
      <div className="absolute top-2 right-2 z-10">
        <BookmarkToggle termId={term.id} />
      </div>
    </Card>
  );
}
