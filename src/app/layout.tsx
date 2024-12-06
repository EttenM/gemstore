import type { GetServerSideProps, Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.scss";
import SideBar from "../shared/components/ui/side-bar/side-bar";
import Header from "../shared/components/ui/header/Header";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";

const arimo = Arimo({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Arimo",
  style: ["normal"],
});
({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gemstore | Главная страница",
  description: "Gemstore - Магазин стильной одежды!",
};

export default function RootLayout({
  children,
}: // props
Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("themeSwitch");

  // console.log(theme?.value);
  return (
    <html lang="en" data-theme={theme?.value || "dark"}>
      <body
        className={`${arimo.variable}  antialiased h-full min-h-screen flex flex-col`}
      >
        <Header />
        <SideBar />
        {children}

        <Toaster
          richColors
          closeButton
          theme={theme?.value === "light" ? "light" : "dark"}
          position="bottom-right"
          duration={3000}
        />
      </body>
    </html>
  );
}
