import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";
import { motion } from "framer-motion";

export default function Clients() {
  const t = useTranslations("homePage.clients");
  return (
    <section
      id="clients"
      className="container max-w-[1280px] py-[100px] xl:py-[180px] scroll-mt-12"
    >
      <AnimatedWrapper
        as={motion.h2}
        animation={fadeInAnimation({ y: 50 })}
        className="mb-12 font-prosto uppercase text-center text-20reg xl:text-36reg leading-[100%]"
      >
        {t("title")}
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 50, delay: 0.8 })}
        className="sm:hidden w-auto h-[435px] mx-auto"
      >
        <Image
          src="/images/clients/clientsMob.webp"
          alt="clients logos"
          width={620}
          height={871}
          className="sm:hidden w-auto h-[435px] mx-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 50, delay: 0.8 })}
        className="hidden sm:block w-full max-w-[1500px] h-auto mx-auto"
      >
        <Image
          src="/images/clients/clientsDesk.webp"
          alt="clients logos"
          width={2281}
          height={634}
          className="hidden sm:block w-full max-w-[1500px] h-auto mx-auto"
        />
      </AnimatedWrapper>
    </section>
  );
}
