import { useTranslations } from "next-intl";
import DisadvanatageItem from "./DisadvanatageItem";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";

export default function DiasadvantagesList() {
  const t = useTranslations("homePage.disadvantages");

  const disadvantagesList = [
    t("first"),
    t("second"),
    t("third"),
    t("fourth"),
    t("fifth"),
  ];

  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.5, delayChildren: 0.4 })}
      className="flex flex-col gap-y-4 xl:gap-y-6 mx-auto"
    >
      {disadvantagesList.map((disadvantageItem, idx) => (
        <DisadvanatageItem key={idx} disadvantageItem={disadvantageItem} />
      ))}
    </AnimatedWrapper>
  );
}
