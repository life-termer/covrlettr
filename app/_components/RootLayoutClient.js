"use client";

import { useEffect } from "react";
import { MainContextProvider } from "../_lib/mainContext";
import CookieConsentBanner from "./CookieConsentBanner";
import { Toaster } from "./ui/toaster";

function RootLayoutClient({ children }) {
  //   useEffect(() => {
  //     if ("serviceWorker" in navigator) {
  //       navigator.serviceWorker
  //         .register("/service-worker.js")
  //         .then((registration) => {
  //           console.log(
  //             "Service Worker registered with scope:",
  //             registration.scope
  //           );
  //         })
  //         .catch((error) => {
  //           console.error("Service Worker registration failed:", error);
  //         });
  //     }
  //   }, []);

  return (
    <>
      <MainContextProvider>{children}</MainContextProvider>
      <Toaster />
      <CookieConsentBanner />
    </>
  );
}

export default RootLayoutClient;
