interface CustomizedInputProps {
  fieldName: string;
  label: string;
  value: string;
  fieldClassName?: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const labelStyles =
  "relative cursor-pointer flex items-center gap-x-2 text-14reg xl:text-16reg leading-none";
const fieldStyles =
  "relative cursor-pointer appearance-none w-[14px] h-[14px] rounded-full placeholder-inputText outline-none transition duration-300 ease-out";

export default function RadioButtonInput({
  fieldName,
  label = "",
  value = "",
  selectedValue,
  fieldClassName = "",
  onChange,
}: CustomizedInputProps) {
  return (
    <label className={labelStyles}>
      <input
        name={fieldName}
        type="radio"
        value={value}
        placeholder=""
        autoComplete="on"
        checked={value === selectedValue}
        onChange={() => onChange(value)}
        className={`${fieldStyles} ${fieldClassName} border border-white checked:bg-white transition duration-300 ease-in-out mr-3`}
      ></input>
      <p>{label}</p>
    </label>
  );
}
