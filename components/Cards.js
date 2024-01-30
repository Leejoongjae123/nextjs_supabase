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
import axios from "axios";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import Carousel2 from "./Carousel2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const datas = [
  {
    imageUrl: "/images/strategy1.jpg",
    url: "https://kr.tradingview.com/script/lFhuKeoM/",
  },
  {
    imageUrl: "/images/strategy2.jpg",
    url: "https://kr.tradingview.com/script/BrdbRTuy/",
  },
  {
    imageUrl: "/images/strategy3.jpg",
    url: "https://kr.tradingview.com/script/Dy9XNJb5/",
  },
  {
    imageUrl: "/images/strategy4.jpg",
    url: "https://kr.tradingview.com/script/Dy9XNJb5/",
  },
];

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      let { data: strategies, error } = await supabase
        .from("strategies")
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(strategies);
        console.log("strategies:", strategies);
      }
    };

    fetchData();
  }, []);

  console.log("data:", data);

  return (
    <div className="w-[80vw] md:w-[60vw] ">
    <Carousel2></Carousel2>
    </div>
  );
}
