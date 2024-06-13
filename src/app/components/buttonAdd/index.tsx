import React from "react";
import { Button, Icon } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";

export default function AddButton({
 title,
 url,
 filled,
 small,
 noMargin,
 onclick,
 sx,
 startIcon,
 fullWidth,
}: {
 title: string;
 url?: string;
 filled?: boolean;
 small?: boolean;
 noMargin?: boolean;
 onclick?: () => void;
 sx?: React.CSSProperties;
 startIcon?: React.ReactNode;
 fullWidth?: boolean;
}) {
 const buttonAdd = (
  <Button
   fullWidth={fullWidth}
   variant={filled ? "contained" : "outlined"}
   size={small ? "small" : "medium"}
   startIcon={
    startIcon ? (
     startIcon
    ) : (
     <Icon
      baseClassName="fas"
      className={`fa-plus-circle`}
      sx={{
       fontSize: small ? "16px !important" : "18px",
      }}
     />
    )
   }
   sx={{
    ...sx,
    mx: noMargin ? 0 : 1,
    borderRadius: "50px",
    minHeight: 30,
    lineHeight: 1,
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    "&:hover": {
     bgcolor: blue[800],
     color: "white",
    },
   }}
   onClick={onclick}
  >
   {title}
  </Button>
 );

 return (
  <>
   {onclick ? (
    buttonAdd
   ) : (
    <Link href={`${url}`} style={{ width: fullWidth ? "100%" : "auto" }}>
     {buttonAdd}
    </Link>
   )}
  </>
 );
}
