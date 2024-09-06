import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

export default function SiteHeader() {
  const t = useTranslations("Layout");
  const keys = ["courseProgram", "bootcamp", "community", "aboutUs"];

  return (
    <header className="bg-white dark:bg-gray-900 flex items-center justify-between max-w-6xl mx-auto py-4 px-6 shadow-md dark:shadow-2xl transition-shadow duration-300 ease-in-out">
      <Link 
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" 
        href={"/"}
      >
      {t("Config.logo")}
      </Link>
      <nav className="flex items-center gap-8">
      {keys.map((key: any, i: number) => {
            return (
              <Link key={i} href={t(`Navigation.${key}.href`)}>
                {t(`Navigation.${key}.title`)}
              </Link>
            );
          })}
      </nav>
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <LocalSwitcher />

         
        <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-800 dark:text-blue-200 transition-all duration-300 transform hover:scale-105 shadow-md dark:shadow-lg">
          <Link href="https://coding-school-typescript.vercel.app/courses/next">
          {t("Config.cta")}
          </Link>
        </Button>
      </div>
    </header>
  );
}
