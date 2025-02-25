import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatNav from "./components/FloatNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ehis.dev | Portfolio",
  description:
    "Software Engineer | Frontend Developer | Landing Page Expert | Browse projects and insights from Ehis's tech journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased relative`}>
        <FloatNav />
        {children}
        {/* <Script
          src="../node_modules/flyonui/flyonui.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
