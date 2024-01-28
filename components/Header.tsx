"use client";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
// import Button from '@/components/ui/Button';
import Cards from "./Cards";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Ask from "./Ask";

// 사용자 지정 색상 정의
const customPink = "rgb(255, 0, 155)";
// MUI 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: customPink,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "white", // 필요시 배경색 변경
            borderColor: customPink,
          },
        },
      },
    },
  },
});

export default function Header() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 items-center">
      <ThemeProvider theme={theme}>
        <h1 className="text-5xl font-extrabold text-custompink text-center mt-20 mb-8 text-customPink">
          Boost Your Trading
        </h1>
        <p className="m-auto text-xl text-zinc-200 sm:text-center sm:text-2xl">
          트레이딩의 날개를 달아줄 부스터<br></br>당연히{" "}
          <strong>거래수수료</strong>는 돌려받아야죠
        </p>

        <div className="flex my-10 justify-center items-center rounded-lg">
          <div className="flex">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                거래소
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
                style={{ backgroundColor: "white", borderRadius: 5 }}
              >
                <MenuItem defaultValue={"OKX"}></MenuItem>
                <MenuItem value={"OKX"}>OKX</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex">
            <TextField
              id="outlined-basic"
              label="UID를 입력해주세요"
              variant="outlined"
              style={{ backgroundColor: "#FFFFFF", borderRadius: 5 }} // 이 부분을 추가
            />
          </div>
          <div className="flex">
            <button
              className="bg-[rgb(255,0,155)] text-white font-bold py-3.5 px-4 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg ml-2"
              onClick={() => {
                router.push("/search");
              }}
            >
              검색
            </button>
          </div>
        </div>
        <div className="flex text-xs md:text-lg self-center p-0.5">
          레퍼럴 코드로 가입된 OKX 계정만 조회가 가능합니다.
        </div>
        <Link href={"https://www.okx.com/join/rich20payback"}>
          <div className="flex text-xs md:text-sm items-center justify-center p-0.5 underline font-bold text-customPink">
            수수료 페이백 계정이 아직도 없으신가요? 지금 가입하기
          </div>
        </Link>
        <div className="h-[100px]"></div>
        <div className="flex text-4xl md:text-5xl text-customPink font-bold self-center p-0.5 ">
          OKX 코드 가입시
        </div>
        <div className="flex text-4xl md:text-5xl font-bold self-center p-0.5">
          <p className="text-4xl text-center md:text-5xl text-white"><span className="text-customPink">수수료 페이백</span>과 평생 무료 지표</p>
        </div>
        <div className="flex flex-col mt-5 justify-center">
          <div className="flex justify-center text-lg md:text-2xl p-0.5 ">
            <p className="text-center">트레이딩뷰 계정만 있다면</p>
          </div>
          <div className="flex text-lg md:text-2xl self-center  p-0.5 text-center ">
            <p><strong>OKX</strong> 시그널 봇과 연동이 가능하여</p>
            
          </div>
          <div className="flex text-lg md:text-2xl self-center  p-0.5 ">
            <p><strong>재동매매 전략</strong>을 구축할 수 있습니다.</p>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Link href="https://www.youtube.com/watch?v=PGjkxG_RN5A&t=16s">
            {/* <Button>자동매매 설정가이드</Button> */}
            <button className="bg-[rgb(255,0,155)] text-white font-bold py-2 px-4 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg">
              자동매매 설정가이드
            </button>
          </Link>
        </div>
        <div className="">
          <Cards></Cards>
        </div>
        <div className="flex self-center mt-6  p-0.5 text-center ">
          OKX 거래소에서 운용이 되지 않을 경우, 스크립트 초대가 취소될 수
          있습니다.
        </div>

        <div className="flex text-customPink text-3xl md:text-5xl font-bold mt-20 self-center p-0.5 ">
          월 구독제 유료 지표
        </div>
        <div className="flex text-2xl md:text-5xl font-bold self-center mt-6  p-0.5 text-center">
          마스터시그널 / 블록쉬프트는 별도 문의
        </div>
        <div className="h-[200px]"></div>
        <Ask></Ask>
      </ThemeProvider>
    </div>
  );
}
