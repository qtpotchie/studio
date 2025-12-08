"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BookOpen, Bookmark, CalendarDays, History, HomeIcon, Info } from "lucide-react";
import Logo from "./logo";
import { Separator } from "./ui/separator";

const NavLink = ({ href, icon: Icon, children, onClick }: { href: string, icon: React.ElementType, children: React.ReactNode, onClick: () => void }) => (
  <Button asChild variant="ghost" className="w-full justify-start text-lg h-14 gap-4 px-6">
    <Link href={href} onClick={onClick}>
      <Icon className="h-6 w-6" />
      {children}
    </Link>
  </Button>
);

export default function MobileSidebar() {
  const { isOpen, onClose, onOpen } = useMobileSidebar();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0 pt-10 w-80 bg-card border-r-0">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex justify-center mb-8">
            <Link href="/" onClick={onClose} className="flex flex-col items-center gap-4">
                <Logo className="w-20 h-20" />
                <span className="text-xl font-bold">TechTermz</span>
            </Link>
        </div>
        <div className="flex flex-col gap-2 px-4">
            <NavLink href="/word-of-the-day" icon={CalendarDays} onClick={onClose}>Word of the Day</NavLink>
            <NavLink href="/all-terms" icon={BookOpen} onClick={onClose}>All Terms</NavLink>
            <Separator className="my-2 bg-border/50" />
            <NavLink href="/history" icon={History} onClick={onClose}>Recent</NavLink>
            <NavLink href="/bookmarks" icon={Bookmark} onClick={onClose}>Saved Words</NavLink>
            <Separator className="my-2 bg-border/50" />
            <NavLink href="/about" icon={Info} onClick={onClose}>About</NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
