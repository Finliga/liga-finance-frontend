"use client";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import MenuLink from "./MenuLink";

interface NavMenuProps {
  setIsHeaderMenuOpened?: Dispatch<SetStateAction<boolean>> | undefined;
}

export default function NavMenu({ setIsHeaderMenuOpened }: NavMenuProps) {
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
    <nav className={`relative flex items-center w-full max-w-[318px]`}>
      <ul className={`flex flex-col gap-5`}>
        {menuList.map((menuItem, idx) => (
          <MenuLink
            key={idx}
            menuItem={menuItem}
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
          />
        ))}
      </ul>
    </nav>
  );
}
