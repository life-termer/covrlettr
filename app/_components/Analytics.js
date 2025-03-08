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

      <Script
        async={true}
        src={"https://www.googletagmanager.com/gtag/js?id=G-DC0VBPGJ9L"}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DC0VBPGJ9L');
            `,
        }}
      />
    </>
  );
}
