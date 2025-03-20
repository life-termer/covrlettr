"use client";
import { redirect } from "next/navigation";
import { useMainContext } from "../_lib/mainContext";

function ResetDataButton({ children }) {
  const {
    response,
    setResponse,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    mainColor,
    setMainColor,
    form,
    editedResponse,
    setEditedResponse,
    template,
    setTemplate,
    isValid,
  } = useMainContext();

  const resetData = () => {
    setResponse(undefined);
    setEditedResponse(undefined);
    setFontFamily("arial");
    setFontSize("m");
    setLineHeight("m");
    setMainColor("#000");
    redirect("/app/new");
  };
  return (
    <a
      data-sidebar="menu-button"
      data-size="default"
      data-active="false"
      class="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&amp;>span:last-child]:truncate [&amp;>svg]:size-4 [&amp;>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
      onClick={resetData}
    >
      {children}
    </a>
    // <div onClick={resetData}>
    //   
    // </div>
  );
}

export default ResetDataButton;
