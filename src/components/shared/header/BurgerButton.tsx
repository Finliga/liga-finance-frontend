import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import IconButton from "../buttons/IconButton";

interface BurgerButtonProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerButton({
  setIsHeaderMenuOpened,
}: BurgerButtonProps) {
  return (
    <IconButton
      handleClick={() => setIsHeaderMenuOpened(true)}
      className="size-6 xl:size-10"
    >
      <Image
        src="/images/icons/menu.svg"
        alt="burger menu icon"
        width={40}
        height={40}
        className="w-full h-full"
      />
    </IconButton>
  );
}
