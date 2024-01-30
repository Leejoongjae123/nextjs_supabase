"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";
import Carousel2 from '../../components/Carousel2'
export default function SliderKOSIS() {

  return (
    <div className="w-[80vw] h-full">
      <Carousel2></Carousel2>
    </div>
  );
}
