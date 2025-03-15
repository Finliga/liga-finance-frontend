import { useTranslations } from "next-intl";
import MenuLink from "./MenuLink";

export default function NavMenu() {
  const t = useTranslations();

  const menuList = [
    { title: t("header.menu.about"), path: "#about" },
    { title: t("header.menu.services"), path: "#services" },
    { title: t("header.menu.industries"), path: "#industries" },
    { title: t("header.menu.calculator"), path: "#calculator" },
    { title: t("header.menu.comparison"), path: "#comparison" },
    { title: t("header.menu.steps"), path: "#steps" },
    { title: t("header.menu.team"), path: "#team" },
    { title: t("header.menu.clients"), path: "#clients" },
  ];

  return (
    <nav className={`relative hidden tab:flex items-center`}>
      <ul className={`flex flex-wrap justify-between lg:gap-3 w-full`}>
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
