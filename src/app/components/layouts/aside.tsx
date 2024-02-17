// "use client";

import React, { useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { blue } from "@mui/material/colors";

type ILayout = {
 children?: React.ReactNode;
};

type IMenu = {
 label?: string | any;
 icon?: string;
 url?: string;
 reflect?: boolean;
 isExpanded?: boolean;
};

const MenuGroup = ({ label, children, isExpanded }: IMenu & ILayout) => {
 return (
  <List
   component="nav"
   subheader={
    <ListSubheader
     component="div"
     sx={{
      bgcolor: "transparent",
      mb: "1rem",
      mx: isExpanded ? "24px" : 0,
     }}
    >
     <Typography
      fontSize="11px"
      color="white"
      textTransform="uppercase"
      sx={{ opacity: 0.5 }}
     >
      {isExpanded ? (
       label
      ) : (
       <>{label.length >= 5 ? label.substr(0, 5) + "..." : label}</>
      )}
     </Typography>
    </ListSubheader>
   }
  >
   {children}
  </List>
 );
};

const MenuItem = ({ label, icon, url, reflect, isExpanded }: IMenu) => {
 const pathname = usePathname();

 return (
  <>
   <Link href={`/${url}`} passHref>
    <ListItemButton
     selected={
      typeof window !== "undefined"
       ? window.location.pathname === `/${url}`
       : false
     }
     className={pathname == `/${url}` ? "link-active" : ""}
     sx={{
      // isCollapsed
      px: "22px",
      gap: "6px",
      borderRadius: 0,
      mx: 0,
      display: "flex",
      flexDirection: "column",
      transition: "all 300ms ease",
      "&.Mui-selected, &.link-active": {
       backgroundColor: theme.palette.primary.light,
       border: 0,
       cursor: "default",
       ".MuiIcon-root, p": {
        color: theme.palette.primary.main,
       },
       "&.Mui-focusVisible, &:hover": {
        backgroundColor: theme.palette.primary.light,
        ".MuiIcon-root, p": {
         color: theme.palette.primary.main,
        },
       },
      },
      "&.Mui-focusVisible, &:hover": {
       backgroundColor: alpha(blue[900], 0.5),
       ".MuiIcon-root, p": {
        color: theme.palette.primary.light,
       },
      },

      ...(isExpanded && {
       gap: 2,
       borderRadius: "50px",
       mx: "20px",
       flexDirection: "row",
       ".MuiIcon-root, p": {
        color: theme.palette.primary.light,
       },
       "&.Mui-selected, &.link-active": {
        backgroundColor: alpha(whiteRGB, 0.2),
        border: "1px solid white",
        transition: "all 1s ease",
        "&.Mui-focusVisible, &:hover": {
         backgroundColor: alpha(whiteRGB, 0.2),
         ".MuiIcon-root": {
          color: theme.palette.primary.light,
         },
         p: {
          color: theme.palette.primary.light,
         },
        },
       },
       "&.Mui-focusVisible, &:hover": {
        backgroundColor: alpha(blue[900], 0.5),
        ".MuiIcon-root": {
         color: theme.palette.primary.light,
        },
        p: {
         color: theme.palette.primary.light,
        },
       },
      }),

      // "&.Mui-selected": {
      //  backgroundColor: isExpanded
      //   ? alpha(whiteRGB, 0.2)
      //   : theme.palette.primary.light,
      //  border: isExpanded ? "1px solid white" : 0,
      //  transition: "all 1s ease",
      //  ".MuiIcon-root, p": {
      //   color: isExpanded
      //    ? theme.palette.primary.light
      //    : theme.palette.primary.main,
      //  },
      //  "&.Mui-focusVisible, &:hover": {
      //   backgroundColor: isExpanded ? "transparent" : alpha(whiteRGB, 0.2),
      //   ".MuiIcon-root": {
      //    color: theme.palette.primary.light,
      //   },
      //   p: {
      //    color: theme.palette.primary.light,
      //   },
      //  },
      // },
      // "&.Mui-focusVisible, &:hover": {
      //  backgroundColor: isExpanded
      //   ? "#146dab"
      //   : theme.palette.primary.light,
      //  ".MuiIcon-root": {
      //   color: isExpanded
      //    ? theme.palette.primary.light
      //    : theme.palette.primary.main,
      //  },
      //  p: {
      //   // color: "red",
      //   color: isExpanded
      //    ? theme.palette.primary.light
      //    : theme.palette.primary.main,
      //  },
      // },
     }}
    >
     <ListItemIcon sx={{ minWidth: 0 }}>
      <Icon
       baseClassName="fas"
       className={`fa-${icon}`}
       sx={{
        fontSize: "18px",
        color: isExpanded
         ? theme.palette.primary.main
         : theme.palette.primary.light,
        width: "auto",
        height: "auto",
        transform: reflect ? "rotate(180deg)" : null,
       }}
      />
     </ListItemIcon>
     <ListItemText sx={{ textTransform: "capitalize", my: isExpanded ? 1 : 0 }}>
      <Typography
       fontSize={isExpanded ? "14px" : "8px"}
       textAlign={isExpanded ? "left" : "center"}
       lineHeight={isExpanded ? "1.5" : "1.3"}
      >
       {label}
      </Typography>
     </ListItemText>
    </ListItemButton>
   </Link>
  </>
 );
};

export default function Aside({ isExpanded }: { isExpanded?: boolean }) {
 const [open, setOpen] = React.useState(false);

 return (
  <Box color="white" px="0" height="100vh" pb={4}>
   <Stack
    width="100%"
    height="120px"
    alignItems="center"
    justifyContent="center"
    direction="row"
   >
    <Collapse in={isExpanded}>
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
    <Stack
     gap="40px"
     direction="column"
     sx={
      {
       // ".MuiIcon-root, p": {
       //  color: theme.palette.primary.light,
       // },
       // ".link-active": {
       //  backgroundColor: isExpanded
       //   ? alpha(whiteRGB, 0.2)
       //   : theme.palette.primary.light,
       //  border: isExpanded ? "1px solid white" : 0,
       //  transition: "all 1s ease",
       //  ".MuiIcon-root, p": {
       //   color: isExpanded
       //    ? theme.palette.primary.light
       //    : theme.palette.primary.main,
       //  },
       // },
       // ".Mui-selected.link-active": {
       //  ".MuiIcon-root, p": {
       //   color: isExpanded
       //    ? theme.palette.primary.light
       //    : theme.palette.primary.main,
       //  },
       // },
      }
     }
    >
     <MenuGroup isExpanded={isExpanded} label="menu">
      <Stack direction="column" gap={1}>
       <MenuItem
        isExpanded={isExpanded}
        label="dashboard"
        icon="border-all"
        url=""
       />
       <MenuItem
        isExpanded={isExpanded}
        label="Executive Summary"
        icon="book"
        url="exsum"
       />
       <MenuItem
        isExpanded={isExpanded}
        label="konteks strategis"
        icon="receipt"
        url="konstra"
       />
       <MenuItem
        isExpanded={isExpanded}
        label="Mitigasi Risiko"
        icon="calculator"
        url="mitigasi-risiko"
       />
       <MenuItem
        isExpanded={isExpanded}
        label="Summary"
        icon="clipboard-check"
        url="summary"
       />
      </Stack>
     </MenuGroup>
     <MenuGroup isExpanded={isExpanded} label="administrator">
      <Stack direction="column" gap={1}>
       <MenuItem
        isExpanded={isExpanded}
        label="manajemen user"
        icon="user-gear"
        url="manajemen-user"
       />
      </Stack>
     </MenuGroup>
    </Stack>
    <MenuItem
     isExpanded={isExpanded}
     reflect
     label="keluar sistem"
     icon="arrow-right-from-bracket"
     url="logout"
    />
   </Stack>
  </Box>
 );
}
