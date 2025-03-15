interface ServiceItemProps {
  service: string;
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <li className="flex gap-x-3 xl:gap-x-[18px] items-center">
      <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-black"></div>
      <p className="max-w-[70%]">{service}</p>
    </li>
  );
}
