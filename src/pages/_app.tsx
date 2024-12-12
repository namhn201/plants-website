import "@/styles/globals.css";
import "@/styles/grid.css";
import "@/styles/loader.css";
import "@/styles/locomotive-scroll.css";
import "antd/dist/antd"; // Import Ant Design CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ThemeProvider } from "@material-tailwind/react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/HelveticaNeueMedium.otf" });
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/loader";
import AOS from "aos"; // Import AOS nếu chưa có


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    // const handleComplete = () => setIsLoading(false);
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 1000); // Hiển thị ít nhất 500ms
      setTimeout(() =>       AOS.refresh(), 1050); // Hiển thị ít nhất 500ms

    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    // <ThemeProvider>
    <main className={`${myFont.className} scroll-container `}>
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </main>

    // </ThemeProvider>
  );
}
