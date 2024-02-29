import React from "react";
import { Button, Icon } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";

export default function AddButton({
 title,
 url,
}: {
 title: string;
 url?: string;
}) {
 return (
  <Link href={`${url}`}>
   <Button
    variant="outlined"
    startIcon={
     <Icon
      baseClassName="fas"
      className={`fa-plus-circle`}
      sx={{
       fontSize: 2,
      }}
     />
    }
    sx={{
     borderRadius: "50px",
     "&:hover": {
      bgcolor: blue[800],
      color: "white",
     },
    }}
   >
    {title}
   </Button>
  </Link>
 );
}
