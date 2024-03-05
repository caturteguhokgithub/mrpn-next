import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Breadcrumbs,
 Chip,
 Divider,
 FormControl,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
// import TableSasaranPkppr from "./partials/table-sasaran-pkkpr";
import TableSasaran from "./table-sasaran-global";
import TableRincianOutput from "./table-ro";
import TableMilestone from "./table-milestone";
import TableStakeholder from "./table-stakeholder";
import TablePeraturan from "./table-peraturan";
import Link from "next/link";

export default function FormKonstra({ mode }: { mode?: string }) {
 return (
  <DashboardLayout>
   <ContentPage
    title="Formulir Penetapan Konteks"
    withCard
    heightTitleBreadcrumb
    titleChild={
     <Chip
      color="primary"
      variant="outlined"
      label="KP-03 - Kawasan Industri Prioritas dan Smelter"
      sx={{ bgcolor: "white", fontWeight: 600, lineHeight: 1 }}
     />
    }
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb">
      <Typography fontSize="12px">Penetapan Konteks</Typography>
      <Link href="/penetapan-konteks/konteks-strategis">
       <Typography fontSize="12px">Konteks Strategis</Typography>
      </Link>
     </Breadcrumbs>
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
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Nama PKPPR"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Periode Penerapan</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Periode Penerapan"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography>Latar Belakang</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Latar Belakang"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableSasaran mode={mode} />
    {/* <Divider sx={{ my: 3 }} />
    <TableSasaran variant="PN" />
    <Divider sx={{ my: 3 }} />
    <TableSasaranPkppr /> */}
    <Divider sx={{ my: 3 }} />
    <Grid container spacing={2}>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography>Ruang Lingkup</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Ruang Lingkup"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Lokasi</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Lokasi"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography>Tahun Anggaran</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Tahun Anggaran"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableRincianOutput mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableMilestone mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableStakeholder mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TablePeraturan mode={mode} />
   </ContentPage>
  </DashboardLayout>
 );
}
