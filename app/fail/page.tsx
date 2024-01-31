import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import Ask from "@/components/Ask";
import { useRouter } from "next/navigation";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { cookies } from "next/headers";
import Payback from "../../components/Payback";

// 사용자 지정 색상 정의
const customPink = "rgb(255, 0, 155)";

export default async function Search({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const update: any = await supabase
    .from("profiles")
    .select()
    .eq("email", user?.email);

  const okxuid = update?.data[0].okxuid;

  return (
    <div className="animate-in flex flex-col w-full justify-center items-center text-white space-y-5">
      <div className="mt-20">
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          가입 시 입력한 UID와
        </h1>
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          일치하지 않습니다.
        </h1>
        <Link href="/">
        <button
          className="block m-auto my-5 bg-[rgb(255,0,155)] text-white font-bold px-4 py-2  border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg text-md"
        >
          홈으로
        </button>
        </Link>
      </div>
    </div>
  );
}
