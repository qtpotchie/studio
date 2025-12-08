import Logo from '@/components/logo';
import { terms } from '@/lib/data';
import SearchTrigger from '@/components/search-trigger';
import JargonExplorer from '@/components/jargon-explorer';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center flex flex-col items-center space-y-4">
        <Logo className="w-24 h-24" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
          TechTermz
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Search, browse, and master the language of tech. Your go-to
          dictionary for IT and tech jargon, available offline.
        </p>
      </header>
      <div className="flex justify-center px-4">
        <SearchTrigger />
      </div>
      <JargonExplorer terms={terms} />
    </div>
  );
}
