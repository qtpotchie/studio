
"use client";
import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';
import { terms } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays } from 'lucide-react';

type WordHistoryItem = {
  date: string; // YYYY-MM-DD
  termId: string;
};

export default function WordOfTheDayArchivePage() {
  const [history, setHistory] = useState<WordHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('word_of_the_day_history');
      if (item) {
        const sortedHistory = JSON.parse(item).sort(
          (a: WordHistoryItem, b: WordHistoryItem) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setHistory(sortedHistory);
      }
    } catch (error) {
      console.error('Failed to load word of the day history', error);
    }
    setIsLoaded(true);
  }, []);

  const getTermById = (id: string): Term | undefined => {
    return terms.find((term) => term.id === id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Add timezone offset to avoid showing previous day
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold font-headline flex items-center">
          <CalendarDays className="mr-2 h-6 w-6 sm:mr-3 sm:h-7 sm:w-7" />
          Word of the Day
        </h1>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      {isLoaded && history.length > 0 ? (
        <div className="border rounded-lg bg-card">
          <ul className="divide-y divide-border">
            {history.map(({ date, termId }) => {
              const term = getTermById(termId);
              if (!term) return null;

              return (
                <li key={date}>
                  <Link href={`/term/${term.slug}`} className="block p-3 md:p-4 hover:bg-accent transition-colors">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-xs md:text-sm font-mono text-muted-foreground w-16 md:w-20 text-center">{formatDate(date)}</span>
                      <span className="font-semibold text-base md:text-lg">{term.term}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20 rounded-lg border-2 border-dashed border-muted">
           {isLoaded ? (
            <>
              <CalendarDays className="w-16 h-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold">No History Yet</h2>
              <p className="text-muted-foreground mt-2 max-w-sm">
                Check back tomorrow for a new word! The archive will build up over time.
              </p>
            </>
           ) : <p>Loading history...</p>}
        </div>
      )}
    </div>
  );
}
