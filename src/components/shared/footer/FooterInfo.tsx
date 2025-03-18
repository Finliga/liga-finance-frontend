import {
  PHONE,
  PHONE_SECOND,
  EMAIL,
  ADDRESS_LINK_FIRST,
  ADDRESS_LINK_SECOND,
} from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import { useTranslations } from "next-intl";

export default function FooterInfo() {
  const t = useTranslations("footer");
  return (
    <ul className="flex flex-col tab:flex-row tab:justify-between xl:gap-x-4 tab:mt-6 text-10light tab:text-12light leading-[130%]">
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
          , &nbsp;
          <a
            href={`tel:+${PHONE_SECOND.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="phone number"
            className=" lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          >
            {PHONE_SECOND.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
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
          href={ADDRESS_LINK_FIRST}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p className="mb-2">{t("address.first")}</p>
        </a>
        <a
          href={ADDRESS_LINK_SECOND}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="lg:hover:text-blue focus-visible:text-blue transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p>{t("address.second")}</p>
        </a>
      </li>
    </ul>
  );
}
