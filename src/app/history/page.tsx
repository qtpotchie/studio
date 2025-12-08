"use client";
import { useSearchHistory } from '@/context/search-history-context';
import { Button } from '@/components/ui/button';
import { ArrowLeft, History, Trash2 } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function HistoryPage() {
  const { history, clearHistory } = useSearchHistory();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Search History</h1>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          {history.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your entire search history. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={clearHistory}>
                    Yes, clear history
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>

      {history.length > 0 ? (
        <div className="border rounded-lg">
          <ul className="divide-y divide-border">
            {history.map((item, index) => (
              <li key={index} className="p-4 flex justify-between items-center">
                <span className="text-lg">{item.query}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20 rounded-lg border-2 border-dashed border-muted">
          <History className="w-16 h-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold">No Search History</h2>
          <p className="text-muted-foreground mt-2 max-w-sm">
            Your recent searches will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
