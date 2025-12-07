"use client";

import { useState, useEffect, useMemo, FormEvent } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft, X, Mic } from "lucide-react";
import { useSearch } from "@/hooks/use-search";
import type { Term } from "@/lib/data";
import { useSearchHistory } from "@/context/search-history-context";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { useToast } from "@/hooks/use-toast";

export default function SearchDialog({ terms }: { terms: Term[] }) {
  const { isOpen, setOpen } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { addSearchQuery } = useSearchHistory();
  const { toast } = useToast();

  const { isListening, transcript, startListening, stopListening, isSupported, error } =
    useSpeechRecognition();
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Voice Search Error",
        description: `Could not start voice search. Error: "${error}". Please check your internet connection and microphone permissions.`,
      });
    }
  }, [error, toast]);


  const filteredTerms = useMemo(() => {
    if (!debouncedSearchQuery) return [];
    return terms.filter(
      (term) =>
        term.term.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [terms, debouncedSearchQuery]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addSearchQuery(searchQuery);
    }
    if (isListening) {
      stopListening();
    }
  };

  const handleVoiceSearch = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  const handleResultClick = () => {
    setOpen(false);
    setSearchQuery('');
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 max-w-2xl h-[calc(100%-4rem)] flex flex-col">
        <div className="p-4 border-b">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative flex items-center gap-2">
              <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0" onClick={() => setOpen(false)}>
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
              <Search className="absolute left-12 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={isListening ? "Listening..." : "Search for a term..."}
                className="pl-10 text-lg h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-[4.5rem] h-9 w-9"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Clear</span>
                </Button>
              )}
               {isClient && isSupported && (
                 <Button type="button" size="icon" onClick={handleVoiceSearch} variant="ghost" className={cn("h-9 w-9", isListening && 'text-primary animate-pulse')}>
                  <Mic className="h-5 w-5" />
                  <span className="sr-only">Search by voice</span>
                </Button>
              )}
            </div>
          </form>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 pt-0">
          {debouncedSearchQuery && filteredTerms.length > 0 && (
              <div className="flex flex-col">
                {filteredTerms.map((term) => (
                  <Link 
                    href={`/term/${term.slug}`} 
                    key={term.id} 
                    className="p-3 -mx-3 rounded-lg hover:bg-accent transition-colors"
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
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
