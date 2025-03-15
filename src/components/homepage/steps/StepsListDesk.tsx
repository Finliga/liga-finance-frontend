import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";
import { motion } from "framer-motion";
import { listVariants } from "@/helpers/animation";

export default function StepsListDesk() {
  const t = useTranslations("homePage.steps");
  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.4, delayChildren: 0.4 })}
      className="hidden sm:flex"
    >
      <AnimatedListItem className="relative -z-20 flex flex-col items-center w-1/4 xl:w-[calc(50%-320px)] bg-main ">
        <div className="relative flex flex-col justify-between xl:w-[320px] xl:ml-auto px-[25px] py-9 h-full">
          <div className="flex items-center justify-center gap-x-[19px] w-full min-h-[28px] xl:min-h-fit mb-[88px]">
            <h3 className="w-[70%] lg:w-auto font-prosto text-14reg xl:text-20reg uppercase leading-[100%]">
              {t("firstTitle")}
            </h3>
            <span className="size-[17px] rounded-full bg-white"></span>{" "}
          </div>
          <p className="mb-[106px] text-100reg xl:text-276reg leading-none text-center">
            1
          </p>
          <p className="max-w-[154px] mr-auto mt-auto font-prosto text-12reg tab:text-16reg uppercase leading-[130%]">
            {t("firstDescription")}
          </p>
        </div>
        <div className="absolute bottom-0 right-[-41px] laptop:right-[51px] -z-10 w-[379px]">
          <Image
            src="/images/steps/circleDesk.svg"
            alt="circle"
            width={380}
            height={154}
            className="w-full h-auto object-cover"
          />
        </div>
      </AnimatedListItem>
      <AnimatedListItem className="relative -z-20 flex flex-col items-center w-1/4 xl:w-[320px] px-[25px] py-9 text-black">
        <div className="flex items-center justify-center gap-x-[19px] w-full min-h-[28px] xl:min-h-fit mb-[88px]">
          <h3 className="w-[70%] lg:w-auto font-prosto text-14reg xl:text-20reg uppercase leading-[100%]">
            {t("secondTitle")}
          </h3>
          <span className="size-[17px] rounded-full bg-black"></span>
        </div>
        <p className="mb-[106px] text-100reg xl:text-276reg leading-none text-main">
          2
        </p>

        <p className="max-w-[154px] mr-auto mt-auto font-prosto text-12reg tab:text-16reg xl:text-20reg uppercase leading-[130%]">
          {t("secondDescription")}
        </p>

        <Image
          src="/images/steps/secondBgDesk.webp"
          alt="background"
          width={640}
          height={248}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
      </AnimatedListItem>
      <AnimatedListItem className="relative -z-20 flex flex-col items-center w-1/4 xl:w-[320px] px-[25px] py-9 bg-blue">
        <div className="flex items-center justify-center gap-x-[19px] w-full min-h-[28px] xl:min-h-fit mb-[88px]">
          <h3 className="w-[70%] lg:w-auto font-prosto text-14reg xl:text-20reg uppercase leading-[100%]">
            {t("thirdTitle")}
          </h3>
          <span className="size-[17px] rounded-full bg-white"></span>
        </div>
        <p className="mb-[106px] text-100reg xl:text-276reg leading-none">3</p>

        <p className="max-w-[230px] mr-auto mt-auto font-prosto text-12reg tab:text-16reg xl:text-20reg uppercase leading-[130%]">
          {t("thirdDescription")}
        </p>
      </AnimatedListItem>
      <AnimatedListItem className="relative -z-20 flex flex-col items-center w-1/4 xl:w-[calc(50%-320px)]">
        <div className="flex flex-col justify-between xl:w-[320px] xl:mr-auto px-[25px] py-9 h-full">
          <div className="flex items-center justify-center gap-x-[19px] w-full min-h-[28px] xl:min-h-fit mb-[88px]">
            <h3 className="w-[65%] lg:w-auto font-prosto text-14reg xl:text-20reg uppercase leading-[100%]">
              {t("fourthTitle")}
            </h3>
            <span className="size-[17px] rounded-full bg-white"></span>
          </div>
          <p className="mb-[106px] text-100reg xl:text-276reg leading-none text-center">
            4
          </p>
          <p className="max-w-[230px] mr-auto mt-auto font-prosto text-12reg tab:text-16reg xl:text-20reg uppercase leading-[130%]">
            {t("fourthDescription")}
          </p>
        </div>
        <Image
          src="/images/steps/fourthBgDesk.webp"
          alt="background"
          width={640}
          height={248}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
      </AnimatedListItem>
    </AnimatedWrapper>
  );
}
