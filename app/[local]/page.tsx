import Hero from "@/components/hero";
import WhyUs from "@/components/why-us";
import Image from "next/image";
import {useTranslations} from 'next-intl';
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="">
     {/* <h1 className="text-4xl">{t("title")}</h1>   */}
     {/* testing working */}
      <Hero />
      <WhyUs />
    </div>
  );
}