"use client";
import { terms } from "@/lib/data";
import { useWordOfTheDay } from "@/hooks/use-word-of-the-day";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function WordOfTheDayLink() {
  const { word } = useWordOfTheDay(terms);

  if (!word) {
    return (
      <DropdownMenuItem disabled>
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>Word of the Day</span>
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={`/term/${word.slug}`}>
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>Word of the Day</span>
      </Link>
    </DropdownMenuItem>
  );
}
