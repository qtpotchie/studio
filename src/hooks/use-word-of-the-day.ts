
import { useState, useEffect } from 'react';
import type { Term } from '@/lib/data';

type WordHistoryItem = {
  date: string; // YYYY-MM-DD
  termId: string;
};

// Simple hashing function to get a number from a string
const simpleHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

const getTodayString = () => {
  const today = new Date();
  // Use local date parts to form YYYY-MM-DD to avoid timezone issues
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export function useWordOfTheDay(terms: Term[]) {
  const [word, setWord] = useState<Term | null>(null);

  useEffect(() => {
    if (terms.length === 0) return;

    let history: WordHistoryItem[] = [];
    const todayString = getTodayString();

    try {
      const storedHistory = localStorage.getItem('word_of_the_day_history');
      if (storedHistory) {
        history = JSON.parse(storedHistory);
      }
    } catch (error) {
      console.error('Local storage is not available or failed to parse.');
    }
    
    let todaysEntry = history.find(item => item.date === todayString);

    if (todaysEntry) {
      const foundWord = terms.find((t) => t.id === todaysEntry.termId);
      if (foundWord) {
        setWord(foundWord);
        return;
      }
    }

    // If no entry for today, generate a new word
    const hash = simpleHash(todayString);
    const randomIndex = hash % terms.length;
    const newWord = terms[randomIndex];
    
    const newEntry: WordHistoryItem = { date: todayString, termId: newWord.id };

    // Add new entry and keep history to a reasonable size (e.g., 100 entries)
    const updatedHistory = [newEntry, ...history.filter(item => item.date !== todayString)].slice(0, 100);

    setWord(newWord);
    
    try {
      localStorage.setItem('word_of_the_day_history', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Local storage is not available or failed to save.');
    }

  }, [terms]);

  return { word };
}
