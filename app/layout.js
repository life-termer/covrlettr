import { Yeseva_One, Josefin_Sans, Noto_Sans, Poppins } from "next/font/google";
import CookieConsentBanner from "./_components/CookieConsentBanner";
import { Toaster } from "./_components/ui/toaster";
import { MainContextProvider } from "./_lib/mainContext";
import Analytics from "./_components/Analytics";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "@/app/_styles/globals.css";

const yesevaOne = Yeseva_One({
  variable: "--font-heading",
  weight: ["400"],
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-text",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    template: "%s | COVRLETTR",
    default: "Create Your Professional Cover Letter in Minutes | COVRLETTR",
  },
  description:
    "Easily generate professional cover letters tailored to your experience and job applications. Save time and land your dream job with our intuitive app!",
  appleWebApp: {
    title: "COVRLETTR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-TZJHD9PZ" /> */}
      <head>
        <Analytics />
      </head>
      <body
        className={`${yesevaOne.variable} ${josefinSans.variable} ${notoSans.variable} ${poppins.variable} antialiased relative bg-white text-primary-500 font-[family-name:var(--font-text)]`}
      >
        <MainContextProvider>{children}</MainContextProvider>
        <Toaster />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
