import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function IndustriesGridMob() {
  const t = useTranslations("homePage.industries");

  return (
    <div className="sm:hidden flex flex-col gap-3">
      <AnimatedWrapper
        animation={fadeInAnimation({ x: -100, delay: 0.6 })}
        className="grid grid-cols-[0.95fr_0.96fr] gap-3"
      >
        <div className="relative flex flex-col justify-end aspect-[298/571] p-3">
          <Image
            src="/images/industries/industryOneMob.webp"
            alt="industry"
            width={298}
            height={571}
            className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
          />
          <p className="relative w-[92px] ml-auto font-prosto text-12reg uppercase text-right">
            {t("trade")}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative flex flex-col justify-start aspect-[300/241] p-3">
            <Image
              src="/images/industries/industryTwoMob.webp"
              alt="industry"
              width={300}
              height={241}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[112px] ml-auto font-prosto text-12reg uppercase text-right">
              {t("agricultural")}
            </p>
          </div>
          <div className="relative flex flex-col justify-end aspect-[300/306] p-3">
            <Image
              src="/images/industries/industryThreeMob.webp"
              alt="industry"
              width={300}
              height={306}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[82px] ml-auto font-prosto text-12reg uppercase text-right">
              {t("services")}
            </p>
          </div>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 100, delay: 1.2 })}
        className="relative flex flex-col justify-start aspect-[622/265] p-3"
      >
        <Image
          src="/images/industries/industryFourMob.webp"
          alt="industry"
          width={622}
          height={265}
          className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
        />
        <p className="relative w-[82px] mr-auto font-prosto text-12reg uppercase text-right">
          {t("manufacturing")}
        </p>
      </AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: -100, delay: 1.8 })}
        className="grid grid-cols-[0.96fr_0.95fr] gap-3"
      >
        <div className="flex flex-col gap-3">
          <div className="relative flex flex-col justify-start aspect-[298/201] p-3">
            <Image
              src="/images/industries/industryFiveMob.webp"
              alt="industry"
              width={298}
              height={201}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[92px] ml-auto font-prosto text-12reg uppercase text-right">
              {t("advertisement")}
            </p>
          </div>
          <div className="relative flex flex-col justify-start aspect-[298/347] p-3">
            <Image
              src="/images/industries/industrySixMob.webp"
              alt="industry"
              width={298}
              height={347}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[109px] mr-auto font-prosto text-12reg uppercase text-left">
              {t("charity")}
            </p>
          </div>
          <div className="relative flex flex-col justify-start aspect-[298/265] p-3">
            <Image
              src="/images/industries/industrySevenMob.webp"
              alt="industry"
              width={298}
              height={265}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[121px] ml-auto font-prosto text-12reg uppercase text-right">
              {t("medicine")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative flex flex-col justify-start aspect-[298/457] p-3">
            <Image
              src="/images/industries/industryEightMob.webp"
              alt="industry"
              width={298}
              height={457}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[101px] mr-auto font-prosto text-12reg uppercase text-left">
              {t("construction")}
            </p>
          </div>
          <div className="relative flex flex-col justify-end aspect-[298/379] p-3">
            <Image
              src="/images/industries/industryNineMob.webp"
              alt="industry"
              width={298}
              height={379}
              className="absolute top-0 left-0 w-full h-full rounded-[8px] object-cover"
            />
            <p className="relative w-[112px] mr-auto font-prosto text-12reg uppercase text-left">
              {t("it")}
            </p>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
}
