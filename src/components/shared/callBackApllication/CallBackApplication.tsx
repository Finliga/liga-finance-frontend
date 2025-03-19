"use client";

import { useState } from "react";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "../pop-ups/NotificationPopUp";
import AnimatedWrapper from "../animatedWrapper/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface CallBackApplicationProps {
  text: string;
  title: string;
  description: string;
}

export default function CallBackApplication({
  text,
  title,
  description,
}: CallBackApplicationProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <AnimatedWrapper animation={fadeInAnimation({ y: 100, delay: 0.8 })}>
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          text={text}
        />
      </AnimatedWrapper>

      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        title={title}
        description={description}
      />
    </>
  );
}
