
"use client";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AllTermsClient from './all-terms-client';
import { Badge } from '@/components/ui/badge';
import { terms } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function AllTermsPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">All Terms</h1>
          {isClient && <Badge variant="secondary" className="text-base sm:text-lg">{terms.length}</Badge>}
        </div>
        <Button variant="secondary" size="sm" className="shadow-md" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <AllTermsClient />
    </div>
  );
}
