"use client";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
// import Button from '@/components/ui/Button';
import Cards from "./Cards.js";
import InputLabel from "@mui/material/InputLabel";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Ask from "./Ask";
import { redirect } from "next/navigation";
import "./MyComponent.css";
import { supabase } from "../utils/supabase/client";
import Carousel2 from "./Carousel2";
import Modal from "./Modal";
import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem, Avatar, SelectSection } from "@nextui-org/react";
import { users } from "./data";
import { SearchOutline } from "react-ionicons";

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

export default function Header({ email }) {
  const [age, setAge] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  // 상태 변수 선언
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const router = useRouter();
  const [data, setData] = useState();

  // TextField의 값이 변경될 때 호출될 함수
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    setIsSearching(true);
    const profile = await supabase.from("profiles").select().eq("email", email);

    const realuid = profile?.data[0]?.okxuid;

    if (email === "") {
      router.push("/login");
    } else if (realuid === inputValue) {
      router.push("/search");
    } else {
      router.push("/fail");
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <ThemeProvider theme={theme}>
        <NextUIProvider>
          <h1 className="text-3xl md:text-5xl font-extrabold text-custompink text-center mt-20 mb-8 text-customPink">
            Boost Your Trading
          </h1>
          <p className="m-auto text-lg md:text-xl text-zinc-200 text-center sm:text-2xl">
            트레이딩의 날개를 달아줄 부스터<br></br>당연히{" "}
            <strong>거래수수료</strong>는 돌려받아야죠
          </p>

          <div className="">
            <div className="">
              <div className="flex flex-row items-center justify-center gap-x-3 my-5">
                <div className="w-[30vw] md:w-[10vw]">
                  <Select
                    items={users}
                    placeholder="거래소"
                    labelPlacement="none"
                    text-xs
                    size="lg"
                    className=""
                    renderValue={(items) => {
                      return items.map((item) => (
                        <div key={item.key} className="flex items-center gap-x-1 ">
                          <Avatar
                            alt={item.data.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.data.avatar}
                          />
                          <div className="flex">
                            <span className="text-xs">{item.data.name}</span>
                          </div>
                        </div>
                      ));
                    }}
                  >
                    {(user) => (
                      <SelectItem key={user.id} textValue={user.name}>
                        <div className="flex items-center text-xs">
                          <Avatar
                            alt={user.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={user.avatar}
                          />
                          <div className="flex flex-col">
                            <span className="text-xs">{user.name}</span>
                          </div>
                        </div>
                      </SelectItem>
                    )}
                  </Select>
                </div>

                <div className="flex w-1/3">
                    <Input
                      placeholder="UID"
                      labelPlacement="none"
                      size="lg"
                      onChange={handleInputChange}
                    />
                  
                </div>
                <div className="">
                  <button
                    className=" bg-[rgb(255,0,155)] text-white font-bold px-4 py-2  border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-2xl text-md h-12"
                    onClick={handleSearch}
                  >
                    {isSearching ? (
                      <div role=" flex status">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <>
                        <SearchOutline
                          color={"#00000"} // 아이콘 색상 설정
                          height="25px" // 아이콘 높이 설정
                          width="25px" // 아이콘 너비 설정
                          font-bold
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center"></div>
          </div>
          <div className="text-xs md:text-lg self-center p-0.5 text-center">
            레퍼럴 코드로 가입된 OKX 계정만 조회가 가능합니다.
          </div>
          <Link href={"https://www.okx.com/join/rich20payback"}>
            <div className="flex text-xs md:text-sm items-center justify-center p-0.5 underline font-bold text-customPink">
              수수료 페이백 계정이 아직도 없으신가요? 지금 가입하기
            </div>
          </Link>
          <div className="h-[100px]"></div>
          <div className="text-xl text-center md:text-5xl text-customPink font-bold self-center p-0.5 ">
            OKX 코드 가입시
          </div>
          <div className="text-2xl md:text-5xl font-bold self-center p-0.5">
            <p className="text-xl text-center md:text-5xl text-white">
              <span className="text-customPink">수수료 페이백</span>과 평생 무료
              지표
            </p>
          </div>
          <div className="flex flex-col mt-5 justify-center">
            <div className="flex justify-center text-md md:text-2xl p-0.5 ">
              <p className="text-center">트레이딩뷰 계정만 있다면</p>
            </div>
            <div className="flex text-md md:text-2xl self-center  p-0.5 text-center ">
              <p>
                <strong>OKX</strong> 시그널 봇과 연동이 가능하여
              </p>
            </div>
            <div className="flex text-md md:text-2xl self-center  p-0.5 ">
              <p>
                <strong>재동매매 전략</strong>을 구축할 수 있습니다.
              </p>
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
          <div className="flex justify-center">
            <Cards></Cards>
          </div>
          <div className="self-center mt-6  p-0.5 text-center">
            OKX 거래소에서 운용이 되지 않을 경우, 스크립트 초대가 취소될 수
            있습니다.
          </div>

          <div className="text-center text-customPink text-2xl md:text-5xl font-bold mt-20 self-center p-0.5 ">
            월 구독제 유료 지표
          </div>
          <div className="text-2xl md:text-5xl font-bold self-center p-0.5 text-center">
            별도 문의
          </div>
          <div className="h-[100px] md:h-[200px]"></div>
          <Ask></Ask>
        </NextUIProvider>
      </ThemeProvider>
    </div>
  );
}
