"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import { Box, Icon, Tab, Tabs, Typography } from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import TabInformasi from "../profil-risiko/analisis-risiko/partials/tabInformasi";
import TabTable from "../profil-risiko/analisis-risiko/partials/tabTable";
import { IconFA } from "@/components/icons/icon-fa";
import TabLatarBelakang from "./partials/tabLatarBelakang";
import TabDeskripsi from "./partials/tabDeskripsi";
import TabPendanaan from "./partials/tabPendanaan";
import TabDampak from "./partials/tabDampak";

interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
}

function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
}

function CustomTabPanel(props: TabPanelProps) {
 const { children, value, index, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box
     sx={{
      p: 0,
      mt: 2,
      height: "calc(100vh - 344px)",
      overflow: "auto",
      "&::-webkit-scrollbar": {
       width: "3px",
      },
     }}
    >
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

export default function PageExecutiveSummary({}) {
 const [value, setValue] = React.useState(0);

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };
 const isEmpty = false;

 return (
  <DashboardLayout>
   <ContentPage title="Executive Summary" overflowHidden chooseProject>
    {isEmpty ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Executive Summary Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
       <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabel Analisis"
        sx={{
         ".MuiTabs-flexContainer": {
          gap: 1,
         },
         button: {
          p: 2,
          px: 3,
          my: 2,
          gap: 1,
          minHeight: 0,
          bgcolor: grey[300],
          borderRadius: 2,
          "&.Mui-selected": {
           bgcolor: theme.palette.primary.main,
           color: "white",
          },
         },
        }}
       >
        <Tab
         label="Latar Belakang"
         {...a11yProps(0)}
         iconPosition="start"
         icon={<IconFA size={16} name="pen-to-square" />}
        />
        <Tab
         label="Deskripsi & Status"
         {...a11yProps(1)}
         iconPosition="start"
         icon={<IconFA size={16} name="file-lines" />}
        />
        <Tab
         label="Pendanaan"
         {...a11yProps(3)}
         iconPosition="start"
         icon={<IconFA size={16} name="hand-holding-dollar" />}
        />
        <Tab
         label="Dampak & Roadmap"
         {...a11yProps(4)}
         iconPosition="start"
         icon={<IconFA size={16} name="road" />}
        />
       </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <TabLatarBelakang />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <TabDeskripsi />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <TabPendanaan />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <TabDampak />
      </CustomTabPanel>
     </Box>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
