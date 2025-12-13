
"use client";
import { useBookmarks } from '@/context/bookmark-context';
import type { Term } from '@/lib/data';
import TermCard from '@/components/term-card';
import { Bookmark } from 'lucide-react';

export default function BookmarksClient({ terms }: { terms: Term[] }) {
  const { bookmarks } = useBookmarks();
  const bookmarkedTerms = terms.filter((term) => bookmarks.includes(term.id));

  return (
    <>
      {bookmarkedTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20 rounded-lg border-2 border-dashed border-muted">
          <Bookmark className="w-16 h-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold">No Bookmarks Yet</h2>
          <p className="text-muted-foreground mt-2 max-w-sm">
            Click the bookmark icon on any term to save it here for quick access.
          </p>
        </div>
      )}
    </>
  );
}
