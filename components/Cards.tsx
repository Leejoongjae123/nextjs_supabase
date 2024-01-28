"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const datas = [
  {
    path: "/images/strategy1.jpg",
    url: "https://kr.tradingview.com/script/lFhuKeoM/",
  },
  {
    path: "/images/strategy2.jpg",
    url: "https://kr.tradingview.com/script/BrdbRTuy/",
  },
  {
    path: "/images/strategy3.jpg",
    url: "https://kr.tradingview.com/script/Dy9XNJb5/",
  },
  {
    path: "/images/strategy4.jpg",
    url: "https://kr.tradingview.com/script/Dy9XNJb5/",
  },
];

function Cards() {
  return (
    <div className=" w-full h-50 bg-white">
      <Carousel autoSlide={true} autoSlideInterval={3000} datas={datas}>
        {datas.map((elem,index) => {
          return (
            
              <img key={index} src={elem.path} alt="image"></img>
            
          );
        })}
      </Carousel>
    </div>
  );
}

export default Cards;
