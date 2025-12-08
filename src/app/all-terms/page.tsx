import JargonExplorer from '@/components/jargon-explorer';
import { terms } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AllTermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
       <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">All Terms</h1>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <JargonExplorer terms={terms} />
    </div>
  );
}
