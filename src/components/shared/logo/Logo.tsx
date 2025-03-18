import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface LogoProps {
  className: string;
  textStyles: string;
}

export default function Logo({ className, textStyles }: LogoProps) {
  const t = useTranslations();
  return (
    <Link href="/" className="flex gap-2 xl:gap-[10px] items-center">
      <Image
        src="/images/icons/logo.svg"
        alt="logo"
        width="24"
        height="26"
        className={className}
      />
      <p className={`font-prosto uppercase ${textStyles}`}>
        {t("companyName")}
      </p>
    </Link>
  );
}
