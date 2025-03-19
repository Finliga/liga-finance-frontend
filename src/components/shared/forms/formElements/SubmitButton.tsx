import { useTranslations } from "next-intl";
import React from "react";

import WhiteButton from "../../buttons/WhiteButton";

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  text: string;
  variant?: "white" | "black";
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  text,
  variant = "white",
}: SubmitButtonProps) {
  const t = useTranslations("buttons");

  return (
    <WhiteButton
      type="submit"
      disabled={!(dirty && isValid) || isLoading}
      isLoading={isLoading}
      className="w-full"
      variant={variant}
    >
      {isLoading ? t("sending") : text}
    </WhiteButton>
  );
}
