import { Link } from "@/i18n/navigation";

interface MenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };

  className?: string;
}

export default function MenuLink({
  menuItem,

  className = "",
}: MenuLinkProps) {
  const { title, path } = menuItem;

  return (
    <li className={`text-10reg lg:text-12reg ${className}`}>
      <Link
        href={`/${path}`}
        className={`transition duration-300 ease-in-out active:text-blue focus-visible:text-blue
         laptop:hover:text-blue`}
      >
        {title}
      </Link>
    </li>
  );
}
