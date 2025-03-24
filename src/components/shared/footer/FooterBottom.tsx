import { useTranslations } from "next-intl";
import { CYANIDIUM_URL, CYANIDIUM_NAME } from "@/constants/constants";

export default function FooterBottom() {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col tab:flex-row tab:justify-between mt-6 tab:mt-8">
      <p className="mb-2 text-8reg tab:text-12reg lg:text-16reg uppercase leading-[130%]">
        {t("rights")}
      </p>
      <div className="flex gap-x-[2px] tab:gap-x-[4px] text-8reg tab:text-12reg lg:text-16reg leading-[130%]">
        <p>{t("develop")}</p>
        <a
          href={CYANIDIUM_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="cyanidium.dev link"
          className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
        >
          {CYANIDIUM_NAME}
        </a>
      </div>
    </div>
  );
}
