"use client"
import React from "react";
import { Box } from "@mui/material";

//IMPORTING THE COMPONENTS
import HomePageHero from "../components/HomeHero";
import HomeProjectPortfolio from "../components/HomeProject";
import HomeWhyChoose from "../components/HomeWhyChooseUs";
import Testimonials from "../components/HomeTestimonial";

export default function Home() {
  return (
    <main >
      <Box
      sx={{
        // width: "320px",
        marginTop: "60px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <HomePageHero />
      {/* <HomeProjectPortfolio /> */}
      <HomeWhyChoose />
      <Testimonials />
    </Box>
    </main>
  )
}
