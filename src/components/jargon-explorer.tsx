"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Term } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Mic } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { cn } from '@/lib/utils';
import TermCard from './term-card';
import WordOfTheDay from './word-of-the-day';
import { useToast } from "@/hooks/use-toast";
import { useVoiceSearch } from '@/context/voice-search-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function JargonExplorer({ terms }: { terms: Term[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('alphabetical');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { toast } = useToast();
  const { setOpen, setOnResult } = useVoiceSearch();

  const { isSupported } = useSpeechRecognition();

  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredTerms = useMemo(() => {
    let filtered = terms;
    if (debouncedSearchQuery) {
      filtered = terms.filter(
        (term) =>
          term.term.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }
    
    if (sortOrder === 'alphabetical') {
      return filtered.sort((a, b) => a.term.localeCompare(b.term));
    }
    
    // For 'random', we'll shuffle the array.
    // This isn't a perfect shuffle but good enough for this UI.
    return [...filtered].sort(() => Math.random() - 0.5);

  }, [terms, debouncedSearchQuery, sortOrder]);

  const handleVoiceSearch = () => {
    setOnResult((result: string) => {
      setSearchQuery(result);
    });
    setOpen(true);
  }

  return (
    <div className="space-y-8">
      <WordOfTheDay terms={terms} />
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 items-center max-w-xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="relative flex-grow w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Explore terms..."
              className="pl-10 text-lg h-14"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="flex w-full md:w-auto items-center gap-2">
            {isClient && isSupported && (
              <Button type="button" size="icon" variant="default" onClick={handleVoiceSearch} className="h-14 w-14">
                <Mic className="h-6 w-6" />
                <span className="sr-only">Search by voice</span>
              </Button>
            )}
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[180px] h-14 text-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="random">Random</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((term) => (
              <TermCard key={term.id} term={term} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No results found for &quot;{debouncedSearchQuery}&quot;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
