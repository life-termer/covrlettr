import { cookies } from "next/headers";
import AppSidebar from "../_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";
import Spinner from "../_components/Spinner";

export default async function Layout({ children }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarTrigger className="fixed lg:relative top-2 left-2 z-50 [&_svg]:size-5 w-5 h-5" />
      <main className="w-full min-h-screen">{children}</main>
    </SidebarProvider>
  );
}
