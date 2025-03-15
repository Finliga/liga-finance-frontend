import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

export default function IndustriesGridDesk() {
  const t = useTranslations("homePage.industries");

  return (
    <div className="hidden sm:grid xl:grid-cols-[1fr_1fr] gap-5">
      {/* Перший стовпчик */}
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={listVariants({ staggerChildren: 0.5, delayChildren: 0.4 })}
        className="grid grid-cols-[0.96fr_2.03fr] gap-5 h-full"
      >
        <AnimatedListItem className="relative flex flex-col justify-end aspect-[173/497] p-[18px]">
          <Image
            src="/images/industries/industryOneDesk.webp"
            alt="industry"
            width={346}
            height={994}
            className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
          />
          <p className="relative w-[82px] mr-auto font-prosto text-18reg uppercase text-left">
            {t("trade")}
          </p>
        </AnimatedListItem>
        <AnimatedListItem className="flex flex-col gap-5 justify-between">
          <div className="flex gap-5 w-full">
            <div className="relative flex flex-col justify-start w-[calc(50%-10px)] aspect-[174/306] p-[18px]">
              <Image
                src="/images/industries/industryTwoDesk.webp"
                alt="industry"
                width={348}
                height={612}
                className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
              />
              <p className="relative w-[92px] mr-auto font-prosto text-18reg uppercase text-left">
                {t("agricultural")}
              </p>
            </div>
            <div className="relative flex flex-col justify-end w-[calc(50%-10px)] aspect-[173/306] p-[18px]">
              <Image
                src="/images/industries/industryThreeDesk.webp"
                alt="industry"
                width={346}
                height={612}
                className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
              />
              <p className="relative ml-auto font-prosto text-18reg uppercase text-left">
                {t("services")}
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-start aspect-[367/171] p-[18px]">
            <Image
              src="/images/industries/industryFourDesk.webp"
              alt="industry"
              width={734}
              height={342}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative mr-auto font-prosto text-18reg uppercase text-left">
              {t("manufacturing")}
            </p>
          </div>
        </AnimatedListItem>
      </AnimatedWrapper>
      {/* Другий стовпчик */}
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={listVariants({ staggerChildren: 0.5, delayChildren: 1.4 })}
        className="flex flex-col gap-5 justify-between"
      >
        <AnimatedListItem className="grid grid-cols-[1fr_1fr] gap-5">
          <div className="relative flex flex-col justify-start aspect-[270/171] p-[18px]">
            <Image
              src="/images/industries/industryFiveDesk.webp"
              alt="industry"
              width={540}
              height={342}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[165px] mr-auto font-prosto text-18reg uppercase text-left">
              {t("charity")}
            </p>
          </div>
          <div className="relative flex flex-col justify-end aspect-[270/171] p-[18px]">
            {" "}
            <Image
              src="/images/industries/industrySixDesk.webp"
              alt="industry"
              width={540}
              height={342}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[165px] mr-auto font-prosto text-18reg uppercase text-left">
              {t("it")}
            </p>
          </div>
        </AnimatedListItem>
        <AnimatedListItem className="flex gap-5">
          <div className="relative flex flex-col justify-start w-[calc(32%-10px)] aspect-[173/306] p-[18px]">
            <Image
              src="/images/industries/industrySevenDesk.webp"
              alt="industry"
              width={346}
              height={612}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[134px] ml-auto font-prosto text-18reg uppercase text-right">
              {t("advertisement")}
            </p>
          </div>
          <div className="flex flex-col w-[calc(68%-10px)] gap-5 justify-between">
            <div className="relative flex flex-col justify-end aspect-[367/148] p-[18px]">
              {" "}
              <Image
                src="/images/industries/industryEightDesk.webp"
                alt="industry"
                width={734}
                height={296}
                className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
              />
              <p className="relative w-[185px] ml-auto font-prosto text-18reg uppercase text-right">
                {t("medicine")}
              </p>
            </div>
            <div className="relative flex flex-col justify-start aspect-[367/138] p-[18px]">
              <Image
                src="/images/industries/industryNineDesk.webp"
                alt="industry"
                width={734}
                height={276}
                className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
              />
              <p className="relative w-[185px] mr-auto font-prosto text-18reg uppercase text-left">
                {t("construction")}
              </p>
            </div>
          </div>
        </AnimatedListItem>
      </AnimatedWrapper>
    </div>
  );
}
