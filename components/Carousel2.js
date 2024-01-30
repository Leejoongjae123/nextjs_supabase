"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";

export default function SliderKOSIS() {
  const [KOSIS, setKOSIS] = useState([]);
  const [KOSISLoading, setKOSISLoading] = useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    // const fetchData1 = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getKOSIS?page=1`
    //     );
    //     setKOSIS(response.data);
    //     setKOSISLoading(false);
    //     // console.log("loadingKOSIS");
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    const fetchData = async () => {
      let { data: strategies, error } = await supabase
        .from("strategies")
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setKOSIS(strategies);
        console.log("strategies:", strategies);
      }
    };
    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full border-2 border-custom-pink rounded-xl">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        partialVisible={false}
      >
        {KOSIS.map((elem, index) => {
          return (
            <div className="flex flex-col slider" key={index}>
              <div className="relative h-52">
                {/* <img
                  src={elem.imageSrc}
                  alt="이미지 설명"
                  className="w-full h-auto"
                /> */}
                <Image
                  src={elem.imageUrl}
                  alt="이미지 설명"
                  className="object-cover rounded-xl"
                  fill
                />

              </div>
              <div className="flex flex-col text-center ">
                <div className="flex flex-col mx-auto h-20">
                  <p className="text-md text-white">{elem.title}</p>
                  <p className="ml-2 text-xs text-white line-clamp-3">{elem.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
