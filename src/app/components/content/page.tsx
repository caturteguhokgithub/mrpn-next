"use client";

import { Box, Typography } from "@mui/material";

type IContent = {
 title: string;
 children?: React.ReactNode;
};

const Content = ({ title, children }: IContent) => {
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
};

export default Content;
