
"use client";

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog';
import { Mic, X } from 'lucide-react';
import { useSpeechRecognition } from '@/hooks/use-speech-recognition';
import { useVoiceSearch } from '@/context/voice-search-context';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function VoiceSearchDialog() {
  const { isOpen, setOpen, onResult } = useVoiceSearch();
  const {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    isSupported,
  } = useSpeechRecognition();
  const { toast } = useToast();
  const [statusText, setStatusText] = useState('Listening...');

  useEffect(() => {
    if (isOpen) {
      if (!isSupported) {
        toast({
          variant: 'destructive',
          title: 'Voice Search Not Supported',
          description: 'Your browser does not support the Web Speech API. Please try a different browser like Chrome on desktop or Android.',
        });
        setOpen(false);
        return;
      }
      setStatusText('Listening...');
      startListening();
    } else {
      stopListening();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isSupported]);

  useEffect(() => {
    // When the listening stops, and we have a result, use it.
    if (transcript && !isListening && isOpen) {
      // Check if we have a final transcript before closing.
      if (transcript.trim().length > 0) {
        onResult(transcript);
        setOpen(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, isListening, onResult, setOpen]);

  useEffect(() => {
    if (error && isOpen) {
      let description = `An unknown error occurred. Please try again.`;
      if (error === 'not-allowed' || error === 'service-not-allowed') {
        description = `Microphone access was denied. Please check your browser's site permissions.`;
      } else if (error === 'NOT_SUPPORTED') {
        description = 'Your browser does not support the Web Speech API. Please try a different browser like Chrome on desktop or Android.';
      }

      toast({
        variant: 'destructive',
        title: 'Voice Search Error',
        description: description,
      });
      setOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      setStatusText('Listening...');
      startListening();
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogOverlay className="bg-background/80 backdrop-blur-sm" />
      <DialogContent
        className="bg-transparent border-none shadow-none max-w-lg w-full flex flex-col items-center justify-center text-center p-0"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Voice Search</DialogTitle>
        <div className="w-full flex flex-col items-center gap-6">
          <p className="text-2xl text-foreground/80 font-medium h-8">{isListening ? 'Listening...' : (transcript ? ' ' : 'Say a command...')}</p>
          <button
            onClick={handleMicClick}
            className={cn(
              "rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300",
              isListening ? "bg-primary animate-pulse" : "bg-muted"
            )}
          >
            <Mic className="w-12 h-12 text-primary-foreground" />
          </button>
          <p className="text-xl text-muted-foreground h-7">{transcript}</p>
        </div>
        <button
            onClick={() => setOpen(false)}
            className="absolute bottom-[-5rem] rounded-full bg-muted text-muted-foreground w-14 h-14 flex items-center justify-center"
        >
            <X className="w-8 h-8" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
