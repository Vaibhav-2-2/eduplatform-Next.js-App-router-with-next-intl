import { cn } from "@/lib/utils";
import React from "react";
import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("HomePage");
  // const courseHighlights = [
  //   {
  //     title: "Real-World Applications",
  //     description:
  //       "Students build a production-ready application that includes Ecommerce, Point of Sale, and Inventory Management systems.",
  //     iconColor: "bg-purple-900 dark:bg-purple-700",
  //     icon: FaShoppingCart,
  //   },
  //   {
  //     title: "Advanced Yet Accessible",
  //     description:
  //       "The course tackles advanced concepts explained step-by-step, making it suitable for all skill levels.",
  //     iconColor: "bg-pink-900 dark:bg-pink-700",
  //     icon: FaRocket,
  //   },
  //   {
  //     title: "Hands-On Learning",
  //     description:
  //       "Emphasizes practical, project-based learning rather than just theoretical knowledge.",
  //     iconColor: "bg-orange-900 dark:bg-orange-700",
  //     icon: FaTools,
  //   },
  //   {
  //     title: "Comprehensive Curriculum",
  //     description:
  //       "Covers fullstack development with Next.js, TypeScript, Prisma, and MongoDB, ensuring a thorough understanding of modern web development.",
  //     iconColor: "bg-teal-900 dark:bg-teal-700",
  //     icon: FaBook,
  //   },
  // ];
  // Define an object to map icon colors for each key
  const obj = {
    "real-world": { icon: FaShoppingCart, color: "bg-purple-500 dark:bg-purple-700" },
    advanced: { icon: FaRocket, color: "bg-pink-500 dark:bg-pink-700" },
    "hands-on": { icon: FaTools, color: "bg-orange-500 dark:bg-orange-700" },
    comprehensive: { icon: FaBook, color: "bg-teal-500 dark:bg-teal-700" },
  };

  return (
    <div className="min-h-screen py-40 max-w-6xl mx-auto">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance dark:text-light text-center py-4">
        {t("WhyUs.title")}
      </h2>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(obj).map(([key, { icon: Icon, color }], i) => (
            <div
              key={i}
              className="bg-blue-50 dark:bg-blue-800 rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 flex gap-4 transform hover:scale-105"
            >
              <div
                className={cn(
                  color, // Use the corresponding color for each icon
                  "w-16 h-16 rounded-lg text-gray-50 dark:text-gray-200 flex items-center justify-center flex-shrink-0"
                )}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight dark:text-light">
                  {t(`WhyUs.points.${key}.title`)}
                </h2>
                <p className="pt-3 dark:text-gray-300">
                  {t(`WhyUs.points.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          size={"lg"}
          className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <Link href="https://coding-school-typescript.vercel.app/courses/next">
            {t("WhyUs.enrollNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
