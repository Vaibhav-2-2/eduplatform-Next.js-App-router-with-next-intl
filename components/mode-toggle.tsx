"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative flex bg-slate-950 items-center justify-center h-10 w-14 rounded-lg border p-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer"
        >
          {/* Sun Icon for Light Mode */}
          <Sun className="absolute h-6 w-6 text-yellow-500 rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:text-gray-400" />

          {/* Moon Icon for Dark Mode */}
          <Moon className="absolute h-6 w-6 text-gray-400 rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:text-yellow-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow-md transition-transform duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out"
      >
        <DropdownMenuItem
          className="transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground cursor-pointer"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="transition-colors duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground cursor-pointer"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
