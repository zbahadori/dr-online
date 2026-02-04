import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// بارگذاری فونت از فایل لوکال
const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Regular.ttf",
  display: "swap",
  variable: "--font-vazir", // نام متغیر برای استفاده در CSS
  weight: "100 900",
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
      <body className={`${vazirmatn.variable}`}>{children}</body>
    </html>
  );
}
