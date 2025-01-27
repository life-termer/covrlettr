import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { auth } from "../_lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SignOutButton from "./SignOutButton";
import { User } from "lucide-react";

async function Header({ type }) {
  const session = await auth();

  return (
    <header className="py-3 bg-secondary-500/40 font-[family-name:var(--font-heading)] fixed top-0 left-0 w-screen z-50 backdrop-blur-sm">
      <Container>
        <div className="flex content-between items-center h-10">
          <div className="grow flex items-center gap-x-32">
            <a href={type === "landing" ? "#top" : "/"}>
              <Logo type="landing" />
            </a>
            {type === "landing" && (
              <nav className="space-x-12 text-lg hidden lg:block">
                <a href="#features" className="hover:text-brand">
                  Features
                </a>
                <a href="#how-it-works" className="hover:text-brand">
                  How It Works
                </a>
              </nav>
            )}
          </div>
          <div className="space-x-3 sm:space-x-8 text-md sm:text-lg">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none ">
                  <Avatar className="h-10">
                    {session.user?.image && (
                      <AvatarImage
                        src={session.user.image}
                        alt={session.user.name}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <AvatarFallback className="bg-transparent">
                      <User />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/account">
                    <DropdownMenuItem>
                      <span>Account</span>
                    </DropdownMenuItem>
                  </Link>
                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className="hover:text-brand leading-[40px]">
                Sign up
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
