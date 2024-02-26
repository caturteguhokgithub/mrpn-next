/* eslint-disable @next/next/no-img-element */
"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 Stack,
 TextField,
 Typography,
} from "@mui/material";

export default function PageFormKonteksStrategis({}) {
 return (
  <DashboardLayout>
   <ContentPage
    title="Formulir Penetapan Konteks"
    withCard
    titleChild={
     <Chip
      color="primary"
      variant="outlined"
      label="KP-03 - Kawasan Industri Prioritas dan Smelter"
     />
    }
   >
    <Typography
     component="h2"
     fontWeight="600"
     fontSize="1.1rem"
     textTransform="capitalize"
     mb="2rem"
    >
     Konteks Manajemen Risiko
    </Typography>
    <Grid container spacing={2}>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Nama PKPPR</Typography>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Nama PKPPR"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Periode Penerapan</Typography>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Periode Penerapan"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </FormControl>
     </Grid>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography>Latar Belakang</Typography>
       <TextField
        variant="outlined"
        size="small"
        multiline
        rows={4}
        placeholder="Latar Belakang"
       />
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <Typography>Sasaran KP</Typography>
    <Divider sx={{ my: 3 }} />
    <Grid container spacing={2}>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Ruang Lingkup</Typography>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Ruang Lingkup"
        fullWidth
        InputLabelProps={{
         shrink: true,
        }}
       />
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Lokasi</Typography>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Lokasi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Tahapan</Typography>
       <TextField
        variant="outlined"
        size="small"
        multiline
        rows={4}
        placeholder="Tahapan"
       />
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Latar Belakang</Typography>
       <TextField
        variant="outlined"
        size="small"
        multiline
        rows={4}
        placeholder="Latar Belakang"
       />
      </FormControl>
     </Grid>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography>Anggaran</Typography>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Anggaran"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
   </ContentPage>
  </DashboardLayout>
 );
}
