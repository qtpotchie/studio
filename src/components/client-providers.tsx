"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { SearchHistoryProvider } from "@/context/search-history-context";
import { SearchProvider } from "@/context/search-context";
import { VoiceSearchProvider } from "@/context/voice-search-context";
import { ReactNode } from "react";
import SearchDialog from "./search-dialog";
import VoiceSearchDialog from "./voice-search-dialog";
import { terms } from "@/lib/data";
import { MobileSidebarProvider } from "@/context/mobile-sidebar-context";
import MobileSidebar from "./mobile-sidebar";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <MobileSidebarProvider>
      <SearchHistoryProvider>
        <BookmarkProvider>
          <SearchProvider>
            <VoiceSearchProvider>
              {children}
              <SearchDialog terms={terms} />
              <VoiceSearchDialog />
              <MobileSidebar />
            </VoiceSearchProvider>
          </SearchProvider>
        </BookmarkProvider>
      </SearchHistoryProvider>
    </MobileSidebarProvider>
  )
}