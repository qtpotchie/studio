"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { SearchHistoryProvider } from "@/context/search-history-context";
import { SearchProvider } from "@/context/search-context";
import { ReactNode } from "react";
import SearchDialog from "./search-dialog";
import { terms } from "@/lib/data";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SearchHistoryProvider>
      <BookmarkProvider>
        <SearchProvider>
          {children}
          <SearchDialog terms={terms} />
        </SearchProvider>
      </BookmarkProvider>
    </SearchHistoryProvider>
  )
}
