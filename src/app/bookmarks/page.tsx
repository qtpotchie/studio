
import { terms, type Term } from '@/lib/data';
import { Bookmark, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BookmarksClient from './bookmarks-client';

export const metadata = {
  title: 'Bookmarked Terms',
};

export default function BookmarksPage() {
  const allTerms: Term[] = terms;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold font-headline">Bookmarked Terms</h1>
        <Button variant="secondary" size="sm" className="shadow-md" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </div>
      <BookmarksClient terms={allTerms} />
    </div>
  );
}
