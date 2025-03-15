import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function GetCalculationImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="absolute -z-[5] lg:-z-30 top-[-120px] lg:top-auto left-10 lg:left-auto lg:right-[-119px] lg:bottom-[-320px] size-[400px] lg:size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"
      ></AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="absolute -z-10 top-[-190px] tab:top-auto left-[-60px] tab:left-auto tab:bottom-[-191px] tab:right-[-111px] w-[230px] tab:w-[428px] lg:w-[558px] h-auto"
      >
        <Image
          src="/images/getCalculation/logo.webp"
          alt="logo"
          width={927}
          height={927}
          className="w-[230px] tab:w-[428px] lg:w-[558px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8 })}
        className="hidden lg:block absolute -z-10 bottom-[-120px] tab:bottom-[-98px] right-[145px] w-[452px] h-auto"
      >
        <Image
          src="/images/getCalculation/woman.webp"
          alt="woman"
          width={904}
          height={1286}
          className="w-[452px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
