"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabInformasi from "./partials/tabInformasi";
import TabTable from "./partials/tabTable";

interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
 noPadding?: boolean;
}

function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
}

function CustomTabPanel(props: TabPanelProps) {
 const { children, value, index, noPadding, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box sx={{ p: noPadding ? 0 : 3 }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}
export default function PageAnalisisRisiko({}) {
 const [value, setValue] = React.useState(0);

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 return (
  <DashboardLayout>
   <ContentPage title="Analisis Risiko" withCard noPadding>
    {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Analisis Risiko Masih Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Box sx={{ width: "100%" }}>
     <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={handleChange} aria-label="Tabel Analisis">
       <Tab label="Tabel" {...a11yProps(0)} />
       <Tab label="Informasi" {...a11yProps(1)} />
      </Tabs>
     </Box>
     <CustomTabPanel value={value} index={0} noPadding>
      <TabTable />
     </CustomTabPanel>
     <CustomTabPanel value={value} index={1}>
      <TabInformasi />
     </CustomTabPanel>
    </Box>
   </ContentPage>
  </DashboardLayout>
 );
}
