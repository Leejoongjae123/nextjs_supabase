import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { Button } from "@mui/material";
import Head from "next/head";

export const metadata = {
  title: '트레이딩 부스터! 차트지표와 페이백을 동시에',
  openGraph: {
    title: '트레이딩 부스터! 차트지표와 페이백을 동시에',
    url: 'https://www.tradingboost.io/',
    siteName: 'https://www.tradingboost.io/',
    images: [
      {
        url: 'https://wpcdjihluvirgbyqussd.supabase.co/storage/v1/object/public/images/ogImage.png', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'ko_Kr',
    type: 'website',
  },
}

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // const {
  //   data: {
  //     user: { email },
  //   },
  // } = await supabase.auth.getUser();
  const response = await supabase.auth.getUser();
  const email = response.data?.user?.email ?? "";

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      const result = createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const customPink = "rgb(255, 0, 155)";


  

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-black text-white">

      <div className="animate-in flex-1 flex flex-col gap-20  max-w-4xl px-3">
        <Header email={email} />
        {/* <main className="flex-1 flex flex-col gap-6 bg-black">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main> */}
      </div>

      <footer className="w-full p-8 flex justify-center text-center text-xs">
        <p>Powered by AURAWORKS</p>
      </footer>
    </div>
  );
}
