import theme from "@/theme";
import { Check } from "@mui/icons-material";
import {
 Avatar,
 Box,
 Button,
 Divider,
 ListItemIcon,
 ListItemText,
 Menu,
 MenuItem,
 MenuList,
 Popover,
 Stack,
 Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { IconKeluar } from "../icons";
import { IconFA } from "../icons/icon-fa";

export default function Header({}) {
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const open = Boolean(anchorEl);
 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "white",
    padding: "0 42px",
    pl: "3rem",
   }}
  >
   <Stack direction="row" justifyContent="space-between" width="100%">
    <Stack direction="column">
     <Typography
      component="h1"
      fontWeight="800"
      fontSize="1.25rem"
      lineHeight={1.2}
     >
      MRPN 2024
     </Typography>
     <Typography
      component="p"
      fontWeight="400"
      fontSize="14px"
      letterSpacing="0.5px"
      lineHeight={1.3}
     >
      National Risk Information System
     </Typography>
     {/* <Typography
      component="h1"
      letterSpacing={4}
      fontSize="1.25rem"
      fontWeight={300}
     >
      BAPPENAS
     </Typography> */}
    </Stack>
    <Button onClick={handleClick} sx={{ p: 0, m: 0, minWidth: 0 }}>
     <Avatar sx={{ bgcolor: "white" }}>
      <IconFA size={16} name="user-tie" color={theme.palette.primary.main} />
     </Avatar>
    </Button>
    <Menu
     anchorEl={anchorEl}
     id="account-menu"
     open={open}
     onClose={handleClose}
     onClick={handleClose}
     PaperProps={{
      elevation: 0,
      sx: {
       overflow: "visible",
       filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
       mt: 1.5,
       "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
       },
       "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
       },
       //
       "&.MuiPaper-root": {
        left: "auto !important",
        right: 44,
        width: 300,
        borderRadius: 3,
        ".MuiList-root": {
         py: 0,
        },
       },
       ".MuiMenuItem-root": {
        py: "10px",
        "&:first-of-type, &:last-of-type": {
         py: 2,
        },
        "&:last-of-type": {
         borderBottomLeftRadius: 12,
         borderBottomRightRadius: 12,
        },
       },
      },
     }}
     transformOrigin={{ horizontal: "right", vertical: "top" }}
     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
     <MenuItem sx={{ py: 2, gap: 1 }}>
      <Avatar
       alt="Administrator"
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
      />
      <ListItemText sx={{ span: { fontWeight: 500 } }}>
       Administrator
      </ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem sx={{ py: 2 }}>
      <ListItemText>Tahun 2021</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2021</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2022</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2023</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2024</ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem
      sx={{
       bgcolor: red[100],
       py: 2,
      }}
     >
      <ListItemIcon>
       <IconKeluar color={red[800]} />
      </ListItemIcon>
      <ListItemText sx={{ color: red[800], span: { fontWeight: 500 } }}>
       Keluar Sistem
      </ListItemText>
     </MenuItem>
    </Menu>
   </Stack>
  </Box>
 );
}
