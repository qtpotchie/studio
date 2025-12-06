"use client";

import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function WordOfTheDay({ terms }: { terms: Term[] }) {
  const [word, setWord] = useState<Term | null>(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    let storedWordId: string | null = null;
    try {
      storedWordId = sessionStorage.getItem('word-of-the-day');
    } catch (error) {
      console.error('Session storage is not available.');
    }

    if (storedWordId) {
      const foundWord = terms.find((t) => t.id === storedWordId);
      if (foundWord) {
        setWord(foundWord);
      }
    } else {
      const randomIndex = Math.floor(Math.random() * terms.length);
      const randomWord = terms[randomIndex];
      setWord(randomWord);
      try {
        sessionStorage.setItem('word-of-the-day', randomWord.id);
      } catch (error) {
        console.error('Session storage is not available.');
      }
    }
    
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));

  }, [terms]);

  if (!word) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto">
      <Link href={`/term/${word.slug}`} className="block group">
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10 border-border">
          <div className="p-8 text-white bg-[hsl(var(--chart-2))]">
              <h3 className="font-headline text-4xl font-bold">{word.term}</h3>
              <p className="text-lg mt-2 text-white/80">{word.definition}</p>
          </div>
          <CardContent className="p-6 bg-card">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground">WORD OF THE DAY</p>
            <p className="text-sm text-muted-foreground mt-1">{currentDate}</p>
            <div className="flex items-center mt-4 font-semibold text-primary group-hover:underline">
              <span>LEARN MORE</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
