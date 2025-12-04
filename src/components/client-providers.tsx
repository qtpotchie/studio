"use client";

import { BookmarkProvider } from "@/context/bookmark-context";
import { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <BookmarkProvider>
      {children}
    </BookmarkProvider>
  )
}
