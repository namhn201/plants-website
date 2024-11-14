import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard')
  }, [router])

  return (
    <div>
      {/* Loading... */}
    </div>
  );
}
