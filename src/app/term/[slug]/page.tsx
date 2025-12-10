
"use client";

import { terms } from '@/lib/data';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookmarkToggle from '@/components/bookmark-toggle';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function TermPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const term = terms.find((t) => t.slug === resolvedParams.slug);

  if (!term) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="secondary" className="shadow-md" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline pr-16">{term.term}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-lg">
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <BookmarkToggle termId={term.id} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">Definition</h3>
            <p className="text-foreground/90 leading-relaxed">{term.definition}</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">Example</h3>
            <blockquote className="border-l-4 border-primary/50 pl-6 italic text-muted-foreground">
              {term.example}
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
