import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

interface StatisticsItemProps {
  statisticsItem: { count: string; description: string };
}

export default function StatisticsItem({
  statisticsItem,
}: StatisticsItemProps) {
  const { count, description } = statisticsItem;

  return (
    <AnimatedListItem className="flex flex-col items-center justify-center w-[47.4%] tab:w-[23.68%] px-3 lg:px-[25px] xl:px-10 py-10 lg:py-[66px] text-black text-center bg-statisticsGradient rounded-[8px]">
      <p className="mb-[18px] lg:mb-6 font-prosto text-32reg lg:text-52reg leading-[100%]">
        {count}
      </p>
      <p className="flex items-center min-h-[27px] tab:min-h-[18px] lg:min-h-12 text-9med lg:text-16med uppercase leading-[100%]">
        {description}
      </p>
    </AnimatedListItem>
  );
}
