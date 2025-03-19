"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslations } from "next-intl";
import Modal from "../modal/Modal";
import CallBackForm from "../forms/CallBackForm";
import NotificationPopUp from "./NotificationPopUp";

interface CallBackPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackPop({
  isPopUpShown,
  setIsPopUpShown,
}: CallBackPopUpProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const t = useTranslations();

  return (
    <>
      <Modal isPopUpShown={isPopUpShown} setIsPopUpShown={setIsPopUpShown}>
        <h2 className="mb-4 text-18reg lg:text-24reg font-prosto uppercase text-center text-black">
          {t("popUps.callback.title")}
        </h2>
        <p className="mb-6 text-black text-center text-[12px] lg:text-[14px]">
          {t("popUps.callback.description")}
        </p>
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          setIsPopUpShown={setIsPopUpShown}
          text={t("buttons.leaveApplication")}
          variant="black"
        />
      </Modal>
      <NotificationPopUp
        isNotificationShown={isNotificationShown}
        isError={isError}
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
        title={t("popUps.notifications.heroSuccessful.title")}
      />
    </>
  );
}
