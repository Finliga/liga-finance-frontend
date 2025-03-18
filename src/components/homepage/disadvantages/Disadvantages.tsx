import { useTranslations } from "next-intl";
import DiasadvantagesList from "./DiasadvantagesList";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Disadvantages() {
  const t = useTranslations("homePage.disadvantages");
  return (
    <section
      id="comparison"
      className="container max-w-[1280px] py-[100px] xl:py-[180px] scroll-mt-6"
    >
      <div className="max-w-[654px] xl:max-w-full mx-auto">
        <AnimatedWrapper
          as={motion.h2}
          animation={fadeInAnimation({ y: 50 })}
          className="mb-9 xl:mb-12 mx-auto font-prosto text-20reg xl:text-36reg uppercase text-center"
        >
          {t("title")}
        </AnimatedWrapper>
        <DiasadvantagesList />
      </div>
    </section>
  );
}
