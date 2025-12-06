"use client";

import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function WordOfTheDay({ terms }: { terms: Term[] }) {
  const [word, setWord] = useState<Term | null>(null);

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
        return;
      }
    }

    const randomIndex = Math.floor(Math.random() * terms.length);
    const randomWord = terms[randomIndex];
    setWord(randomWord);
    try {
      sessionStorage.setItem('word-of-the-day', randomWord.id);
    } catch (error) {
      console.error('Session storage is not available.');
    }
  }, [terms]);

  if (!word) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-muted-foreground mb-3 flex items-center justify-center gap-2">
        <Lightbulb className="w-5 h-5 text-primary" />
        Word of the Day
      </h2>
      <Link href={`/term/${word.slug}`} className="block group">
        <Card className="transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10">
          <CardHeader>
            <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
              {word.term}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {word.definition}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
