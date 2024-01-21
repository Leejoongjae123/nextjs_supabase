'use client';

import CustomizedButtons from './ui/Button/CustomBUtton';
import Cards from './ui/Cards/Cards';
import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Session, User } from '@supabase/supabase-js';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// #FF009B

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF009B'
    }
  }
});

export default function Pricing({
  session,
  user,
  products,
  subscription
}:{
  session: any;
  user: any;
  products: any;
  subscription: any;
}) {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const router = useRouter();

  return (
    <section className="bg-black">
      <ThemeProvider theme={theme}>
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
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
                  <InputLabel id="demo-simple-select-helper-label">
                    거래소
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    style={{backgroundColor:'white'}}
                  >
                    <MenuItem defaultValue={"OKX"}>
                    </MenuItem>
                    <MenuItem value={"OKX"}>OKX</MenuItem>
                    
                  </Select>
                  
                </FormControl>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="UID"
                  variant="outlined"
                  style={{ backgroundColor: '#FFFFFF' }} // 이 부분을 추가
                />
              </div>

              <Button>검색</Button>
            </div>
            <div className="flex self-center mt-6  p-0.5 ">
              레퍼럴 코드로 가입된 OKX 계정만 조회가 가능합니다.
            </div>
            <Link href={'https://www.okx.com/join/rich20payback'}>
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
                <Button >자동매매 설정가이드</Button>
              </Link>
            </div>
            <div className="">
              <Cards></Cards>
            </div>
            <div className="flex self-center mt-6  p-0.5 ">
              OKX 거래소에서 운용이 되지 않을 경우, 스크립트 초대가 취소될 수
              있습니다.
            </div>

            <div className="flex self-center mt-6  p-0.5 ">
              월 구독제 유료 지표
            </div>
            <div className="flex self-center mt-6  p-0.5 ">
              마스터시그널 / 블록쉬프트는 별도 문의
            </div>
            <div className="flex self-center mt-6  p-0.5 ">
              카카오톡 1:1로 문의 주세요
            </div>
            <div className="flex justify-center my-5">
              <Link href={'https://open.kakao.com/o/sBQ7iSZe'}>
                <Button >문의하기</Button>
              </Link>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </section>
  );
}
