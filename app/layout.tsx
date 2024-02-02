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

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "트레이딩 부스터! 차트지표와 페이백을 동시에",
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

  return (
    <html lang="en" className={GeistSans.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content='https://wpcdjihluvirgbyqussd.supabase.co/storage/v1/object/public/images/ogImage.png'></meta>
      </Head>
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
