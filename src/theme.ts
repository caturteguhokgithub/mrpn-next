"use client";

// import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// const poppins = Poppins({
//  weight: ["300", "400", "500", "600", "700"],
//  subsets: ["latin"],
//  display: "swap",
// });

const theme = createTheme({
 typography: {
  fontFamily: "'Poppins', sans-serif",
  caption: {
   fontFamily: "'Open Sans', sans-serif",
  },
 },
 palette: {
  primary: {
   main: "#1880C9",
   light: "#F4F5F7",
   dark: "#05004E",
  },
 },
 components: {
  MuiCssBaseline: {
   styleOverrides: {
    body: {
     maxHeight: "100vh",
     maxWidth: "100vw",
     backgroundColor: "#1880C9",
     color: "#05004E",
     transition: "all 300ms ease",
    },
   },
  },
 },
});

export default theme;
