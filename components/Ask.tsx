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

export default function Ask() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex self-center mt-6  p-0.5 ">
        카카오톡 1:1로 문의 주세요
      </div>
      <div className="flex justify-center my-5">
        <Link href={"https://open.kakao.com/o/sBQ7iSZe"}>
          <Button>문의하기</Button>
        </Link>
      </div>
    </div>
  );
}
