import localFont from "next/font/local";

export const ahang = localFont({
  src: [
    {
      path: "../public/fonts/Ahang-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Ahang-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Ahang-RegularSharp.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Ahang-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Ahang-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
