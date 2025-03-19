import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  title: string;
  description?: string;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
  isError,
  setIsError,
  title,
  description,
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
            {`${isError ? t("unsuccessful.title") : title}`}
          </h2>

          {description ? (
            <p className="text-14reg tab:text-18reg text-center">
              {`${isError ? t("unsuccessful.description") : description}`}
            </p>
          ) : null}
        </div>
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
