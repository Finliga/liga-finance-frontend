"use client";

import { useState } from "react";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "../pop-ups/NotificationPopUp";
import AnimatedWrapper from "../animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function CallBackApplication() {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <AnimatedWrapper animation={fadeInAnimation({ y: 100, delay: 0.8 })}>
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
        />
      </AnimatedWrapper>

      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </>
  );
}
