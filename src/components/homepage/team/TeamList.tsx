import { useTranslations } from "next-intl";
import Teammate from "./Teammate";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

export default function TeamList() {
  const t = useTranslations("homePage.team");

  const teamList = [
    { name: t("first.name"), role: t("first.role"), photo: "ohrin" },
    { name: t("second.name"), role: t("second.role"), photo: "bilyk" },
    { name: t("third.name"), role: t("third.role"), photo: "kuznyak" },
    { name: t("fourth.name"), role: t("fourth.role"), photo: "vysotska" },
  ];

  return (
    <div className="flex justify-center">
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={listVariants({ staggerChildren: 0.4, delayChildren: 1 })}
        className="flex flex-wrap gap-3 xl:gap-5 w-full max-w-[511px] lg:max-w-[1260px]"
      >
        {teamList.map((teammate, idx) => (
          <Teammate
            key={idx}
            teammate={teammate}
            className={
              idx === 0
                ? "scale-[140%] object-right"
                : idx === 3
                ? " object-right-bottom"
                : idx === 1
                ? "object-left"
                : "object-center"
            }
          />
        ))}
      </AnimatedWrapper>
    </div>
  );
}
