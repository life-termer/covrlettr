import Link from "next/link";
import Container from "./Container";

function Header() {
  return (
    <header className="py-3 bg-secondary-500/40 font-[family-name:var(--font-heading)] fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <Container>
        <div className="flex content-between items-center">
          <div className="grow flex items-center gap-x-32">
            <a href="#top" className="text-brand text-xl sm:text-2xl">
              COVRLETTR
            </a>
            <nav className="space-x-12 text-lg hidden lg:block">
              <a href="#features" className="hover:text-brand">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-brand">
                How It Works
              </a>
            </nav>
          </div>
          <div className="space-x-3 sm:space-x-8 text-md sm:text-lg">
            <Link href="/cl" className="hover:text-brand">
              Login
            </Link>
            <Link href="/cl" className="hover:text-brand">
              Sign up
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
