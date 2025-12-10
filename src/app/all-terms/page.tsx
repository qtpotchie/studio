"use client";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AllTermsClient from './all-terms-client';

export default function AllTermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold font-headline">All Terms</h1>
          {/* The Badge is now inside AllTermsClient */}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <AllTermsClient />
    </div>
  );
}
