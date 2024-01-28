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
import { useState } from "react";
import { useRouter } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ask() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex font-bold text-3xl self-center p-0.5 ">
        카카오톡 1:1로 문의 주세요
      </div>
      <div className="flex justify-center mt-10">
        <Link href={"https://open.kakao.com/o/sBQ7iSZe"}>
          {/* <Button>
            문의하기
          </Button> */}
          <button className="bg-[rgb(255,0,155)] text-white font-bold py-2 px-4 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg">
            문의하기
          </button>
        </Link>
      </div>
    </div>
  );
}
