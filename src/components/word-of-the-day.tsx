
"use client";

import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useWordOfTheDay } from '@/hooks/use-word-of-the-day';

export default function WordOfTheDay({ terms }: { terms: Term[] }) {
  const { word } = useWordOfTheDay(terms);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  if (!word) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto">
      <Link href={`/term/${word.slug}`} className="block group">
        <Card className="overflow-hidden transition-all bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50">
          <div className="p-4 md:p-8">
              <h3 className="font-headline text-2xl md:text-4xl font-bold text-primary">{word.term}</h3>
              <p className="text-base md:text-lg mt-2 text-foreground/80 line-clamp-2 md:line-clamp-none">{word.definition}</p>
          </div>
          <CardContent className="p-4 md:p-6 bg-accent/30">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-muted-foreground">WORD OF THE DAY</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{currentDate}</p>
            <div className="flex items-center mt-2 md:mt-4 font-semibold text-primary group-hover:underline">
              <span>LEARN MORE</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
