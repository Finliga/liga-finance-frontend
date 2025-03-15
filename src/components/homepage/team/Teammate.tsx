import Image from "next/image";
import AnimatedListItem from "@/components/shared/animatedWrapper/AnimatedListItem";

interface TeammateProps {
  teammate: {
    name: string;
    role: string;
    photo: string;
  };
  className: string;
}

export default function Teammate({ teammate, className }: TeammateProps) {
  const { name, role, photo } = teammate;

  return (
    <AnimatedListItem className="relative flex flex-col justify-end w-[calc(50%-6px)] lg:w-[calc(25%-9px)] xl:w-[calc(25%-15px)] aspect-[149/208] h-auto max-w-[250px] lg:max-w-[375px] p-3 rounded-[6px] overflow-hidden">
      <Image
        src={`/images/team/${photo}.webp`}
        alt={photo}
        width={640}
        height={640}
        className={`absolute top-0 left-0 -z-10 w-full h-full object-cover ${className}`}
      />
      <div className="tab:flex items-center justify-between p-[7px] xl:py-4 xl:px-[14px] mt-auto rounded-[6px] bg-white">
        <div>
          <p className="mb-[6px] xl:mb-2 text-10med xl:text-14med uppercase text-black leading-none">
            {name}
          </p>
          <p className="text-8med xl:text-12med text-blue leading-none">
            {role}
          </p>
        </div>
        <div className="hidden tab:block size-[17px] rounded-full bg-blue"></div>
      </div>
    </AnimatedListItem>
  );
}
