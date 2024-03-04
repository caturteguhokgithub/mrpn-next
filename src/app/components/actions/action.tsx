import React from "react";
import { Icon, IconButton, Link, Stack } from "@mui/material";
import theme from "@/theme";
import { blue, green, red } from "@mui/material/colors";
import { IconFA } from "../icons/icon-fa";

export default function ActionColumn({
 editUrl,
 viewUrl,
}: //  table,
//  row,
{
 editUrl?: string;
 viewUrl?: string;
 //  table: string;
 //  row: string;
}) {
 return (
  <Stack direction="row" justifyContent="flex-end" width="100%" gap={1}>
   {viewUrl && (
    <Link href={viewUrl}>
     <IconButton
      aria-label="edit"
      color="primary"
      sx={{
       bgcolor: green[600],
       color: "white",
       transition: "all 300ms",
       "&:hover": {
        bgcolor: green[800],
       },
      }}
     >
      <IconFA size={14} name="eye" />
     </IconButton>
    </Link>
   )}
   <Link href={editUrl}>
    <IconButton
     aria-label="edit"
     color="primary"
     sx={{
      bgcolor: theme.palette.primary.main,
      color: "white",
      transition: "all 300ms",
      "&:hover": {
       bgcolor: blue[800],
      },
     }}
    >
     <IconFA size={14} name="pencil" />
    </IconButton>
   </Link>
   <IconButton
    aria-label="edit"
    color="error"
    sx={{
     bgcolor: red[600],
     color: "white",
     transition: "all 300ms",
     "&:hover": {
      bgcolor: red[800],
     },
    }}
   >
    <IconFA size={14} name="trash" />
   </IconButton>
  </Stack>
 );
}
