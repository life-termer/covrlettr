"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

const CookieConsentBanner = () => {
  useEffect(() => {
    CookieConsent.run({
      cookie: {
        name: "cc_covrlettr",
        domain: window.location.hostname,
        path: "/",
        sameSite: "Lax",
        expiresAfterDays: 365,
      },
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          flipButtons: false,
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          position: "middle center",
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/, // regex: match all cookies starting with '_ga'
              },
              {
                name: "_gid", // string: exact cookie name
              },
            ],
          },
        },
        targeting: {
          autoClear: {
            cookies: [{}],
          },
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies!",
              description:
                'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept all", you consent to our use of cookies.',
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
              footer:
                '\n<a href="/terms-and-privacy" target="_blank">Privacy policy</a>\n',
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Cookies usage.",
                  description:
                    'We use cookies to provide basic website functionality and improve your online experience. You can opt-in/out at any time for each category. For more details regarding cookies and other sensitive data, please read the full <a href="/terms-and-privacy" target="_blank">Privacy Policy</a>.',
                },
                {
                  title: "Necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: "List of cookies",
                    headers: {
                      name: "Name",
                      domen: "Domen",
                      duration: "Duration",
                      description: "Description",
                    },
                    body: [
                      {
                        name: "cc_covrlettr",
                        domen: ".covrlettr.eu",
                        duration: "1 year",
                        description: "Cookie settings",
                      },
                      {
                        name: "sidebar:state",
                        domen: ".covrlettr.eu",
                        duration: "1 week",
                        description: "Better user experience",
                      },
                      {
                        name: "authjs.",
                        domen: ".covrlettr.eu",
                        duration: "Session",
                        description: "User authentication",
                      },
                    ],
                  },
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "List of cookies",
                    headers: {
                      name: "Name",
                      domen: "Domen",
                      duration: "Duration",
                      description: "Description",
                    },
                    body: [
                      {
                        name: "_ga",
                        domen: ".covrlettr.eu",
                        duration: "2 years",
                        description:
                          "The cookie used by Google Analytics enables the service to distinguish one visitor from another.",
                      },
                    ],
                  },
                },
                {
                  title: "Targeting and Advertising",
                  description:
                    "These cookies are specifically designed to gather information from you on your device to display advertisements to you based on relevant topics that interest you.",
                  linkedCategory: "targeting",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="mailto:dsurchin@gmail.com" target="_blank">contact us</a>',
                },
              ],
            },
          },
        },
      },

      onFirstConsent: ({ cookie }) => {
        console.log("onFirstConsent fired", cookie);
        if (CookieConsent.acceptedCategory("analytics")) {
          console.log("onFirstConsent analytics");
          gtag("consent", "update", {
            analytics_storage: "granted",
          });
        }
        if (CookieConsent.acceptedCategory("targeting")) {
          console.log("onFirstConsent targeting");
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            personalization_storage: "granted",
          });
        }
      },
      onChange: ({ cookie, changedCategories, changedServices }) => {
        console.log("onChange fired", cookie);
        if (
          CookieConsent.acceptedCategory("analytics") &&
          CookieConsent.acceptedCategory("targeting")
        ) {
          console.log("onChange  targeting+analytics");
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            personalization_storage: "granted",
            analytics_storage: "granted",
          });
        } else if (
          CookieConsent.acceptedCategory("analytics") &&
          !CookieConsent.acceptedCategory("targeting")
        ) {
          console.log("onChange analytics");
          gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            personalization_storage: "denied",
            analytics_storage: "granted",
          });
        } else if (
          !CookieConsent.acceptedCategory("analytics") &&
          CookieConsent.acceptedCategory("targeting")
        ) {
          console.log("onChange targeting");
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            personalization_storage: "granted",
            analytics_storage: "denied",
          });
        } else {
          console.log("onChange none");
          gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            personalization_storage: "denied",
            analytics_storage: "denied",
          });
        }
      },
    });
  }, []);
  return <></>;
};

export default CookieConsentBanner;
