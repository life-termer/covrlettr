"use client";

import { redirect } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { FilePlus2 } from "lucide-react";
import { useMainContext } from "../_lib/mainContext";
import { set } from "react-hook-form";
import { useId } from "react";

function ClAddNewSidebar({ children }) {
  const { resetData } = useMainContext();

  const handleClick = () => {
    resetData();
    redirect("/app/new");
  };

  return (
    <div
      onClick={handleClick}
      className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide cursor-pointer"
    >
      {children}
    </div>
  );
}

export default ClAddNewSidebar;
