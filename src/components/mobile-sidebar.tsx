
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BookOpen, Bookmark, CalendarDays, History, Info } from "lucide-react";
import Logo from "./logo";
import { Separator } from "./ui/separator";

const NavLink = ({ href, icon: Icon, children, onClick }: { href: string, icon: React.ElementType, children: React.ReactNode, onClick: () => void }) => (
  <Button asChild variant="ghost" className="w-full justify-start text-base h-12 gap-4 px-4">
    <Link href={href} onClick={onClick}>
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  </Button>
);

export default function MobileSidebar() {
  const { isOpen, onClose } = useMobileSidebar();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0 pt-8 w-72 bg-card border-r-0 flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="p-4">
            <Link 
              href="/" 
              onClick={onClose} 
              className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-border/50 hover:border-primary/50 transition-colors"
            >
                <Logo className="w-12 h-12" />
                <span className="text-lg font-bold">TechTermz</span>
            </Link>
        </div>
        <div className="flex flex-col gap-1 px-2 mt-4">
            <NavLink href="/word-of-the-day" icon={CalendarDays} onClick={onClose}>Word of the Day</NavLink>
            <NavLink href="/all-terms" icon={BookOpen} onClick={onClose}>All Terms (A-Z)</NavLink>
            <Separator className="my-2 bg-border/50" />
            <NavLink href="/history" icon={History} onClick={onClose}>Recent</NavLink>
            <NavLink href="/bookmarks" icon={Bookmark} onClick={onClose}>Saved Words</NavLink>
            <Separator className="my-2 bg-border/50" />
            <NavLink href="/about" icon={Info} onClick={onClose}>About</NavLink>
        </div>
        <div className="mt-auto border-t p-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Made by: Archie Macahilig
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
