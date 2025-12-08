"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Term } from "@/lib/data";
import { ScrollArea } from "./ui/scroll-area";
import JargonExplorer from "./jargon-explorer";

interface ExplorerDialogProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  terms: Term[];
}

export default function ExplorerDialog({ isOpen, setOpen, terms }: ExplorerDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 w-screen h-screen max-w-full flex flex-col rounded-none" hideCloseButton>
        <DialogTitle className="sr-only">Jargon Explorer</DialogTitle>
        <div className="p-4 border-b flex items-center gap-2 sticky top-0 bg-background z-10">
          <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0"
              onClick={() => setOpen(false)}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          <h2 className="text-xl font-bold font-headline">
            Jargon Explorer
          </h2>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 pt-2">
            <JargonExplorer terms={terms} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
