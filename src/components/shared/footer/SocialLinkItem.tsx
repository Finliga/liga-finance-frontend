interface SocialLinkItemProps {
  social: { name: string; icon: React.JSX.Element; url: string };
  className?: string;
}

export default function SocialLinkItem({
  social,
  className = "",
}: SocialLinkItemProps) {
  const { name, icon, url } = social;
  return (
    <li className={className}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={name}
        className="group outline-none text-blue focus-visible:brightness-125 laptop:hover:brightness-125 transition duration-300 ease-in-out"
      >
        {icon}
      </a>
    </li>
  );
}
