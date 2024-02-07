import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import Ask from "@/components/Ask";

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

export default function Complete({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="animate-in flex-1 flex flex-col w-full justify-center items-center text-white space-y-10 text-2xl md:text-5xl font-bold">
      <h1>출금신청이 완료되었습니다!</h1>
      <p>빠른 시일내에 조치하겠습니다.</p>
    </div>
  );
}
