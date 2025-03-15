import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

export default function StepsListMob() {
  const t = useTranslations("homePage.steps");
  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.4, delayChildren: 0.4 })}
      className="sm:hidden"
    >
      <AnimatedListItem className="relative -z-20 flex items-center gap-x-[103px] container max-w-[1280px] bg-main">
        <span className="text-100reg xl:text-276reg">1</span>
        <div className="w-[170px] mx-auto">
          <div className="flex items-center gap-x-3 xl:gap-x-[18px] mb-3">
            <span className="size-[14px] xl:size-6 rounded-full bg-white"></span>{" "}
            <h3 className="font-prosto text-14reg uppercase">
              {t("firstTitle")}
            </h3>
          </div>
          <p className="max-w-[116px] font-prosto text-12reg uppercase">
            {t("firstDescription")}
          </p>
        </div>
        <Image
          src="/images/steps/circle.svg"
          alt="circle"
          width={135}
          height={131}
          className="absolute top-0 left-0 -z-10 w-auto h-full"
        />
      </AnimatedListItem>
      <AnimatedListItem className="relative flex items-center gap-x-[83px] container max-w-[1280px] text-black">
        <span className="text-100reg xl:text-276reg">2</span>
        <div className="w-[170px] mx-auto">
          <div className="flex items-center gap-x-3 xl:gap-x-[18px] mb-3">
            <span className="size-[14px] xl:size-6 rounded-full bg-black"></span>{" "}
            <h3 className="font-prosto text-14reg uppercase">
              {t("secondTitle")}
            </h3>
          </div>
          <p className="max-w-[116px] font-prosto text-12reg uppercase">
            {t("secondDescription")}
          </p>
        </div>
        <Image
          src="/images/steps/secondBgMob.webp"
          alt="background"
          width={720}
          height={260}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
      </AnimatedListItem>
      <AnimatedListItem className="flex items-center gap-x-[83px] container max-w-[1280px] bg-blue">
        <span className="text-100reg xl:text-276reg">3</span>
        <div className="w-[170px] mx-auto">
          <div className="flex items-center gap-x-3 xl:gap-x-[18px] mb-3">
            <span className="size-[14px] xl:size-6 rounded-full bg-white"></span>{" "}
            <h3 className="font-prosto text-14reg uppercase">
              {t("thirdTitle")}
            </h3>
          </div>
          <p className="max-w-[136px] font-prosto text-12reg uppercase">
            {t("thirdDescription")}
          </p>
        </div>
      </AnimatedListItem>
      <AnimatedListItem className="relative flex items-center gap-x-[73px] container max-w-[1280px]">
        <span className="text-100reg xl:text-276reg">4</span>
        <div className="w-[170px] mx-auto">
          <div className="flex items-center gap-x-3 xl:gap-x-[18px] mb-3">
            <span className="size-[14px] xl:size-6 rounded-full bg-white"></span>
            <h3 className="font-prosto text-14reg uppercase">
              {t("fourthTitle")}
            </h3>
          </div>
          <p className="max-w-[116px] font-prosto text-12reg uppercase">
            {t("fourthDescription")}
          </p>
        </div>
        <Image
          src="/images/steps/fourthBgMob.webp"
          alt="background"
          width={720}
          height={260}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
      </AnimatedListItem>
    </AnimatedWrapper>
  );
}
