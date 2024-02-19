"use client";

import { Grid, Icon, Paper, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import { logoBlue, logoBrown, logoGreen, logoOrange } from "@/app/utils/color";
import DashboardLayout from "@/app/components/layouts/layout";
import ContentPage from "@/app//components/contents/content";
import Head from "next/head";

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

export default function PageDashboardPartial({}) {
 return (
  <>
   <DashboardLayout>
    <ContentPage title="dashboard">
     <Paper elevation={3} sx={{ borderRadius: "1.25rem", p: "1.5rem" }}>
      <Grid container gap={3} flexWrap="nowrap">
       <CardValue
        iconName="square-poll-vertical"
        color={logoOrange}
        value="47"
        title="Total Nilai Risiko"
        total="Jumlah Risiko: 12"
       />
       <CardValue
        iconName="layer-group"
        color={logoBrown}
        value="75.00%"
        title="Rencana Mitigasi"
       />
       <CardValue
        iconName="road"
        color={logoGreen}
        value="9.09%"
        title="Realisasi Mitigasi"
       />
       <CardValue
        iconName="server"
        color={logoBlue}
        value="8.51%"
        title="Impact Mitigasi"
       />
      </Grid>
     </Paper>
    </ContentPage>
   </DashboardLayout>
  </>
 );
}
