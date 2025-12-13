
import { terms, type Term } from './data';

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
  // Use UTC date parts to form YYYY-MM-DD to ensure it's the same for all users
  const year = today.getUTCFullYear();
  const month = (today.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = today.getUTCDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export async function getWordOfTheDay(): Promise<Term | null> {
  if (terms.length === 0) return null;

  const todayString = getTodayString();
  const hash = simpleHash(todayString);
  const randomIndex = hash % terms.length;
  
  return terms[randomIndex];
}
