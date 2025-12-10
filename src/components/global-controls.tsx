
"use client";

import { Button } from './ui/button';
import { Menu, Mic } from 'lucide-react';
import { useVoiceSearch } from '@/context/voice-search-context';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';

export default function GlobalControls() {
  const { setOpen: setVoiceOpen } = useVoiceSearch();
  const { onOpen } = useMobileSidebar();

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onOpen}
        className="h-12 w-12 transition-transform duration-200 ease-in-out active:rotate-90"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => setVoiceOpen(true)} className="h-12 w-12">
          <Mic className="h-6 w-6" />
          <span className="sr-only">Voice Search</span>
        </Button>
      </div>
    </div>
  );
}
