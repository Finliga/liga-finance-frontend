import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function GetConsultationImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="block absolute -z-10 lg:-z-30 top-[-80px] left-[-70px] lg:left-auto lg:top-auto lg:right-[-177px] lg:bottom-[-548px] size-[400px] 
      lg:size-[801px] bg-main blur-[180px] supports-[backdrop-filter]:blur-[180px] will-change-transform"
      ></AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
        className="absolute -z-20 top-[-190px] right-[-60px] tab:right-[-100px] tab:top-auto tab:bottom-[-188px] lg:bottom-[-36px] lg:right-[257px] 
        w-[240px] tab:w-[363px] xl:w-[463px] h-auto"
      >
        <Image
          src="/images/getConsultation/logo.webp"
          alt="logo"
          width={927}
          height={927}
          className="w-[240px] tab:w-[363px] xl:w-[463px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8 })}
        className="hidden lg:block absolute -z-10 bottom-[-120px] tab:bottom-[-108px] right-[-25px] xl:right-[41px] w-[516px] h-auto"
      >
        <Image
          src="/images/getConsultation/woman.webp"
          alt="woman"
          width={1030}
          height={1228}
          className="w-[516px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
