"use client";

import React, { createContext, useState, ReactNode, useContext, useCallback } from 'react';

type ResultCallback = (result: string) => void;

interface VoiceSearchContextType {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  onResult: ResultCallback;
  setOnResult: (callback: ResultCallback) => void;
}

const VoiceSearchContext = createContext<VoiceSearchContextType | undefined>(undefined);

export const VoiceSearchProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  const [onResult, setOnResult] = useState<ResultCallback>(() => () => {});

  const memoizedSetOnResult = useCallback((callback: ResultCallback) => {
    setOnResult(() => callback);
  }, []);

  const value = {
    isOpen,
    setOpen,
    onResult,
    setOnResult: memoizedSetOnResult,
  };

  return (
    <VoiceSearchContext.Provider value={value}>
      {children}
    </VoiceSearchContext.Provider>
  );
};

export const useVoiceSearch = () => {
  const context = useContext(VoiceSearchContext);
  if (context === undefined) {
    throw new Error('useVoiceSearch must be used within a VoiceSearchProvider');
  }
  return context;
};
