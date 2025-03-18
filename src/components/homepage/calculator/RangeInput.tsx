"use client";
import { Slider } from "@heroui/react";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

interface RangeInputProps {
  label: string;
  value: number;
  maxValue: number;
  handleChange: (value: number | number[]) => void;
}

export default function RangeInput({
  label,
  value,
  maxValue,
  handleChange,
}: RangeInputProps) {
  return (
    <AnimatedListItem className="w-full bg-main py-7 xl:py-10 px-5 xl:px-[23px] rounded-[6px] min-h-[150px] xl:min-h-[190px]">
      <Slider
        classNames={{
          track: "bg-white h-[1.5px] xl:h-[2px] mt-auto border-x-[0px]",
          filler: "bg-transparent h-[2px]",
          label:
            "sm:min-h-12 tab:min-h-8 xl:min-h-auto mb-[56px] xl:mb-[47px] text-16reg xl:text-18reg leading-none",
          value: "hidden",
          trackWrapper: "mb-[21px] xl:mb-[32px]",
          startContent:
            "absolute bottom-[-32px] xl:bottom-[-45px] text-14reg xl:text-20reg font-prosto",
          endContent:
            "absolute bottom-[-32px] xl:bottom-[-45px] right-0 text-14reg xl:text-20reg font-prosto",
        }}
        label={label}
        size="sm"
        renderThumb={(props) => (
          <div
            {...props}
            className="relative group p-[1px] top-1/2 bg-white border-small rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            {/* Значення над thumb */}
            <div
              className="absolute -top-9 xl:-top-10 left-1/2 -translate-x-1/2 bg-white text-black font-prosto text-12reg xl:text-14reg leading-none 
            px-2 py-[7.5px] min-w-[35px] xl:min-w-[42px] rounded-[2px] flex justify-center items-center"
            >
              {value}
            </div>
            {/* Стилізований thumb */}
            <div className="transition-transform bg-white rounded-full size-4 xl:size-5 group-data-[dragging=true]:scale-80" />
          </div>
        )}
        value={value}
        onChange={handleChange}
        minValue={1}
        maxValue={maxValue}
        step={1}
        aria-label="quantity"
        startContent="1"
        endContent={`${maxValue}+`}
      />
    </AnimatedListItem>
  );
}
