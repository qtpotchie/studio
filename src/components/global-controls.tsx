
"use client";

import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { ThemeToggle } from './theme-toggle';

export default function GlobalControls() {
  const { onOpen } = useMobileSidebar();

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
      <Button 
        variant="secondary" 
        size="icon" 
        onClick={onOpen}
        className="h-12 w-12 transition-transform duration-200 ease-in-out active:rotate-90 shadow-md"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      <ThemeToggle className="h-12 w-12 shadow-md" />
    </div>
  );
}
