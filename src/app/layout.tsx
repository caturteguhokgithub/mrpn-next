"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { loadCSS } from "fg-loadcss";
import "./globals.css";

// export const metadata: Metadata = {
//  title: "MRPN 2024",
// };

export default function RootLayout(props: any) {
 React.useEffect(() => {
  const node = loadCSS(
   "https://use.fontawesome.com/releases/v6.5.1/css/all.css"
  );
  return () => {
   node.parentNode!.removeChild(node);
  };
 }, []);

 return (
  <>
   <html lang="en">
    <body>
     {/* <BrowserRouter> */}
     <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
       <CssBaseline />
       {props.children}
      </ThemeProvider>
     </AppRouterCacheProvider>
     {/* </BrowserRouter> */}
    </body>
   </html>
  </>
 );
}
