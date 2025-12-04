"use client";

import { useBookmarks } from '@/context/bookmark-context';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function BookmarkToggle({ termId }: { termId: string }) {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const isBookmarked = bookmarks.includes(termId);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isBookmarked) {
      removeBookmark(termId);
      toast({ description: 'Bookmark removed.' });
    } else {
      addBookmark(termId);
      toast({ description: 'Bookmark added.' });
    }
  };

  if (!isClient) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Bookmark className="text-muted-foreground" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark
        className={cn(
          'transition-all',
          isBookmarked
            ? 'fill-primary text-primary'
            : 'text-muted-foreground group-hover:text-primary/70'
        )}
      />
    </Button>
  );
}
