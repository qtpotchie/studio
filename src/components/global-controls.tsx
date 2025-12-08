"use client";

import { Button } from './ui/button';
import { Menu, Mic } from 'lucide-react';
import { useVoiceSearch } from '@/context/voice-search-context';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { usePathname } from 'next/navigation';

export default function GlobalControls() {
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onOpen}
          className="h-12 w-12 transition-transform duration-200 ease-in-out active:rotate-90"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setVoiceOpen(true)} className="h-12 w-12">
          <Mic className="h-6 w-6" />
          <span className="sr-only">Voice Search</span>
        </Button>
      </div>
    </>
  );
}
