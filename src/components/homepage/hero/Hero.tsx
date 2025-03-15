import MainButton from "@/components/shared/buttons/MainButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import HeroImages from "./HeroImages";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations();

  const renderTextWithBreaks = (text: string) =>
    text.split("<br/>").map((part, index) => (
      <span key={index}>
        {part}
        {index !== text.split("<br/>").length - 1 && (
          <span className="inline tab:hidden">
            {" "}
            <br />{" "}
          </span>
        )}
      </span>
    ));

  return (
    <section className="relative pt-[100px] xl:pt-[145px] pb-20 xl:pb-[70px] overflow-hidden">
      <Image
        src="/images/hero/buildings.webp"
        alt="buildings"
        priority
        width={2560}
        height={1664}
        className="absolute -z-40 top-0 left-0 w-full h-full object-cover object-right-top"
      />
      <div className="relative container max-w-[1280px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ x: -100 })}
          as={motion.h2}
          className="mb-[314px] tab:mb-[271px] w-[177px] tab:w-[323px] font-prosto text-14reg tab:text-24reg uppercase leading-[125%]"
        >
          {renderTextWithBreaks(t("homePage.hero.subtitle"))}
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 100, delay: 0.4 })}
          className="flex flex-col"
        >
          <h1 className="tab:order-2 mb-5 tab:mb-6 max-w-[438px] mx-auto tab:mx-0 font-prosto text-26reg tab:text-36reg uppercase text-center leading-[125%] tab:text-left">
            {t("homePage.hero.title")}
          </h1>
          <p className="tab:order-3 mb-7 tab:mb-0 max-w-[438px] mx-auto tab:mx-0 text-center tab:text-left leading-[125%] text-[18px]">
            {t("homePage.hero.description")}
          </p>
          <Link
            href="#consultation"
            className="block tab:order-1 w-full max-w-[310px] mx-auto tab:mx-0 tab:mb-12"
          >
            <MainButton className="w-full">
              {t("buttons.freeConsultation")}
            </MainButton>
          </Link>
        </AnimatedWrapper>
        <HeroImages />
      </div>
    </section>
  );
}
