import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김소윤 | Fullstack Developer",
  description:
    "컴퓨터공학 전공, 4년차 풀스택 개발자 김소윤의 포트폴리오입니다.",
  openGraph: {
    title: "김소윤 | Fullstack Developer",
    description:
      "컴퓨터공학 전공, 4년차 풀스택 개발자 김소윤의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
