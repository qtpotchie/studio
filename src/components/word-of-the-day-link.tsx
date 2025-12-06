
"use client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function WordOfTheDayLink() {
  return (
    <DropdownMenuItem asChild>
      <Link href="/word-of-the-day">
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>Word of the Day</span>
      </Link>
    </DropdownMenuItem>
  );
}
