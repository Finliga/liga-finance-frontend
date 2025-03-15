import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import IconButton from "../buttons/IconButton";

interface CloseButtonProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function CloseButton({
  setIsHeaderMenuOpened,
}: CloseButtonProps) {
  return (
    <IconButton
      handleClick={() => setIsHeaderMenuOpened(false)}
      className="absolute z-[60] top-5 right-4 xl:top-6 xl:right-6 size-6 xl:size-10"
    >
      <Image
        src="/images/icons/cross.svg"
        alt="burger menu icon"
        width={24}
        height={24}
        className="w-full h-full"
      />
    </IconButton>
  );
}
