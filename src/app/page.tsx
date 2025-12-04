import JargonExplorer from '@/components/jargon-explorer';
import { terms } from '@/lib/data';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
          IT Jargon, Demystified
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Search, browse, and master the language of tech.
        </p>
      </header>
      <JargonExplorer terms={terms} />
    </div>
  );
}
