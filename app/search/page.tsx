'use client'
import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import Ask from "@/components/Ask";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Search({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  
  const router = useRouter();

  const fetchReward=()=>{
    console.log(1234)
  }
  return (
    <div className="flex-1 flex flex-col w-full justify-center items-center text-white space-y-5">
      <div>
        <h1 className="text-4xl font-bold">당신의 수수료는</h1>
        <h1 className="text-4xl font-bold">당신의 것이니까</h1>
      </div>
      <div>UID ... 조회된 수수료 페이백 데이터입니다.</div>
      <div className="bg-white text-black text-center">
        <h1>누적페이백</h1>
        <p>...USDT</p>
      </div>
      <div className="bg-white text-black text-center">
        <h1>출금 가능 페이백</h1>
        <p>...USDT</p>
      </div>

      <Button onClick={()=>{
        router.push('/complete')
      }}>지금 출금하기</Button>
      <div className="text-center">
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
    </div>
  );
}
