import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";

export default function FormTable({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Sasaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sasaran"
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
     <Divider>
      <Chip label="Indikator Sasaran" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Uraian</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Uraian"
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
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Target</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Target"
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
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Fisik</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Fisik"
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
     <Divider />
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Kategori Risiko MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Kategori Risiko MRPN Linsek"
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
      <Typography>Pemilik Risiko MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Pemilik Risiko MRPN Linsek"
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
      <Typography>Peristiwa Risiko Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Peristiwa Risiko Strategis MRPN Linsek"
        placeholder="Peristiwa Risiko Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Peristiwa Risiko Strategis MRPN Linsek"
        placeholder="Peristiwa Risiko Strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Penyebab/Faktor Risiko Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Dampak Strategis MRPN Linsek</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Dampak Strategis MRPN Linsek"
        placeholder="Dampak Strategis MRPN Linsek"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Dampak Strategis MRPN Linsek"
        placeholder="Dampak Strategis MRPN Linsek"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
