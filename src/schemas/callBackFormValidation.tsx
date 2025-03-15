import { useTranslations } from "next-intl";
import * as yup from "yup";

import { phoneRegex, nameRegex } from "@/regex/regex";

export const CallBackValidation = () => {
  const t = useTranslations("forms.errors");

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols")),
    phone: yup
      .string()
      .matches(phoneRegex, t("wrongPhone"))
      .test(
        "sixth-char-zero",
        t("startsWithZero"),
        (value) => !!value && value.length >= 6 && value[5] === "0"
      )
      .required(t("required")),
  });

  return callBackFormValidationSchema;
};
