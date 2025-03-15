import Image from "next/image";
import { useTranslations } from "next-intl";
import RadioButtonInput from "./RadioButtonInput";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

interface RadioButtonGroupProps {
  handleChange: (value: string) => void;
  selectedValue: string;
}

export default function RadioButtonGroup({
  handleChange,
  selectedValue,
}: RadioButtonGroupProps) {
  const t = useTranslations("homePage.calculator.ownership");

  return (
    <AnimatedListItem className="relative w-full bg-main py-7 xl:py-10 px-5 xl:px-[23px] rounded-[6px] min-h-[150px] xl:min-h-[190px] flex flex-col justify-center text-white">
      <Image
        src="/images/calculator/logos.svg"
        alt="logos"
        width="151"
        height="146"
        className="absolute top-0 right-0 h-full w-auto"
      />
      <p className="mb-[15px] text-16reg xl:text-18reg leading-none">
        {t("title")}
      </p>
      <div
        role="group"
        aria-labelledby="radio-group"
        className="flex flex-col gap-2"
      >
        <RadioButtonInput
          fieldName="ownership"
          label={t("tov")}
          value="tov"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButtonInput
          fieldName="ownership"
          label={t("fop")}
          value="fop"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButtonInput
          fieldName="ownership"
          label={t("other")}
          value="other"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
      </div>
    </AnimatedListItem>
  );
}
