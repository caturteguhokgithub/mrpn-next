/* eslint-disable react/display-name */
"use client";

import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
// import { NextPage } from "next";
import React from "react";

// type IContent = {
//  title: string;
//  children?: React.ReactNode;
// };

export interface IContent {
 title: string;
 children?: React.ReactNode;
}

// export default function Content({
//  title,
//  children,
// }: {
//  title: { string: any };
//  children: { [key: string]: string | string[] | undefined };
// }) {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {title}
//    </Typography>
//    {children}
//   </Box>
//  );
// }

// export default function Content(props: IContent) {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {props.title}
//    </Typography>
//    {props.children}
//   </Box>
//  );
// }

// export const ContentPage: NextPage<IContent> = ({ title, children }) => {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {title}
//    </Typography>
//    {children}
//   </Box>
//  );
// };

// export default function ContentPage({
//  title,
//  children,
// }: {
//  children: React.ReactNode;
//  title: string;
// }) {
//  // export default function ContentPage(props: IContent) {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {title}
//    </Typography>
//    {children}
//   </Box>
//  );
// }

// export default ContentPage;

// export default function RootLayout({
//  children,
//  title,
// }: {
//  children: React.ReactNode;
//  title: string;
// }) {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {title}
//    </Typography>
//    {children}
//   </Box>
//  );
// }

// export default function CreateLayout({
//  children,
//  title,
// }: {
//  children: React.ReactNode;
//  title?: string;
// }) {
//  return (
//   <Box>
//    <Typography
//     component="h2"
//     fontWeight="600"
//     fontSize="1.25rem"
//     mb="1.25rem"
//     textTransform="capitalize"
//    >
//     {title}
//    </Typography>
//    {children}
//   </Box>
//  );
// }

let ContentPage;
export default ContentPage = ({ title, children }: IContent) => (
 <>
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
 </>
);
