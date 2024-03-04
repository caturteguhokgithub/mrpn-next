import React from "react";
import { Select } from "@mui/material";
import theme from "@/theme";

export default function SelectCustomTheme({
 value,
 children,
 onChange,
}: {
 value: string;
 children: React.ReactNode;
 //  onChange?: () => void | any;
 onChange?: any;
}) {
 return (
  <Select
   value={value}
   onChange={onChange}
   displayEmpty
   inputProps={{
    PaperProps: {
     sx: {
      bgcolor: "pink",
      "& .MuiMenuItem-root": {
       padding: 2,
      },
     },
    },
   }}
   MenuProps={{
    anchorOrigin: {
     vertical: "bottom",
     horizontal: "left",
    },
    transformOrigin: {
     vertical: "top",
     horizontal: "left",
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
     color: "white",
    },
    "&.MuiInputBase-root": {
     fontSize: 14,
     py: 0,
     borderRadius: 6,
     border: 0,
     bgcolor: theme.palette.primary.main,
     color: theme.palette.primary.light,
    },
   }}
  >
   {children}
  </Select>
 );
}
