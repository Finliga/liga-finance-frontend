import { Dispatch, SetStateAction } from "react";
import { Link } from "@/i18n/navigation";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function MenuLink({
  menuItem,
  setIsHeaderMenuOpened,
  className = "",
}: MenuLinkProps) {
  const { title, path } = menuItem;

  return (
    <li className={`${className}`}>
      <Link
        href={`/${path}`}
        onClick={() => {
          if (setIsHeaderMenuOpened) setIsHeaderMenuOpened(false);
        }}
        className={`transition duration-300 ease-in-out active:text-blue focus-visible:text-blue
         laptop:hover:text-blue`}
      >
        {title}
      </Link>
    </li>
  );
}
