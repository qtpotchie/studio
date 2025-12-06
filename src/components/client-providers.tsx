"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { SearchHistoryProvider } from "@/context/search-history-context";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SearchHistoryProvider>
      <BookmarkProvider>
        {children}
      </BookmarkProvider>
    </SearchHistoryProvider>
  )
}
