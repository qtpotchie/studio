import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Jargon Decoder</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link href="/bookmarks" aria-label="View Bookmarks">
                <Bookmark className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
