"use client";

import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface ExplorerContextType {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const ExplorerContext = createContext<ExplorerContextType | undefined>(undefined);

export const ExplorerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ExplorerContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export const useExplorer = () => {
  const context = React.useContext(ExplorerContext);
  if (context === undefined) {
    throw new Error('useExplorer must be used within a ExplorerProvider');
  }
  return context;
};
