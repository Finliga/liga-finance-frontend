import { Dispatch, SetStateAction } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SecondaryButton from "../buttons/SecondaryButton";

interface FreeConsultationProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function FreeConsultation({
  setIsHeaderMenuOpened,
}: FreeConsultationProps) {
  const t = useTranslations("");
  return (
    <div className="max-w-[318px] mb-14 mx-auto">
      <h2 className="mb-4 xl:mb-5 font-prosto text-18reg xl:text-24reg uppercase text-center">
        {t("header.freeConsultation.title")}
      </h2>
      <p className="mb-8 xl:mb-[38px] text-center">
        {t("header.freeConsultation.description")}
      </p>
      <Link
        href="/#consultation"
        className="block w-fit mx-auto"
        onClick={() => setIsHeaderMenuOpened(false)}
      >
        <SecondaryButton className="w-[240px]">
          {t("buttons.leaveContacts")}
        </SecondaryButton>
      </Link>
    </div>
  );
}
