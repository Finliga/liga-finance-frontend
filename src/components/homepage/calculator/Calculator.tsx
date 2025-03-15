import { useTranslations } from "next-intl";
import Image from "next/image";
import CostsCalculator from "./CostsCalculator";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Calculator() {
  const t = useTranslations("homePage.calculator");

  return (
    <section
      id="calculator"
      className="pt-[100px] pb-[89px] xl:pt-[110px] xl:pb-[122px] scroll-mt-12 bg-white overflow-hidden"
    >
      <div className="relative container max-w-[1280px]">
        <AnimatedWrapper
          as={motion.h2}
          animation={fadeInAnimation({ y: 50 })}
          className="mb-12 font-prosto text-20reg xl:text-36reg uppercase text-center text-black"
        >
          {t("title")}
        </AnimatedWrapper>
        <CostsCalculator />
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 50, delay: 1.6 })}
          className="absolute bottom-[-90px] xl:bottom-[-124px] left-[27px] lg:left-[71px] w-[218px] sm:w-[220px] xl:w-[302px] h-auto"
        >
          <Image
            src="/images/calculator/logo.svg"
            alt="logo"
            width="299"
            height="125"
            className="w-full h-auto"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
