"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useExplorer } from "@/hooks/use-explorer";
import { terms, Term } from "@/lib/data";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function ExplorerDialog({ terms }: { terms: Term[] }) {
  const { isOpen, setOpen } = useExplorer();

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

  const handleTermClick = () => {
    setOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 w-screen h-screen max-w-full flex flex-col rounded-none" hideCloseButton>
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
            <div className="flex items-center gap-4">
              <BookOpen className="h-6 w-6" />
              <DialogTitle className="text-xl font-bold">
                All Terms ({terms.length})
              </DialogTitle>
            </div>
         </div>
        <ScrollArea className="flex-1">
          <div className="p-4">
            <div className="flex flex-col gap-8">
              {alphabet.map((letter) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="text-2xl font-bold font-headline text-primary mb-4 pb-2 border-b-2 border-primary/30">
                    {letter}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                    {groupedTerms[letter].map((term) => (
                      <Link 
                        href={`/term/${term.slug}`} 
                        key={term.id} 
                        className="block hover:text-primary transition-colors group"
                        onClick={handleTermClick}
                      >
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
