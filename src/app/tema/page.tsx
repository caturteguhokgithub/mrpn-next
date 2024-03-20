"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 ToggleButtonGroup,
 Typography,
 alpha,
 Collapse,
 Box,
 Divider,
 Checkbox,
 FormControlLabel,
 FormGroup,
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import CustomToggleButton from "@/components/toggleButton";

const ToggleContentTema = ({ children }: { children?: React.ReactNode }) => {
 return (
  <>
   <Divider sx={{ my: 2 }} />
   <Typography mt={2} color={grey[600]} fontSize={14} fontStyle="italic">
    Pilih KP
   </Typography>
   <Box mt={2}>
    <FormGroup>{children}</FormGroup>
   </Box>
  </>
 );
};

export default function PageTema({}) {
 const [valueTheme, setValueTheme] = React.useState<string | null>("");

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | null
 ) => {
  setValueTheme(newAlignment);
 };

 const isEmpty = false;

 return (
  <DashboardLayout>
   <ContentPage title="Tema" withCard>
    {isEmpty ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Tema Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <Typography color={grey[600]} fontSize={14} fontStyle="italic">
       Pilih salah satu tema
      </Typography>
      <ToggleButtonGroup
       value={valueTheme}
       exclusive
       onChange={handleAlignment}
       aria-label="text alignment"
       sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 2,
        mt: 2,
        button: {
         "&:hover": {
          bgcolor: alpha(theme.palette.primary.main, 0.1),
         },
         "&.Mui-selected": {
          bgcolor: theme.palette.primary.main,
          color: "white",
          ".MuiBox-root": {
           bgcolor: theme.palette.primary.main,
           color: "white",
           borderRight: "1px solid white",
          },
          "&:hover": {
           bgcolor: theme.palette.primary.main,
           color: "white",
          },
         },
        },
       }}
      >
       <CustomToggleButton
        code="01.01.02"
        value="penurunan-stunting"
        label="Penurunan Stunting"
       />
       <CustomToggleButton
        code="01.01.03"
        value="penurunan-kemiskinan"
        label="Penurunan Kemiskinan"
       />
       <CustomToggleButton
        code="01.01.04"
        value="percepatan-transisi-energi"
        label="Percepatan Transisi Energi"
       />
       <CustomToggleButton
        code="01.01.05"
        value="peningkatan-pariwisata"
        label="Peningkatan Pariwisata"
       />
       <CustomToggleButton
        code="01.01.06"
        value="ketahanan-pangan"
        label="Ketahanan Pangan"
       />
       <CustomToggleButton
        code="01.01.07"
        value="sistem-persampahan"
        label="Sistem Persampahan"
       />
      </ToggleButtonGroup>
      <Collapse in={valueTheme === "penurunan-stunting"}>
       <ToggleContentTema>
        <FormControlLabel
         control={<Checkbox />}
         label="KP-01 - Industri 4.0 di 6 Subsektor Prioritas"
        />
        <FormControlLabel
         control={<Checkbox />}
         label="KP-02 - Destinasi Pariwisata Prioritas"
        />
        <FormControlLabel
         control={<Checkbox />}
         label="KP-03 - Kawasan Industri Prioritas dan Smelter"
        />
       </ToggleContentTema>
      </Collapse>
     </>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
