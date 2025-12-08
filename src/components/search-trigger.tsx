"use client";

import { useSearch } from "@/hooks/use-search";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <Button
      variant="outline"
      className="h-14 text-muted-foreground text-lg justify-start px-8 border-2 hover:bg-accent/50 hover:text-foreground"
      onClick={() => setOpen(true)}
    >
      <Search className="mr-4 h-5 w-5" />
      <span>Search</span>
    </Button>
  );
}
