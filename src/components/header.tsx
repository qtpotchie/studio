"use client";

import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import { Bookmark, History, Menu, HomeIcon, CalendarDays, BookOpen, Mic } from 'lucide-react';
import { useSearch } from '@/hooks/use-search';
import { useVoiceSearch } from '@/context/voice-search-context';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';

export default function Header() {
  const { setOpen } = useSearch();
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Button variant="ghost" size="icon" onClick={onOpen} className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">TechTermz</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
             <Button variant="ghost" className="hidden md:inline-flex" onClick={() => setOpen(true)}>
              Search...
             </Button>
             <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
                <Mic className="h-5 w-5" />
                <span className="sr-only">Search</span>
             </Button>
             <Button variant="default" size="icon" onClick={() => setVoiceOpen(true)}>
              <Mic className="h-5 w-5" />
              <span className="sr-only">Voice Search</span>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="/bookmarks" aria-label="View Bookmarks">
                <Bookmark className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
           <Button variant="ghost" size="icon" onClick={onOpen}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
        </div>
      </div>
    </header>
  );
}

// Keeping dropdown for larger screens for now, can be removed if sidebar is desired everywhere
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import WordOfTheDayLink from './word-of-the-day-link';