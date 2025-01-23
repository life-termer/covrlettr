import Link from "next/link";
import Container from "./Container";

function Header() {
  return (
    <header className="py-3 bg-primary-300/20 font-[family-name:var(--font-heading)] absolute top-0 left-0 w-full">
      <Container>
        <div className="flex content-between items-center">
          <div className="grow flex items-center gap-x-32">
            <div className="text-brand text-xl sm:text-2xl">COVRLETTR</div>
            <nav className="space-x-12 text-lg hidden lg:block">
              <Link href="/test" className="hover:text-brand">
                Features
              </Link>
              <Link href="/test" className="hover:text-brand">
                How It Works
              </Link>
            </nav>
          </div>
          <div className="space-x-3 sm:space-x-8 text-md sm:text-lg">
            <Link href="/test" className="hover:text-brand">
              Login
            </Link>
            <Link href="/test" className="hover:text-brand">
              Sign up
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
