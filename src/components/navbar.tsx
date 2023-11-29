"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between pb-4">
      <Link
        href="/"
        className="rounded-lg p-2 outline-none transition-all hover:bg-muted/80 focus-visible:ring-1 focus-visible:ring-ring"
      >
        <p className="text-2xl">
          &lt;<b className="text-primary">toasted</b> /&gt;
        </p>
      </Link>
    </nav>
  );
}
