import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cookies } from "next/headers";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import { createClient } from "@/utils/supabase/server";
import AuthButton from "../components/AuthButton";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center bg-black">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 text-white">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <Link href="/"><div className="text-3xl font-bold">은퇴학개론</div></Link>
              
              {isSupabaseConnected && <AuthButton />}
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
