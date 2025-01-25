import { Yeseva_One, Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const yesevaOne = Yeseva_One({
  variable: "--font-heading",
  weight: ["400"],
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | COVRLETTR",
    default: "Create Your Professional Cover Letter in Minutes | COVRLETTR",
  },
  description:
    "Easily generate professional cover letters tailored to your experience and job applications. Save time and land your dream job with our intuitive app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${yesevaOne.variable} ${josefinSans.variable} antialiased relative bg-white text-primary-500 font-[family-name:var(--font-text)]`}
      >
        {children}
      </body>
    </html>
  );
}
