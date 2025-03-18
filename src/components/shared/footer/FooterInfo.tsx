import { PHONE, EMAIL, ADDRESS_LINK } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import { useTranslations } from "next-intl";

export default function FooterInfo() {
  const t = useTranslations("footer");
  return (
    <ul className="flex flex-col tab:flex-row tab:justify-between xl:gap-x-8 tab:mt-6 xl:mt-0 text-10light tab:text-12light lg:text-16light leading-[130%]">
      <li>
        <div className="mb-2">
          {t("phone")}
          <a
            href={`tel:+${PHONE.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="phone number"
            className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          >
            {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
          </a>
        </div>
        <div className="mb-2 tab:mb-0">
          {t("email")}
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
            aria-label="email"
          >
            {EMAIL}
          </a>
        </div>
      </li>
      <li>
        <a
          href={ADDRESS_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p className="mb-2">{t("address.first")}</p>
          <p>{t("address.second")}</p>
        </a>
      </li>
    </ul>
  );
}
