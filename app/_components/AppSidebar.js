import {
  ChevronUp,
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
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Menu items.
const items = [
  {
    title: "Create New",
    url: "/app/new",
    icon: NotebookPen,
  },
  {
    title: "Account",
    url: "/account",
    icon: UserRoundCog,
  },
  {
    title: "Cover Letters",
    url: "/app",
    icon: ContactRound,
  },
];

export default async function AppSidebar() {
  const session = await auth();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-6 hover:cursor-pointer">
            <Link href="/app">
              <Logo />
            </Link>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={item.disabled && "opacity-50 "}
                >
                  {item.disabled ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <SidebarMenuButton
                            asChild
                            className="text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
                          >
                            <div>
                              <item.icon />
                              <span>{item.title}</span>
                            </div>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Coming Soon</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className="text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
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
                  <SidebarMenuButton className="h-11 group-data-[collapsible=icon]:p-[4!important] group-data-[collapsible=icon]:w-[2.5rem!important]">
                    <Avatar className=" group-data-[collapsible=icon]:w-8  group-data-[collapsible=icon]:h-8">
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
                    <span className="group-data-[collapsible=icon]:hidden">
                      {session.user.name}
                    </span>
                    <ChevronUp className="ml-auto group-data-[collapsible=icon]:hidden" />
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
