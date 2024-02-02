import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cookies } from "next/headers";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import { createClient } from "@/utils/supabase/server";
import AuthButton from "../components/AuthButton";
import Link from "next/link";
import { Button } from "@mui/material";
import Head from "next/head";

export const metadata = {
  icons: {
    icon: '/images/icon.png'},
  title:"트레이딩 부스터! 차트지표와 페이백을 동시에",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://wpcdjihluvirgbyqussd.supabase.co/storage/v1/object/public/images/ogImage.png", // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };
  const customPink = "rgb(255, 0, 155)";
  const isSupabaseConnected = canInitSupabaseClient();

  const {openGraph}=metadata

  return (
    <html lang="en" className={GeistSans.className}>
      {/* <Head>
        <title>{openGraph.title}</title>
        <meta name="description" content={openGraph.description} />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:description" content={openGraph.description} />
        <meta property="og:url" content={openGraph.url} />
        <meta property="og:site_name" content={openGraph.siteName} />
        <meta property="og:locale" content={openGraph.locale} />
        <meta property="og:type" content={openGraph.type} />
        {openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
          // 추가적으로 og:image:width, og:image:height, og:image:alt 메타 태그를 여기에 추가할 수 있습니다.
        ))}
      </Head> */}
      <body className="">
        <main className="min-h-screen flex flex-col items-center bg-black">
          <nav className="w-full flex justify-center  h-16 text-white">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <Link href="/">
                <div className="text-2xl md:text-3xl font-bold">은퇴학개론</div>
              </Link>

              {isSupabaseConnected && <AuthButton />}
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
