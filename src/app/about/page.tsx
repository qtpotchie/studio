
"use client";

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Logo from '@/components/logo';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <div className="mb-6">
        <Button variant="secondary" className="shadow-md" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Logo className="w-24 h-24" />
          </div>
          <CardTitle className="text-4xl font-bold font-headline">
            About TechTermz
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg text-foreground/90 leading-relaxed p-6 md:p-8">
          <p>
            Welcome to TechTermz, your friendly, offline-first dictionary for navigating the complex world of technical jargon. Whether you&apos;re a seasoned developer, an IT professional, or just starting your journey into tech, TechTermz is here to help you quickly understand the language of the industry.
          </p>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-primary">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Comprehensive Dictionary:</strong> A curated list of hundreds of technical terms and slang.</li>
              <li><strong>Offline Access:</strong> Search and browse the dictionary even when you don&apos;t have an internet connection.</li>
              <li><strong>Clean & Fast Interface:</strong> A modern, intuitive design that lets you find what you need without fuss.</li>
              <li><strong>Word of the Day:</strong> Learn a new term every day to expand your vocabulary.</li>
              <li><strong>Bookmarks & History:</strong> Save terms for later and review your recent searches.</li>
            </ul>
          </div>
          <p>
            This application was built to be a Progressive Web App (PWA), which means you can install it on your mobile device or desktop for an app-like experience. Our goal is to make technical knowledge accessible and easy to understand for everyone.
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-4 text-center text-muted-foreground">
          <p className="w-full">Made by: Archie Macahilig</p>
        </CardFooter>
      </Card>
    </div>
  );
}
