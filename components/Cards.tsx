"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const imageList = [
  "/images/strategy1.jpg",
  "/images/strategy2.jpg",
  "/images/strategy3.jpg",
  "/images/strategy4.jpg",
];

function Cards() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {imageList.map((elem, index) => {
          return (
            <Grid item xs={12} md={6}>
              <Item>
                <Image width={500} height={300} alt="Strategy 1" src={elem}></Image>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Cards;
