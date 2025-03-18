import { Montserrat, Prosto_One } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetadata";
import "./globals.css";
import Providers from "./providers";
import type { Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const prosto = Prosto_One({
  weight: ["400"],
  variable: "--font-prosto",
  subsets: ["latin", "cyrillic"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/",
  });
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </head>
      <body
        className={`${montserrat.variable} ${prosto.variable} relative z-[1] flex min-h-screen flex-col antialiased text-12light lg:text-16light`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <main className="flex-1"> {children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
