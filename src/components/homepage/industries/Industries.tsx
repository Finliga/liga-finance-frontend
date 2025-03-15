import { useTranslations } from "next-intl";
import IndustriesGridMob from "./IndustriesGridMob";
import IndustriesGridDesk from "./IndustriesGridDesk";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Industries() {
  const t = useTranslations("homePage.industries");

  return (
    <section
      id="industries"
      className="py-[100px] xl:py-[110px] scroll-mt-12 bg-white overflow-x-hidden"
    >
      <div className="container max-w-[1280px] ">
        <AnimatedWrapper
          className="mb-12 font-prosto uppercase text-center text-20reg xl:text-36reg leading-[100%] text-black"
          as={motion.h2}
          animation={fadeInAnimation({ y: 50 })}
        >
          {t("title")}
        </AnimatedWrapper>
        <IndustriesGridMob />
        <IndustriesGridDesk />
      </div>
    </section>
  );
}
