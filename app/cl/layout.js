import { cookies } from "next/headers";
import AppSidebar from "../_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";

export default async function Layout({ children }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full max-h-screen">{children}</main>
    </SidebarProvider>
  );
}
