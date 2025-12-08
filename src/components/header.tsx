"use client";

import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import { Menu, Mic, Search } from 'lucide-react';
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
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">TechTermz</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Mobile Search Icon */}
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Voice and Menu Icons (Visible on all sizes) */}
          <Button variant="default" size="icon" onClick={() => setVoiceOpen(true)}>
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice Search</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={onOpen}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
