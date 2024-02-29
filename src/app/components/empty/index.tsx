import React from "react";
import { Stack, Typography } from "@mui/material";

export default function EmptyState({
 title,
 description,
 icon,
}: {
 title: string;
 description?: React.ReactNode;
 icon?: React.ReactNode;
}) {
 return (
  <Stack
   width="100%"
   minHeight="400px"
   justifyContent="center"
   alignItems="center"
  >
   <Stack alignItems="center">
    {icon}
    <Typography
     component="h2"
     fontWeight="600"
     fontSize="16px"
     textTransform="capitalize"
     mt={2}
    >
     {title}
    </Typography>
    <Typography component="p" fontSize="14px" mt={1}>
     {description}
    </Typography>
   </Stack>
  </Stack>
 );
}
