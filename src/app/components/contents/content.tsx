// "use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContentPage({
 title,
 children,
}: {
 children: React.ReactNode;
 title: string;
}) {
 return (
  <Box>
   <Typography
    component="h2"
    fontWeight="600"
    fontSize="1.25rem"
    mb="1.25rem"
    textTransform="capitalize"
   >
    {title}
   </Typography>
   {children}
  </Box>
 );
}
