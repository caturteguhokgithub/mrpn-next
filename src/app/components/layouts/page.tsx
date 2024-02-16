"use client";

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
 Box,
 Collapse,
 Divider,
 Icon,
 Stack,
 Zoom,
 useTheme,
} from "@mui/material";
import { Footer } from "./footer";
import { Aside } from "./aside";
import { Header } from "./header";
import { grey } from "@mui/material/colors";
import React from "react";
import Image from "next/image";

type ILayout = {
 children?: React.ReactNode;
};

export const DashboardLayout = ({ children }: ILayout) => {
 const pathname = usePathname();
 const drawerOpenKey = "drawerOpen";
 const defaultOpen = localStorage.getItem(drawerOpenKey) === "true";
 const [openNav, setOpenNav] = React.useState(true);
 const [checked, setChecked] = React.useState(defaultOpen);

 const handleChange = () => {
  setChecked((prev) => !prev);
 };

 const handlePathnameChange = useCallback(() => {
  if (openNav) {
   setOpenNav(false);
  }
 }, [openNav]);

 useEffect(
  () => {
   handlePathnameChange();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [pathname]
 );

 useEffect(() => {
  localStorage.setItem(drawerOpenKey, checked);
 }, [checked]);

 const theme = useTheme();

 return (
  <Box
   sx={{
    display: "grid",
    gridTemplateColumns: checked ? "280px 1fr" : "64px 1fr",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `'aside header' 'aside main' 'aside footer'`,
    height: "100vh",
    transition: "grid-template-columns 600ms ease",
   }}
  >
   <Box
    component="aside"
    sx={{
     gridArea: "aside",
     bgcolor: theme.palette.primary.main,
     width: checked ? 280 : 64,
     transition: "width 600ms ease",
    }}
   >
    <Collapse
     orientation="horizontal"
     in={checked}
     collapsedSize={64}
     sx={{
      width: "100%",
      transitionDelay: "300ms",
      ".MuiCollapse-wrapper, .MuiCollapse-wrapperInner": {
       width: "100%",
      },
     }}
    >
     <Aside collapseActive={checked} />
    </Collapse>
   </Box>
   <Box component="header" sx={{ gridArea: "header", p: "20px 0" }}>
    <Zoom
     in={!checked}
     style={{
      transitionDelay: "200ms",
     }}
    >
     <Box mt={0} position="absolute" left={25} zIndex={999}>
      <Image
       width={50}
       height={53}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      />
     </Box>
    </Zoom>
    <Header />
   </Box>
   <Box
    component="main"
    bgcolor={theme.palette.primary.light}
    gridArea="main"
    p="42px"
    position="relative"
    sx={{ borderTopLeftRadius: "50px", transition: "all 600ms ease" }}
   >
    <Stack
     borderRadius="50%"
     bgcolor={theme.palette.primary.main}
     justifyContent="center"
     alignItems="center"
     position="absolute"
     top="47px"
     left="-12px"
     onClick={handleChange}
     width="27px"
     height="27px"
     border="3px solid"
     borderColor={theme.palette.primary.light}
     sx={{ cursor: "pointer" }}
    >
     <Icon
      baseClassName="fas"
      className={`fa-chevron-right`}
      sx={{
       fontSize: "12px",
       color: "white",
       transform: checked ? "rotate(180deg)" : "rotate(0deg)",
       transition: "all 1s ease",
      }}
     />
    </Stack>
    {children}
   </Box>
   <Stack
    component="footer"
    sx={{ gridArea: "footer", bgcolor: theme.palette.primary.light }}
    direction="column"
    justifyContent="center"
    px={4}
   >
    <Divider variant="middle" sx={{ bgcolor: grey[200], m: 0, width: 160 }} />
    <Footer />
   </Stack>
  </Box>
 );
};
