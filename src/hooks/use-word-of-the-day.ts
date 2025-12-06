import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';

export function useWordOfTheDay(terms: Term[]) {
  const [word, setWord] = useState<Term | null>(null);

  useEffect(() => {
    let storedWordId: string | null = null;
    let storedWordDate: string | null = null;
    const today = new Date().toDateString();

    try {
      storedWordId = sessionStorage.getItem('word-of-the-day-id');
      storedWordDate = sessionStorage.getItem('word-of-the-day-date');
    } catch (error) {
      console.error('Session storage is not available.');
    }

    if (storedWordId && storedWordDate === today) {
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
      sessionStorage.setItem('word-of-the-day-id', randomWord.id);
      sessionStorage.setItem('word-of-the-day-date', today);
    } catch (error) {
      console.error('Session storage is not available.');
    }

  }, [terms]);

  return { word };
}
