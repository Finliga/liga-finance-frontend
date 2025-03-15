import { useTranslations } from "next-intl";
import TeamList from "./TeamList";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Team() {
  const t = useTranslations("homePage.team");
  return (
    <section
      id="team"
      className="container max-w-[1280px] py-[100px] xl:py-[180px] overflow-x-hidden"
    >
      <AnimatedWrapper
        as={motion.h2}
        animation={fadeInAnimation({ y: 50 })}
        className="max-w-[758px] mb-6 xl:mb-7 font-prosto text-20reg xl:text-36reg uppercase"
      >
        {t("title")}
      </AnimatedWrapper>
      <AnimatedWrapper
        as={motion.p}
        animation={fadeInAnimation({ x: 50, delay: 0.6 })}
        className="max-w-[442px] mb-[53px] xl:mb-[83px] text-[18px]"
      >
        {t("description")}
      </AnimatedWrapper>
      <TeamList />
    </section>
  );
}
