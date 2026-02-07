import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "./globals.css";

// بارگذاری فونت از فایل لوکال
// const vazirmatn = localFont({
//   src: "./fonts/Vazirmatn-Regular.ttf",
//   display: "swap",
//   variable: "--font-vazir", // نام متغیر برای استفاده در CSS
//   weight: "100 900",
// });

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر آنلاین",
  description: "پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        // className={`${vazirmatn.variable}`}
        className={vazirmatn.className}
      >
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
