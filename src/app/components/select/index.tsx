import React from "react";
import { Select } from "@mui/material";
import theme from "@/theme";

export default function SelectCustomTheme({
 value,
 children,
 onChange,
 defaultStyle,
 small,
 anchorRight,
}: {
 value: string;
 children: React.ReactNode;
 //  onChange?: () => void | any;
 onChange?: any;
 defaultStyle?: boolean;
 small?: boolean;
 anchorRight?: boolean;
}) {
 return (
  <Select
   size={small ? "small" : "medium"}
   value={value}
   onChange={onChange}
   displayEmpty
   inputProps={{
    PaperProps: {
     sx: {
      "& .MuiMenuItem-root": {
       padding: 2,
      },
     },
    },
   }}
   MenuProps={{
    anchorOrigin: {
     vertical: "bottom",
     horizontal: anchorRight ? "right" : "left",
    },
    transformOrigin: {
     vertical: "top",
     horizontal: anchorRight ? "right" : "left",
    },
    PaperProps: {
     sx: {
      li: {
       fontSize: 14,
      },
     },
    },
   }}
   sx={{
    ".MuiSelect-icon": {
     color: defaultStyle ? "inherit" : "white",
    },
    "&.MuiInputBase-root": {
     fontSize: defaultStyle ? "inherit" : 14,
     py: 0,
     borderRadius: defaultStyle ? 2 : 6,
     border: 0,
     bgcolor: defaultStyle ? "inherit" : theme.palette.primary.main,
     color: defaultStyle ? "inherit" : theme.palette.primary.light,
    },
   }}
  >
   {children}
  </Select>
 );
}
