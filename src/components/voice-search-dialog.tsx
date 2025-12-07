"use client";

import { useEffect } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
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
  } = useSpeechRecognition();
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      startListening();
    } else {
      stopListening();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (transcript && !isListening) {
      onResult(transcript);
      setOpen(false);
    }
  }, [transcript, isListening, onResult, setOpen]);

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Voice Search Error',
        description: `Could not start voice search. Error: "${error}". Please check your internet connection and microphone permissions.`,
      });
      setOpen(false);
    }
  }, [error, setOpen, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogOverlay className="bg-background/80 backdrop-blur-sm" />
      <DialogContent
        className="bg-transparent border-none shadow-none max-w-lg w-full flex flex-col items-center justify-center text-center p-0"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="w-full flex flex-col items-center gap-6">
          <p className="text-2xl text-foreground/80 font-medium">Listening...</p>
          <button
            onClick={isListening ? stopListening : startListening}
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
