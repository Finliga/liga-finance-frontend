import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function HeroImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 100, delay: 0.8 })}
        className="absolute -z-30 top-[160px] tab:top-auto left-[calc(50%-160px)] tab:left-auto tab:bottom-[280px] tab:right-[230px] 
          xl:bottom-[-16px] xl:right-[63px] w-[135px] tab:w-[205px] xl:w-[269px] h-auto"
      >
        <Image
          src="/images/hero/logo.webp"
          alt="logo"
          priority
          width={538}
          height={586}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="absolute -z-20 right-[143px] bottom-[-401px] size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] 
        will-change-transform"
      ></AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="absolute -z-10 top-[54px] right-[calc(50%-238px)] tab:top-auto tab:bottom-[-80px] xl:bottom-[-70px] tab:right-[-160px] xl:right-[144px] 
          w-[360px] tab:w-[653px] xl:w-[733px] h-auto"
      >
        <Image
          src="/images/hero/woman.webp"
          alt="woman"
          priority
          width={1466}
          height={1384}
        />
      </AnimatedWrapper>
    </>
  );
}
