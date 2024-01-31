import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { Button } from "@mui/material";
export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {data: { user:{email} }} =await   supabase.auth.getUser();
  

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      const result=createClient(cookieStore);     
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  
  const customPink = "rgb(255, 0, 155)";

  

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-black text-white">
      {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="text-3xl font-bold">은퇴학개론</div>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}


      <div className="animate-in flex-1 flex flex-col gap-20  max-w-4xl px-3">
        <Header email={email} />
        {/* <main className="flex-1 flex flex-col gap-6 bg-black">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main> */}
      </div>
      
      <footer className="w-full p-8 flex justify-center text-center text-xs">
        <p>
          Powered by AURAWORKS
        </p>
      </footer>
    </div>
  );
}
