import { useTranslations } from "next-intl";
import BenefitItem from "./BenefitItem";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";

export default function BenefitsList() {
  const t = useTranslations("homePage.benefits");

  const benefitsList = [t("first"), t("second"), t("third"), t("fourth")];

  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.4, delayChildren: 0.4 })}
      className="flex flex-col gap-y-4 xl:gap-y-[28px] max-w-[310px] tab:max-w-[334px] xl:max-w-[534px] mx-auto moblg:mx-0"
    >
      {benefitsList.map((benefitItem, idx) => (
        <BenefitItem key={idx} benefitItem={benefitItem} />
      ))}
    </AnimatedWrapper>
  );
}
