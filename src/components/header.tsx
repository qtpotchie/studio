"use client";

import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import { Bookmark, History, Menu, HomeIcon, CalendarDays, BookOpen, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import WordOfTheDayLink from './word-of-the-day-link';
import { useSearch } from '@/hooks/use-search';

export default function Header() {
  const { setOpen } = useSearch();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">TechTermz</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
             <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="/bookmarks" aria-label="View Bookmarks">
                <Bookmark className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/all-terms">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>All Terms</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <WordOfTheDayLink />
                <DropdownMenuItem asChild>
                  <Link href="/history">
                    <History className="mr-2 h-4 w-4" />
                    <span>Search History</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookmarks">
                    <Bookmark className="mr-2 h-4 w-4" />
                    <span>Bookmarked Terms</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
