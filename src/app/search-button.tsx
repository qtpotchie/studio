
'use client';

import { Button } from '@/components/ui/button';
import { useSearch } from '@/hooks/use-search';
import { Search } from 'lucide-react';

export default function SearchButton() {
  const { setOpen } = useSearch();
  return (
    <Button
      variant="secondary"
      className="h-12 text-base basis-2/3 shadow-md group"
      onClick={() => setOpen(true)}
    >
      <Search className="mr-3 h-5 w-5 transition-transform group-hover:animate-search-pulse" />
      <span>Search Terms</span>
    </Button>
  );
}
