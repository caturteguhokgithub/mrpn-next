"use client";

// const SIDE_NAV_WIDTH = 280;

// const LayoutRoot = styled("div")(({ theme }) => ({
//  display: "flex",
//  flex: "1 1 auto",
//  maxWidth: "100%",
//  [theme.breakpoints.up("lg")]: {
//   paddingLeft: SIDE_NAV_WIDTH,
//  },
// }));

// const LayoutContainer = styled("div")({
//  display: "flex",
//  flex: "1 1 auto",
//  flexDirection: "column",
//  width: "100%",
// });

// const Page = () => (
//  <>
//   <LayoutRoot>
//    <LayoutContainer>Page stream</LayoutContainer>
//   </LayoutRoot>
//  </>
// );

// Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

// export default Page;

import Content from "@/app/components/content/page";
import { Grid, Icon, Paper, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import { logoBlue, logoBrown, logoGreen, logoOrange } from "@/app/utils/color";
import { DashboardLayout } from "../components/layouts/page";

type ICard = {
 iconName: string;
 color: string;
 value: string;
 total?: string;
 title: string;
};

const CardValue = ({ iconName, color, value, total, title }: ICard) => {
 return (
  <Grid
   item
   p="1.25rem"
   height="140px"
   width="100%"
   md={3}
   borderRadius="16px"
   bgcolor={alpha(color, 0.2)}
   border={`1px solid ${color}`}
  >
   <Stack direction="column" justifyContent="space-between" height="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
     <Stack
      bgcolor={color}
      width="40px"
      height="40px"
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
     >
      <Icon
       baseClassName="fas"
       className={`fa-${iconName}`}
       sx={{ fontSize: "18px", color: "white" }}
      />
     </Stack>
     <Typography
      component="span"
      fontSize="2rem"
      fontWeight={600}
      color={color}
     >
      {value}
     </Typography>
    </Stack>
    <Stack direction="column">
     {total ? (
      <Typography color={color} fontSize="12px" fontWeight="500">
       {total}
      </Typography>
     ) : null}
     <Typography fontSize="16px" textTransform="capitalize">
      {title}
     </Typography>
    </Stack>
   </Stack>
  </Grid>
 );
};

const PageKonstra = (props: any) => {
 return (
  <DashboardLayout>
   <Content title="konteks strategis">konteks strategis</Content>
  </DashboardLayout>
 );
};

export default PageKonstra;
