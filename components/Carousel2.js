"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";
import "react-multi-carousel/lib/styles.css";

export default function SliderKOSIS() {
  const [KOSIS, setKOSIS] = useState([]);
  const [KOSISLoading, setKOSISLoading] = useState(true);

  useEffect(() => {
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
    <div className="w-full rounded-xl">
      <style>
        {`
          .custom-dot-list-style .react-multi-carousel-dot--active button {
            background: white;
          }
        `}
      </style>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        partialVisible={false}
        showDots={true}
        dotListClass="custom-dot-list-style"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} // 'desktop' 추가
      >
        {KOSIS.map((elem, index) => {
          return (
            <div className="  flex flex-col slider p-5" key={index}>
              <div className="h-[40vh] md:h-[53vh] border-custom-pink border-3 p-5 rounded-2xl">
                <div className="relative h-[25vh] md:h-[40vh]">
                  <Image
                    src={elem.imageUrl}
                    alt="이미지 설명"
                    className="object-cover rounded-xl"
                    fill
                  />
                </div>
                <div className="h-[15vh] md:h-[10vh]">
                  <div className="flex flex-col text-center ">
                    <div className="flex flex-col mx-auto h-20">
                      <div>
                        <p className="text-md text-white line-clamp-1">
                          {elem.title}
                        </p>
                        <p className="ml-2 text-md text-white line-clamp-2">
                          {elem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mx-auto text-xl md:text-2xl bg-[rgb(255,0,155)] my-5 text-white font-bold p-1 px-2 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg">
                <Link href={elem.url}>자세히 보기</Link>
              </button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
