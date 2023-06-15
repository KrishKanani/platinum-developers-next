"use client"
import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
    palette: {
      common:{
        white:"#FFF"
      },
      primary: {
        main: "#46144c",
        light: "#FFF",
        dark: "#000",
        mainLight:"#f8f0fc"
      },
      secondary: {
        // main: "#f8f0fc",
        main:"#f2f8f9",
      },
    },
    typography: {
      fontFamily: "Libre Franklin",
      h1: {
        fontFamily: "Libre Franklin",
      },
      navLink2: {
        fontFamily: "Libre Franklin",
        color: "white",
        fontSize: "2vh",
        fontWeight: "bold",
        "&:hover": {
          color: "#f7e6fc",
        },
      },
  
      //------------------- Heading style---------------
      heading: {
        fontFamily: "Libre Franklin",
        fontWeight: "800",
        fontSize: "2.5rem",
        color: "black",
        "@media (min-width:600px) and (max-width:900px)": {
          fontSize: "1.825rem",
        },
        "@media (max-width:600px)": {
          fontSize: "1.625rem",
        },
      },
  
      // --------------- PROPERTY PAGE TYPOGRAPHY--------------------
      subtitleHeading: {
        fontFamily: "Poppins",
        color: "#",
        fontWeight: "600",
        fontSize: "2.6vh",
      },
      subtitle: {
        fontFamily: "Poppins",
        fontSize: "1.1rem",
        fontWeight: "400",
        color: "#000",
        "@media (min-width:600px) and (max-width:900px)": {
          fontSize: "1.025rem",
        },
        "@media (max-width:600px)": {
          fontSize: "0.925rem",
        },
      },
    },
  
    custom: {
      myVariable: "some value",
    },
  });

export default theme;