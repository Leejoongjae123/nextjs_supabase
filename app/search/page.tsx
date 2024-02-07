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

export const metadata = {
  icons:{
    icon:'images/icon.png'
  },
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
  const email=user?.email

  return (
    <div className="animate-in flex flex-col w-full justify-center items-center text-white space-y-5">
      {/* <ThemeProvider theme={theme}> */}
      <div className="mt-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          당신의 <span className="text-customPink">수수료는</span>
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-customPink">당신의 것</span>이니까
        </h1>
      </div>
      <div className="text-sm md:text-xl">
        <p className="text-center">UID : {okxuid} 에서 조회된</p>
        <p className="text-center">수수료 페이백 데이터입니다.</p>
        </div>

      <Payback okxuid={okxuid} email={email}></Payback>

      <div className="text-center text-xs px-10 md:px-0 ">
        <p>출금은 100usdt 이상 부터 가능합니다.</p>
        <p>
          출금 신청 시, 조회된 금액을 기준으로 신청되며 1영업일 이내 UID로
          송금됩니다.
        </p>
        <p>
          또한, 출금 신청을 진행하면, 조회된 전체 금액이 출금되고, 모든 데이터는
          초기화됩니다.
        </p>
        <p>모든 출금내역은 텔레그램을 통해 제공됩니다.</p>
      </div>
      <Ask></Ask>
      <div className="h-20"></div>
      {/* </ThemeProvider> */}
    </div>
  );
}
