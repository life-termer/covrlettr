import Link from "next/link";
import { Button } from "./_components/ui/button";

function NotFound() {
  return (
    <main className="text-center space-y-28 t-4 h-screen flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-semibold font-[family-name:var(--font-heading)] uppercase">
        This page could not be found :(
      </h1>
      <Button size="xl" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </main>
  );
}

export default NotFound;
