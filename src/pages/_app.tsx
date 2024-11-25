import "@/styles/globals.css";
import "antd/dist/antd"; // Import Ant Design CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ThemeProvider } from "@material-tailwind/react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/HelveticaNeueMedium.otf" });

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider>
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>

    // </ThemeProvider>
  );
}
