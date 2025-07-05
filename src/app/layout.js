import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prem Narayankar Portfolio App",
  description:
    "Prem Narayankar – React Developer with 3+ years of experience building scalable web apps using React, Next.js, and modern JavaScript frameworks. Explore my projects, resume, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
