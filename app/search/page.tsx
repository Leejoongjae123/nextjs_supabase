import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import Ask from "@/components/Ask";
import { useRouter } from "next/navigation";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState,useEffect } from "react";
import { cookies } from "next/headers";



// 사용자 지정 색상 정의
const customPink = "rgb(255, 0, 155)";
// MUI 테마 생성
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: customPink,
//     },
//   },
//   components: {
//     MuiSelect: {
//       styleOverrides: {
//         select: {
//           "&:focus": {
//             backgroundColor: "white", // 필요시 배경색 변경
//             borderColor: customPink,
//           },
//         },
//       },
//     },
//   },
// });

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
  
  
  const update = await supabase
  .from("profiles")
  .select()
  .eq("email", user?.email);

  const okxuid=update?.data[0].okxuid
  console.log("okxuid:",okxuid)
  

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
        <div className="text-sm md:text-2xl">UID : {okxuid} 에서 조회된 수수료 페이백 데이터입니다.</div>
        <div className=" w-2/3 md:w-1/4 flex-col py-10 bg-white  text-black text-center rounded-2xl">
          <h1 className="font-black font-bold text-3xl md:text-5xl">누적 페이백</h1>
          <p>...USDT</p>
        </div>
        <div className="w-2/3 md:w-1/4 flex-col py-10  text-black text-center rounded-2xl bg-[rgb(255,0,155)]">
          <h1 className="text-white font-bold text-3xl md:text-5xl">출금가능 페이백</h1>
          <p>...USDT</p>
        </div>

        {/* <Button onClick={()=>{
        router.push('/complete')
      }}>지금 출금하기</Button> */}
        <Link href='/complete'>
        <button
          className="bg-black text-[rgb(255,0,155)] font-bold py-2 px-4 border border-[rgb(255,0,155)] border-transparent hover:bg-[rgb(255,0,155)] hover:text-white rounded-lg"
        >
          지금 출금하기
        </button>
        </Link>

        <div className="text-center text-xs px-10 md:px-0 ">
          <p>출금은 100usdt 이상 부터 가능합니다.</p>
          <p>
            출금 신청 시, 조회된 금액을 기준으로 신청되며 1영업일 이내 UID로
            송금됩니다.
          </p>
          <p>
            또한, 출금 신청을 진행하면, 조회된 전체 금액이 출금되고, 모든
            데이터는 초기화됩니다.
          </p>
          <p>모든 출금내역은 텔레그램을 통해 제공됩니다.</p>
        </div>
        <Ask></Ask>
        <div className="h-20">
          
        </div>
      {/* </ThemeProvider> */}
    </div>
  );
}
