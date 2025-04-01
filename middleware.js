import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/app", "/account"],
  unstable_allowDynamic: [
    "**/node_modules/core-js/**",
    "**/node_modules/jspdf/**",
  ],
};
