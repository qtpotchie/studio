"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BookmarkContextType {
  bookmarks: string[];
  addBookmark: (termId: string) => void;
  removeBookmark: (termId:string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('jargon_bookmarks');
      if (item) {
        setBookmarks(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to load bookmarks from localStorage', error);
      setBookmarks([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem('jargon_bookmarks', JSON.stringify(bookmarks));
      } catch (error) {
        console.error('Failed to save bookmarks to localStorage', error);
      }
    }
  }, [bookmarks, isLoaded]);

  const addBookmark = (termId: string) => {
    setBookmarks((prevBookmarks) => {
      if (prevBookmarks.includes(termId)) {
        return prevBookmarks;
      }
      return [...prevBookmarks, termId];
    });
  };

  const removeBookmark = (termId: string) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((id) => id !== termId));
  };
  
  const value = { bookmarks, addBookmark, removeBookmark };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
