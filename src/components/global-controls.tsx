"use client";

import { Button } from './ui/button';
import { Menu, Mic } from 'lucide-react';
import { useVoiceSearch } from '@/context/voice-search-context';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';

export default function GlobalControls() {
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onOpen}
          className="h-12 w-12 transition-transform active:scale-90"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <Button variant="default" size="icon" onClick={() => setVoiceOpen(true)}>
          <Mic className="h-5 w-5" />
          <span className="sr-only">Voice Search</span>
        </Button>
      </div>
    </>
  );
}
