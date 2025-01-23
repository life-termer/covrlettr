import Image from "next/image";
import Container from "./_components/Container";
import { Button } from "./_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto w-full bg-secondary-400">
        <Container>
          <div className="min-h-screen flex flex-col justify-center items-center space-y-10">
            <h1 className="text-primary-700 text-4xl sm:text-5xl lg:text-6xl text-center font-[family-name:var(--font-heading)] uppercase">
              Create Tailored <span className="text-brand">Cover Letters </span>
              Effortlessly
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-center max-w-4xl">
              Stand out in the job market with personalized, professional cover
              letters. Let our app do the heavy lifting so you can focus on
              landing your dream job.
            </p>
            <Button asChild size="xl">
              <Link href="/test">Get Started</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
