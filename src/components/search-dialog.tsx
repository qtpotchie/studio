
"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ArrowLeft } from "lucide-react";
import { useSearch } from "@/hooks/use-search";
import type { Term } from "@/lib/data";
import { useSearchHistory } from "@/context/search-history-context";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";
import { useVoiceSearch } from "@/context/voice-search-context";
import { useRouter } from "next/navigation";

export default function SearchDialog({ terms }: { terms: Term[] }) {
  const { isOpen, setOpen } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { addSearchQuery } = useSearchHistory();
  const { setOnResult } = useVoiceSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Define what happens when a voice search result is ready
    setOnResult((result: string) => {
      setOpen(true);
      setSearchQuery(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setOpen, setOnResult]);


  useEffect(() => {
    if (isOpen) {
      // Don't clear search on open if it was just populated by voice search
      // setSearchQuery(""); 
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      // Clear search query when closing the dialog
      setSearchQuery("");
    }
  }, [isOpen]);

  const filteredTerms = useMemo(() => {
    if (!debouncedSearchQuery) return [];
    return terms.filter((term) =>
      term.term.toLowerCase().startsWith(debouncedSearchQuery.toLowerCase())
    );
  }, [terms, debouncedSearchQuery]);

  const handleResultClick = () => {
    if (searchQuery.trim()) {
      addSearchQuery(searchQuery);
    }
    setOpen(false);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      if (trimmedQuery) {
        const exactMatch = terms.find(term => term.term.toLowerCase() === trimmedQuery);
        if (exactMatch) {
          addSearchQuery(exactMatch.term);
          router.push(`/term/${exactMatch.slug}`);
          setOpen(false);
        }
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 w-screen h-screen max-w-full flex flex-col rounded-none" hideCloseButton>
        <DialogTitle className="sr-only">Search Terms</DialogTitle>
        <div className="p-4 border-b flex items-center gap-2 sticky top-0 bg-background">
          <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0"
              onClick={() => setOpen(false)}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder={"Search for a term..."}
              className="pl-10 pr-4 text-lg h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 pt-2">
          {debouncedSearchQuery && filteredTerms.length > 0 && (
              <div className="flex flex-col gap-2">
                {filteredTerms.map((term) => (
                  <Link
                    href={`/term/${term.slug}`}
                    key={term.id}
                    className="p-3 border rounded-lg hover:bg-accent transition-colors"
                    onClick={handleResultClick}
                  >
                    <h3 className="font-semibold">{term.term}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{term.definition}</p>
                  </Link>
                ))}
              </div>
            )}
            {debouncedSearchQuery && filteredTerms.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p>No results found for &quot;{debouncedSearchQuery}&quot;.</p>
              </div>
            )}
             {!debouncedSearchQuery && (
              <div className="text-center py-16 text-muted-foreground">
                <p>Start typing to search for terms.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
