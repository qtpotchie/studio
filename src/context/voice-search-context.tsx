"use client";

import React, { createContext, useState, ReactNode, useContext } from 'react';

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

  const value = {
    isOpen,
    setOpen,
    onResult,
    setOnResult: (callback: ResultCallback) => setOnResult(() => callback),
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
