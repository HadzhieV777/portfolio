import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionCtxProvider from "@/context/active-section-ctx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radoslav | Personal Portfolio",
  description:
    "Radoslav is a seasoned Full-Stack Software Developer. With a passion for crafting seamless, innovative solutions, bringing a unique blend of technical prowess and marketing acumen to the digital landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} 
      bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#e4e2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#627c94]"></div>
        <div className="bg-[#d7fafb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#639194]"></div>
        <ActiveSectionCtxProvider>
          <Header />
          {children}
        </ActiveSectionCtxProvider>
      </body>
    </html>
  );
}
