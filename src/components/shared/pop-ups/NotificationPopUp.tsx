import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
  isError,
  setIsError,
}: NotificationPopUpProps) {
  const t = useTranslations("popUps.notifications");

  const closeNotification = () => {
    setIsNotificationShown(false);
    setIsError(false);
  };

  return (
    <>
      <Modal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      >
        <div className="flex flex-col items-center gap-y-6 text-black">
          <h2
            className={`relative font-prosto text-center text-20reg tab:text-24reg tab:uppercase`}
          >
            {t(`${isError ? "unsuccessful" : "successful"}.title`)}
          </h2>

          <p className="text-14reg tab:text-18reg text-center">
            {t(`${isError ? "unsuccessful" : "successful"}.description`)}
          </p>
        </div>
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
