import Image from "next/image";
import Logo from "../logo/Logo";
import FooterInfo from "./FooterInfo";
import FooterBottom from "./FooterBottom";
import NavMenu from "./NavMenu";

export default function Footer() {
  return (
    <footer className="relative w-dvw bg-main pt-[52px] pb-10 overflow-hidden">
      <Image
        src="/images/hero/logo.webp"
        alt="logo"
        width={538}
        height={586}
        className="tab:hidden absolute bottom-[40px] -right-7 w-[159px] h-auto"
      />
      <div className="container max-w-[1280px]">
        <Logo
          className="w-6 tab:w-[45px] h-auto"
          textStyles="text-12reg tab:text-24reg"
        />
        <div className="xl:flex items-center justify-between mt-6 tab:mt-10">
          <NavMenu />
          <FooterInfo />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
