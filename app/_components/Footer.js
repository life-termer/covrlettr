import Link from "next/link";
import Container from "./Container";

function Footer() {
  return (
    <footer className="py-3 bg-primary-500 text-white text-sm font-[family-name:var(--font-heading)]">
      <Container>
        <div className="flex content-between items-center flex-col sm:flex-row gap-1">
          <div className="flex-auto order-2 sm:order-1">
            © {new Date().getFullYear()} COVRLETTR
          </div>
          <div className="flex-auto order-1 sm:order-2 text-end">
            <Link href="/" className=" hover:text-brand">
              Terms and Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
