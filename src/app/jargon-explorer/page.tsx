
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { terms } from '@/lib/data';
import JargonExplorer from '@/components/jargon-explorer';

export default function JargonExplorerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">Jargon Explorer</h1>
          <Badge variant="secondary" className="text-base sm:text-lg">{terms.length}</Badge>
        </div>
        <Button variant="secondary" size="sm" className="shadow-md" asChild>
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
            </Link>
        </Button>
      </div>

      <JargonExplorer terms={terms} />
    </div>
  );
}
