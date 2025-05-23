import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import MaskedInput from "react-text-mask";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  as?: string | typeof MaskedInput;
  wrapperClassName?: string;
  fieldClassName?: string;
  mask?: string | RegExp | (string | RegExp)[];
  autocomplete?: string;
  inputType?: string;
  variant?: "black" | "white";
}

const labelStyles = "relative flex flex-col w-full";
const fieldStyles =
  "relative w-full h-full px-6 py-[13px]  border-[1.5px] rounded-full bg-transparent outline-none text-14light transition duration-300 ease-out";
const fieldWrapperStyles = "relative";
const errorStyles = "absolute bottom-[-17px] right-0 text-10med text-darkRed";

export default function CustomizedInput({
  errors,
  touched,
  fieldName,
  placeholder = "",
  as,
  wrapperClassName = "",
  fieldClassName = "",
  mask = "",
  autocomplete = "on",
  inputType = "text",
  variant = "white",
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <div className={`${fieldWrapperStyles} ${wrapperClassName}`}>
        <Field
          as={as}
          mask={mask}
          name={fieldName}
          type={inputType}
          autoComplete={autocomplete}
          placeholder={placeholder}
          className={`${fieldStyles} ${fieldClassName} ${
            variant === "white"
              ? "text-white placeholder-white"
              : "text-black placeholder-black"
          } ${
            errors[fieldName] && touched[fieldName]
              ? "border-darkRed"
              : `${
                  variant === "white" ? "border-white" : "border-black"
                } focus-within:border-blue`
          }`}
        ></Field>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
