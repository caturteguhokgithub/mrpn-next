import React from "react";
import { Box, ToggleButton, Typography } from "@mui/material";
import theme from "@/theme";
import { green, grey, red, yellow } from "@mui/material/colors";

export default function CustomToggleButton({
 value,
 label,
 code,
 variant,
}: {
 value: string;
 label: string;
 code: string;
 variant?: string;
}) {
 const conditionColor =
  variant === "danger"
   ? `${red[700]} !important`
   : variant === "warning"
   ? `${yellow[800]} !important`
   : variant === "success"
   ? `${green[700]} !important`
   : theme.palette.primary.main;

 return (
  <ToggleButton
   value={value}
   aria-label={label}
   sx={{
    p: 0,
    justifyContent: "flex-start",
    color: theme.palette.primary.main,
    borderRadius: "12px !important",
    border: `1px solid ${theme.palette.primary.main}`,
    borderLeftColor: `${theme.palette.primary.main} !important`,
    "&.Mui-selected": {
     bgcolor: conditionColor,
     border: `1px solid ${conditionColor}`,
     ".MuiBox-root": {
      bgcolor: conditionColor,
     },
    },
   }}
  >
   <Box
    component="span"
    px={2}
    py={1.5}
    bgcolor={grey[200]}
    sx={{
     borderStartStartRadius: "12px",
     borderEndStartRadius: "12px",
    }}
   >
    {code}
   </Box>
   <Typography px={2} component="span" fontWeight={600}>
    {label}
   </Typography>
  </ToggleButton>
 );
}
