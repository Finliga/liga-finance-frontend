"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import RangeInput from "./RangeInput";
import RadioButtonGroup from "./RadioButtonGroup";
import { options } from "./calculationOptions";
import AnimatedWrapper from "@/components/shared/animatedWrapper/AnimatedWrapper";
import { motion } from "framer-motion";
import { listVariants, fadeInAnimation } from "@/helpers/animation";

export default function CostsCalculator() {
  const t = useTranslations("homePage.calculator");
  const [employees, setEmployees] = useState(30);
  const [operations, setOperations] = useState(15);
  const [ownershipForm, setOwnershipForm] = useState("tov");
  const [estimatedCost, setEstimatedCost] = useState(0);

  const rangeInputData = [
    {
      label: t("employees"),
      maxValue: 150,
    },
    {
      label: t("operations"),
      maxValue: 70,
    },
  ];

  useEffect(() => {
    const currentOption = options.find(
      (option) => option.value === ownershipForm
    );
    if (currentOption) {
      setEstimatedCost(currentOption.formula(employees, operations));
    }
  }, [employees, operations, ownershipForm]);

  return (
    <>
      <AnimatedWrapper
        as={motion.ul}
        viewport={{ once: true, amount: 0.4 }}
        animation={listVariants({ staggerChildren: 0.35, delayChildren: 0.3 })}
        className="flex flex-col sm:flex-row gap-4"
      >
        {rangeInputData.map(({ label, maxValue }, idx) => (
          <RangeInput
            key={idx}
            label={label}
            maxValue={maxValue}
            value={idx === 0 ? employees : operations}
            handleChange={(newValue: number | number[]) => {
              const value = Array.isArray(newValue) ? newValue[0] : newValue;
              if (idx === 0) setEmployees(value);
              else setOperations(value);
            }}
          />
        ))}
        <RadioButtonGroup
          handleChange={setOwnershipForm}
          selectedValue={ownershipForm}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 1.6 })}
        className="mt-4 px-[14px] xl:px-4 py-[17px] xl:py-[21px] rounded-[6px] bg-black text-16reg leading-none text-center"
      >
        {t("estimatedCost")}
        {estimatedCost}
        {t("hrnPerMonth")}
      </AnimatedWrapper>
    </>
  );
}
