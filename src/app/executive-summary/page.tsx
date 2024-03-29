"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import {
 Box,
 Collapse,
 FormControl,
 MenuItem,
 SelectChangeEvent,
 Tab,
 Tabs,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/components/icons/icon-fa";
import TabLatarBelakang from "./partials/tabLatarBelakang";
import TabDeskripsi from "./partials/tabDeskripsi";
import TabPendanaan from "./partials/tabPendanaan";
import TabDampak from "./partials/tabDampak";
import TabProfil from "./partials/tabProfil";
import TabPolicy from "./partials/tabPolicy";
import TabOverall from "./partials/tabOverall";
import SelectCustomTheme from "../components/select";

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
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };
 const isEmpty = false;

 return (
  <DashboardLayout>
   <ContentPage
    title="Executive Summary"
    overflowHidden
    withCard={project !== "1"}
    chooseProjectPage={
     <FormControl size="small">
      <SelectCustomTheme small value={project} onChange={handleChangeProject}>
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Kegiatan Pembangunan (KP)
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        KP.02 - Penurunan stunting
       </MenuItem>
       <MenuItem value="2">KP.03 - Peningkatan pelayanan kesehatan...</MenuItem>
       <MenuItem value="3">KP.04 - Penyediaan Akses Terhadap Rumah...</MenuItem>
      </SelectCustomTheme>
     </FormControl>
    }
   >
    {project !== "1" ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Executive Summary Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : null}
    <Collapse in={project === "1"}>
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
          lineHeight: 1,
          "&.Mui-selected": {
           bgcolor: theme.palette.primary.main,
           color: "white",
          },
         },
        }}
       >
        <Tab
         label="Latar Belakang Proyek"
         {...a11yProps(0)}
         iconPosition="start"
         icon={<IconFA size={16} name="pen-to-square" />}
        />
        <Tab
         label="Profil Proyek/KP"
         {...a11yProps(1)}
         iconPosition="start"
         icon={<IconFA size={16} name="address-card" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Policy Brief"
         {...a11yProps(2)}
         iconPosition="start"
         icon={<IconFA size={16} name="file-shield" sx={{ width: "auto" }} />}
        />
        <Tab
         label="Overall Risk"
         {...a11yProps(3)}
         iconPosition="start"
         icon={<IconFA size={16} name="rotate" sx={{ width: "auto" }} />}
        />
       </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <TabLatarBelakang />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       {/* <TabDeskripsi /> */}
       <TabProfil />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       {/* <TabPendanaan /> */}
       <TabPolicy />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={3}>
      <TabDampak />
     </CustomTabPanel> */}
      <CustomTabPanel value={value} index={3}>
       <TabOverall />
      </CustomTabPanel>
     </Box>
    </Collapse>
   </ContentPage>
  </DashboardLayout>
 );
}
