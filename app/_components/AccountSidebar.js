import {
  ChevronUp,
  Settings,
  ContactRound,
  UserRoundCog,
  NotebookPen,
  LogIn,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "../_lib/auth";
import SignOutButton from "./SignOutButton";
import { signOutAction } from "../_lib/actions";
import SignInButton from "./SignInButtonGoogle";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Profile",
    url: "/account",
    icon: ContactRound,
  },
  {
    title: "Cover Letters",
    url: "/cl/#job",
    icon: NotebookPen,
    disabled: true,
  },
];

export default async function AccountSidebar() {
  const session = await auth();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-6 hover:cursor-pointer">
            <Link href="/cl">
              <Logo />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={item.disabled && "opacity-50 pointer-events-none"}
                >
                  <SidebarMenuButton
                    asChild
                    className="text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {session?.user ? (
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="h-11">
                    <Avatar>
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
                    {session.user.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <Link href="/account">
                    <DropdownMenuItem>
                      <span>Account</span>
                    </DropdownMenuItem>
                  </Link>

                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
              >
                <Link href="/login">
                  <LogIn />
                  <span>Sign up</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
