import { useTranslations } from "next-intl";
import StepsListMob from "./StepsListMob";
import StepsListDesk from "./StepsListDesk";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Steps() {
  const t = useTranslations("homePage.steps");
  return (
    <section
      id="steps"
      className="pt-[100px] xl:pt-[180px] scroll-mt-6 mx-auto overflow-x-hidden"
    >
      <AnimatedWrapper
        as={motion.h2}
        animation={fadeInAnimation({ y: 50 })}
        className="mb-10 xl:mb-12 font-prosto uppercase text-20reg xl:text-36reg text-center"
      >
        {t("title")}
      </AnimatedWrapper>
      <StepsListMob />
      <StepsListDesk />
    </section>
  );
}
