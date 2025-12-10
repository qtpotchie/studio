
"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { SearchHistoryProvider } from "@/context/search-history-context";
import { SearchProvider } from "@/context/search-context";
import { ReactNode } from "react";
import SearchDialog from "./search-dialog";
import { terms } from "@/lib/data";
import { MobileSidebarProvider } from "@/context/mobile-sidebar-context";
import MobileSidebar from "./mobile-sidebar";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
      <MobileSidebarProvider>
        <SearchHistoryProvider>
          <BookmarkProvider>
              <SearchProvider>
                  {children}
                  <SearchDialog terms={terms} />
                  <MobileSidebar />
              </SearchProvider>
          </BookmarkProvider>
        </SearchHistoryProvider>
      </MobileSidebarProvider>
  )
}
