import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

interface BenefitItemProps {
  benefitItem: string;
}

export default function BenefitItem({ benefitItem }: BenefitItemProps) {
  const renderTextWithBreaks = (text: string) =>
    text.split("<br/>").map((part, index) => (
      <span key={index}>
        {part}
        {index !== text.split("<br/>").length - 1 && (
          <span className="inline tab:hidden">
            {" "}
            <br />{" "}
          </span>
        )}
      </span>
    ));

  return (
    <AnimatedListItem className="flex items-center gap-x-3 xl:gap-x-[18px]">
      <span className="size-[14px] xl:size-6 rounded-full bg-black"></span>
      <p className="w-[90%] text-12reg xl:text-20reg leading-[120%] text-black">
        {renderTextWithBreaks(benefitItem)}
      </p>
    </AnimatedListItem>
  );
}
