"use client";

import { Button } from './ui/button';
import { Menu, Mic } from 'lucide-react';
import { useVoiceSearch } from '@/context/voice-search-context';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';

export default function GlobalControls() {
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      <Button variant="default" size="icon" onClick={() => setVoiceOpen(true)}>
        <Mic className="h-5 w-5" />
        <span className="sr-only">Voice Search</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={onOpen}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </div>
  );
}
