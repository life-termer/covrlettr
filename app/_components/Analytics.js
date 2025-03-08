// create a client component
"use client";
// you are using id=GTM-xxxx. no need for gtmId
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function Analytics() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          
        function gtag() {
            window.dataLayer = window.dataLayer || [];
			dataLayer.push(arguments);
		}
		gtag('consent', 'default', {
			'ad_storage': 'denied',
			'ad_user_data': 'denied',
			'ad_personalization': 'denied',
			'personalization_storage': 'denied',
			'analytics_storage': 'denied'
		});
        `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-TZJHD9PZ`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', "GTM-TZJHD9PZ");
  `,
        }}
      />
    </>
  );
}
