import Image from "next/image";
import Container from "./_components/Container";
import { Button } from "./_components/ui/button";
import Link from "next/link";
import Footer from "./_components/Footer";
import imageCover from "@/public/cover.webp";
import CustomSvg from "./_components/CustomSvg";
import TimeSvg from "./_components/TimeSvg";
import InterfaceSvg from "./_components/InterfaceSvg";
import LaptopSvg from "./_components/LaptopSvg";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header type="landing" />
      <main>
        <section
          id="top"
          className="bg-gradient-to-b from-secondary-700/50 via-secondary-500/50 to-white w-full relative"
        >
          <Image
            src={imageCover}
            fill
            className="object-cover -z-10"
            alt="Creating Professional Cover Letter"
            placeholder="blur"
            quality={80}
          />
          <Container>
            <div className="min-h-screen flex flex-col justify-center items-center space-y-10 ">
              <h1 className="text-primary-700 text-4xl sm:text-5xl lg:text-6xl text-center font-[family-name:var(--font-heading)] uppercase">
                Create Tailored{" "}
                <span className="text-brand">Cover Letters </span>
                Effortlessly
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-center max-w-4xl">
                Stand out in the job market with personalized, professional
                cover letters. Let our app do the heavy lifting so you can focus
                on landing your dream job.
              </p>
              <Button size="xl" asChild>
                <Link href="/app">Get Started</Link>
              </Button>
            </div>
          </Container>
        </section>
        <section id="features" className="bg-white w-full py-20 sm:py-28">
          <Container>
            <h2 className="text-primary-700 text-center text-5xl font-[family-name:var(--font-heading)] mb-20 sm:mb-28 uppercase">
              Features
            </h2>
            <div className="grid grid-cols-6 gap-8 ">
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col items-center gap-y-4 text-center">
                <CustomSvg />
                <h3 className="text-primary-700 font-[family-name:var(--font-heading)] text-3xl">
                  AI-Powered Customization
                </h3>
                <p className="text-xl">
                  Generate unique cover letters tailored to the specific job
                  description and your experience.
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col items-center gap-y-4 text-center">
                <TimeSvg />
                <h3 className="text-primary-700 font-[family-name:var(--font-heading)] text-3xl">
                  Time
                  <br />
                  Saving
                </h3>
                <p className="text-xl">
                  Create professional cover letters in minutes, not hours.
                </p>
              </div>
              <div className="col-span-6 lg:col-span-2 flex flex-col items-center gap-y-4 text-center">
                <InterfaceSvg />
                <h3 className="text-primary-700 font-[family-name:var(--font-heading)] text-3xl">
                  User-Friendly
                  <br />
                  Interface
                </h3>
                <p className="text-xl">
                  Download your cover letter in PDF or plain text formats.
                </p>
              </div>
            </div>
            <div className="text-center mt-16" disabled>
              <Button size="xl" asChild>
                <Link href="/app">Start Now</Link>
              </Button>
            </div>
          </Container>
        </section>
        <section
          id="how-it-works"
          className="bg-gradient-to-b from-white via-secondary-400 to-secondary-600 w-full pt-20 sm:pt-28 pb-56"
        >
          <Container>
            <h2 className="text-primary-700 text-5xl text-center font-[family-name:var(--font-heading)] mb-24 uppercase">
              How It Works
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-10 sm:gap-12 lg:gap-3">
              <div className="flex-auto w-full lg:w-1/2 flex justify-center items-center">
                <LaptopSvg />
              </div>
              <div className="flex-auto w-full lg:w-1/2 flex flex-col gap-y-10 sm:gap-y-12">
                <div>
                  <h3 className="text-primary-700 text-2xl font-[family-name:var(--font-heading)] mb-1 uppercase">
                    1. Input Your Details
                  </h3>
                  <p className="text-xl">
                    Provide your experience, skills, and the job description.
                  </p>
                </div>
                <div>
                  <h3 className="text-primary-700 text-2xl font-[family-name:var(--font-heading)] mb-1 uppercase">
                    2. Customize Your Letter
                  </h3>
                  <p className="text-xl">
                    Choose from a variety of professional templates and styles.
                  </p>
                </div>
                <div>
                  <h3 className="text-primary-700 text-2xl font-[family-name:var(--font-heading)] mb-1 uppercase">
                    3. Download & Apply
                  </h3>
                  <p className="text-xl">
                    Download your cover letter and submit it with confidence.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    </>
  );
}
