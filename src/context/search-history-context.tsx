"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

export interface SearchHistoryItem {
  query: string;
  timestamp: number;
}

interface SearchHistoryContextType {
  history: SearchHistoryItem[];
  addSearchQuery: (query: string) => void;
  clearHistory: () => void;
}

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);

export const SearchHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('jargon_search_history');
      if (item) {
        const parsedHistory: SearchHistoryItem[] = JSON.parse(item);
        const now = Date.now();
        // Filter out items older than one week
        const recentHistory = parsedHistory.filter(
          (h) => now - h.timestamp < ONE_WEEK_IN_MS
        );
        setHistory(recentHistory);
      }
    } catch (error) {
      console.error('Failed to load search history from localStorage', error);
      setHistory([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        const recentHistory = history.filter(
          (h) => Date.now() - h.timestamp < ONE_WEEK_IN_MS
        );
        window.localStorage.setItem('jargon_search_history', JSON.stringify(recentHistory));
      } catch (error) {
        console.error('Failed to save search history to localStorage', error);
      }
    }
  }, [history, isLoaded]);

  const addSearchQuery = (query: string) => {
    if (!query.trim()) return;

    setHistory((prevHistory) => {
      // Avoid adding the same query consecutively
      if (prevHistory[0]?.query.toLowerCase() === query.toLowerCase()) {
        return prevHistory;
      }
      const newEntry: SearchHistoryItem = { query, timestamp: Date.now() };
      return [newEntry, ...prevHistory];
    });
  };
  
  const clearHistory = () => {
    setHistory([]);
  }

  const value = { history, addSearchQuery, clearHistory };

  return (
    <SearchHistoryContext.Provider value={value}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  if (context === undefined) {
    throw new Error('useSearchHistory must be used within a SearchHistoryProvider');
  }
  return context;
};
