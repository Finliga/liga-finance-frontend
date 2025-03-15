import AnimatedListItem from "../../shared/animatedWrapper/AnimatedListItem";
import ServiceItem from "./ServiceItem";

interface ServicesListProps {
  servicesList: { title: string; list: string[] };
}

export default function ServicesList({ servicesList }: ServicesListProps) {
  return (
    <AnimatedListItem className="flex flex-col items-center w-[90%] max-w-[340px] tabxl:max-w-[380px] xl:max-w-[430px] h-[321px] xl:h-[492px] p-7 xl:p-[44px] mx-auto tabxl:mx-0 bg-white rounded-[8px]">
      <h2 className="max-w-[204px] xl:max-w-[267px] mb-4 xl:mb-6 font-prosto text-20reg xl:text-28reg leading-[122%] text-center uppercase">
        {servicesList.title}
      </h2>
      <ul className="flex flex-col gap-3 xl:gap-6 max-w-[186px] xl:max-w-[249px] text-14reg xl:text-20reg leading-[100%]">
        {servicesList.list.map((service, idx) => (
          <ServiceItem key={idx} service={service} />
        ))}
      </ul>
    </AnimatedListItem>
  );
}
