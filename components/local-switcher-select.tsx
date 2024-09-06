"use client";
import { cn } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, ReactNode, useTransition } from "react";
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value.toLowerCase();
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  }
  return (
    <label
      className={cn(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <select
        className="relative flex items-center justify-center h-10 w-17 bg-slate-950 rounded-lg border p-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]"></span>
    </label>
  );
}