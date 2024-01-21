'use client'
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import Link from "next/link";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// import Button from '@/components/ui/Button';
import Cards from "./Cards";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import Ask from "./Ask";


export default function Header() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="text-4xl font-extrabold text-custompink sm:text-center sm:text-6xl my-7">
        Boost Your Trading
      </h1>
      <p className="max-w-2xl m-auto text-xl text-zinc-200 sm:text-center sm:text-2xl">
        트레이딩의 날개를 달아줄 부스터
      </p>
      <p className="max-w-2xl m-auto text-xl text-zinc-200 sm:text-center sm:text-2xl">
        당연히 거래수수료는 돌려받아야죠
      </p>
      <div className="flex justify-center items-center mt-6 rounded-lg p-0.5 space-x-4">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">거래소</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
              style={{ backgroundColor: "white" }}
            >
              <MenuItem defaultValue={"OKX"}></MenuItem>
              <MenuItem value={"OKX"}>OKX</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="UID"
            variant="outlined"
            style={{ backgroundColor: "#FFFFFF" }} // 이 부분을 추가
          />
        </div>

        <Button
        onClick={()=>{
          router.push('/search')
        }}
        >검색</Button>
      </div>
      <div className="flex self-center mt-6  p-0.5 ">
        레퍼럴 코드로 가입된 OKX 계정만 조회가 가능합니다.
      </div>
      <Link href={"https://www.okx.com/join/rich20payback"}>
        <div className="flex justify-center self-center mt-6  p-0.5 underline ">
          수수료 페이백 계정이 아직도 없으신가요? 지금 가입하기
        </div>
      </Link>

      <div className="flex self-center mt-6  p-0.5 ">OKX 코드 가입시</div>
      <div className="flex self-center mt-6  p-0.5 ">
        수수료 페이백과 평생 무료 지표
      </div>
      <div className="flex self-center mt-6  p-0.5 ">
        트레이딩뷰 계정만 있다면,
      </div>
      <div className="flex self-center mt-6  p-0.5 ">
        OKX 시그널 봇과 연동이 가능하여
      </div>
      <div className="flex self-center mt-6  p-0.5 ">
        재동매매 전략을 구축할 수 있습니다.
      </div>
      <div className="flex justify-center my-10">
        <Link href="https://www.youtube.com/watch?v=PGjkxG_RN5A&t=16s">
          <Button>자동매매 설정가이드</Button>
        </Link>
      </div>
      <div className="">
        <Cards></Cards>
      </div>
      <div className="flex self-center mt-6  p-0.5 ">
        OKX 거래소에서 운용이 되지 않을 경우, 스크립트 초대가 취소될 수
        있습니다.
      </div>

      <div className="flex self-center mt-6  p-0.5 ">월 구독제 유료 지표</div>
      <div className="flex self-center mt-6  p-0.5 ">
        마스터시그널 / 블록쉬프트는 별도 문의
      </div>
      <Ask></Ask>
    </div>
  );
}
