"use client";

import { whiteRGB } from "@/app/utils/color";
import theme from "@/theme";
import {
 ListItemIcon,
 ListItemText,
 Typography,
 Icon,
 Box,
 List,
 ListItemButton,
 ListSubheader,
 Stack,
 alpha,
 Collapse,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { Link, Route, Router, Routes } from "react-router-dom";

type ILayout = {
 children?: React.ReactNode;
};

type IMenu = {
 label?: string | any;
 icon?: string;
 url?: string;
 reflect?: boolean;
 collapseActive?: boolean;
};

const MenuGroup = ({ label, children, collapseActive }: IMenu & ILayout) => {
 //  const ellipsisText = label;
 return (
  <List
   component="nav"
   subheader={
    <ListSubheader
     component="div"
     sx={{
      bgcolor: "transparent",
      mb: "1rem",
      mx: collapseActive ? "20px" : 0,
     }}
    >
     <Typography
      fontSize="11px"
      color="white"
      textTransform="uppercase"
      sx={{ opacity: 0.5 }}
     >
      {collapseActive ? (
       label
      ) : (
       <> {label.length >= 5 ? label.substr(0, 5) + "..." : label}</>
      )}
     </Typography>
    </ListSubheader>
   }
  >
   {children}
  </List>
 );
};

const MenuItem = ({ label, icon, url, reflect, collapseActive }: IMenu) => {
 return (
  <>
   {/* <Route path={`/${url}`}> */}
   {/* <Link to={`/${url}`}> */}
   <Link href={`/${url}`}>
    <ListItemButton
     selected={window.location.pathname === `/${url}`}
     // href={`/${url}`}
     sx={{
      px: "22px",
      gap: collapseActive ? 2 : "6px",
      borderRadius: collapseActive ? "50px" : 0,
      mx: collapseActive ? "20px" : 0,
      display: collapseActive ? null : "flex",
      flexDirection: collapseActive ? null : "column",
      ".MuiIcon-root": {
       color: "white",
      },
      "&.Mui-focusVisible, &:hover": {
       backgroundColor: collapseActive
        ? "#146dab"
        : theme.palette.primary.light,
       ".MuiIcon-root": {
        color: collapseActive ? "white" : theme.palette.primary.main,
       },
       p: {
        color: collapseActive
         ? theme.palette.primary.light
         : theme.palette.primary.main,
       },
      },
      "&.Mui-selected": {
       backgroundColor: collapseActive
        ? alpha(whiteRGB, 0.2)
        : theme.palette.primary.light,
       border: collapseActive ? "1px solid white" : 0,
       transition: "all 1s ease",
       p: {
        color: collapseActive
         ? theme.palette.primary.light
         : theme.palette.primary.main,
       },
       ".MuiIcon-root": {
        color: collapseActive ? "white" : theme.palette.primary.main,
       },
       "&.Mui-focusVisible, &:hover": {
        backgroundColor: collapseActive ? "transparent" : alpha(whiteRGB, 0.2),
        ".MuiIcon-root": {
         color: "white",
        },
        p: {
         color: theme.palette.primary.light,
        },
       },
      },
     }}
    >
     <ListItemIcon sx={{ minWidth: 0 }}>
      <Icon
       baseClassName="fas"
       className={`fa-${icon}`}
       sx={{
        fontSize: "18px",
        color: collapseActive ? theme.palette.primary.main : "white",
        width: "auto",
        height: "auto",
        transform: reflect ? "rotate(180deg)" : null,
       }}
      />
     </ListItemIcon>
     <ListItemText
      sx={{ textTransform: "capitalize", my: collapseActive ? 1 : 0 }}
     >
      <Typography
       fontSize={collapseActive ? "14px" : "8px"}
       textAlign={collapseActive ? "left" : "center"}
       lineHeight={collapseActive ? "1.5" : "1.3"}
      >
       {label}
      </Typography>
     </ListItemText>
    </ListItemButton>
   </Link>
   {/* </Link> */}
   {/* </Route> */}
  </>
 );
};

export const Aside = ({ collapseActive }: ILayout & IMenu) => {
 const [display, setDisplay] = useState(false);
 const [open, setOpen] = React.useState(false);
 const [selectedIndex, setSelectedIndex] = React.useState(1);

 const handleListItemClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  index: number
 ) => {
  setSelectedIndex(index);
 };

 const handleClick = () => {
  setOpen(!open);
 };

 function notExpand(e: any) {
  e.stopPropagation();
 }

 return (
  <Box color="white" px="0" height="100vh" pb={4}>
   <Stack
    width="100%"
    height="120px"
    alignItems="center"
    justifyContent="center"
    direction="row"
   >
    <Collapse in={collapseActive}>
     <Stack
      width="100%"
      height="120px"
      alignItems="center"
      justifyContent="center"
      direction="row"
      gap={2}
     >
      <Box
       sx={{
        transition: "all 300ms ease",
       }}
      >
       <Image
        width={64}
        height={68}
        src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
        alt="MRPN 2024"
        priority
       />
      </Box>
      <Typography
       color="white"
       fontSize="14px"
       fontWeight={600}
       variant="caption"
       textTransform="uppercase"
       lineHeight={1.3}
       maxWidth="136px"
      >
       Manajemen Risiko Pembangunan Nasional
      </Typography>
     </Stack>
    </Collapse>
   </Stack>
   <Stack
    direction="column"
    justifyContent="space-between"
    height="calc(100% - 120px)"
   >
    <Stack gap="40px" direction="column">
     <MenuGroup collapseActive={collapseActive} label="menu">
      <Stack direction="column" gap={1}>
       <MenuItem
        collapseActive={collapseActive}
        label="dashboard"
        icon="border-all"
        url=""
       />
       <MenuItem
        collapseActive={collapseActive}
        label="Executive Summary"
        icon="book"
        url="exsum"
       />
       <MenuItem
        collapseActive={collapseActive}
        label="konteks strategis"
        icon="receipt"
        url="konstra"
       />
       <MenuItem
        collapseActive={collapseActive}
        label="Mitigasi Risiko"
        icon="calculator"
        url="mitigasi-risiko"
       />
       <MenuItem
        collapseActive={collapseActive}
        label="Summary"
        icon="clipboard-check"
        url="summary"
       />
      </Stack>
     </MenuGroup>
     <MenuGroup collapseActive={collapseActive} label="administrator">
      <Stack direction="column" gap={1}>
       <MenuItem
        collapseActive={collapseActive}
        label="manajemen user"
        icon="user-gear"
        url="manajemen-user"
       />
      </Stack>
     </MenuGroup>
    </Stack>
    <MenuItem
     collapseActive={collapseActive}
     reflect
     label="keluar sistem"
     icon="arrow-right-from-bracket"
     url="logout"
    />
   </Stack>
  </Box>
 );
};
