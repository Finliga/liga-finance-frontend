"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import CallBackPop from "@/components/shared/pop-ups/CallBackPop";
import MainButton from "@/components/shared/buttons/MainButton";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function FreeConsultationApplication() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const t = useTranslations();

  return (
    <>
      <AnimatedWrapper
        viewport={{ once: true, amount: 0.1 }}
        animation={fadeInAnimation({ y: 50, delay: 0.4 })}
      >
        <MainButton
          onClick={() => setIsPopUpShown(true)}
          className="w-full max-w-[310px] tab:max-w-[276px] mx-auto tab:mx-0"
        >
          {t("buttons.freeConsultation")}
        </MainButton>
      </AnimatedWrapper>

      <CallBackPop
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
