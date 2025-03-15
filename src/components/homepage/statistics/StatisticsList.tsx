import { useTranslations } from "next-intl";
import StatisticsItem from "./StatisticsItem";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

export default function StatisticsList() {
  const t = useTranslations("homePage.statistics");

  const statisticsList = [
    { count: "1000+", description: t("clients") },
    { count: "98%", description: t("deals") },
    { count: "250+", description: t("calls") },
    { count: "1000+", description: t("consultations") },
  ];
  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.5 })}
      className="flex flex-wrap tab:flex-nowrap justify-between gap-4 tab:gap-5"
    >
      {statisticsList.map((statisticsItem, idx) => (
        <StatisticsItem key={idx} statisticsItem={statisticsItem} />
      ))}
    </AnimatedWrapper>
  );
}
