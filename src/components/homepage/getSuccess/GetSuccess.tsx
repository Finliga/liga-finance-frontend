import { useTranslations } from "next-intl";
import Image from "next/image";
import GetSuccessImages from "./GetSuccessImages";
import CallBackApplication from "@/components/shared/callBackApllication/CallBackApplication";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";

export default function GetSuccess() {
  const t = useTranslations("homePage.getSuccess");

  return (
    <section className="relative pt-[140px] pb-[120px] tab:py-[98px] overflow-hidden">
      <Image
        src="/images/getSuccess/building.webp"
        alt="building"
        width={2560}
        height={1286}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative container max-w-[1280px]">
        <div className="max-w-[520px] tab:max-w-[376px] mx-auto tab:mr-0 tab:ml-auto xl:mr-[124px]">
          <AnimatedWrapper
            as={motion.h2}
            animation={fadeInAnimation({ x: 100 })}
            className="mb-6 xl:mb-7 font-prosto uppercase text-center tab:text-left text-24reg xl:text-32reg leading-[130%]"
          >
            {t("title")}
          </AnimatedWrapper>
          <AnimatedWrapper
            as={motion.p}
            animation={fadeInAnimation({ x: -100 })}
            className="mb-8 xl:mb-12 text-center tab:text-left leading-[125%]"
          >
            {t("description")}
          </AnimatedWrapper>
          <CallBackApplication />
        </div>
        <GetSuccessImages />
      </div>
    </section>
  );
}
