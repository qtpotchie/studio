
"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { SearchHistoryProvider } from "@/context/search-history-context";
import { SearchProvider } from "@/context/search-context";
import { ReactNode, Suspense } from "react";
import SearchDialog from "./search-dialog";
import { terms } from "@/lib/data";
import { MobileSidebarProvider } from "@/context/mobile-sidebar-context";
import MobileSidebar from "./mobile-sidebar";
import { ThemeProvider } from "next-themes";
import { VoiceSearchProvider } from "@/context/voice-search-context";
import dynamic from 'next/dynamic';

// Dynamically import VoiceSearchDialog only on the client-side
const VoiceSearchDialog = dynamic(() => import('./voice-search-dialog'), { ssr: false });


export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MobileSidebarProvider>
        <SearchHistoryProvider>
          <BookmarkProvider>
            <VoiceSearchProvider>
              <SearchProvider>
                  {children}
                  <SearchDialog terms={terms} />
                  <Suspense fallback={null}>
                    <VoiceSearchDialog />
                  </Suspense>
                  <MobileSidebar />
              </SearchProvider>
            </VoiceSearchProvider>
          </BookmarkProvider>
        </SearchHistoryProvider>
      </MobileSidebarProvider>
    </ThemeProvider>
  )
}
