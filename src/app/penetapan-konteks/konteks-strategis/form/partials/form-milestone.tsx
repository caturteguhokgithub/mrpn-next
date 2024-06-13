import React from "react";
import {
 FormControl,
 Grid,
 Input,
 InputAdornment,
 OutlinedInput,
 TextField,
 Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function FormMilestone({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Program/Kegiatan</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Program/Kegiatan"
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
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Sumber Anggaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sumber Anggaran"
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
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Penanggung Jawab</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Penanggung Jawab"
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
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Waktu Mulai Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Waktu Penyelesaian Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Progress</Typography>
      {mode === "add" ? (
       <OutlinedInput
        type="text"
        size="small"
        placeholder="Progress"
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
        inputProps={{
         "aria-label": "percentage",
        }}
       />
      ) : mode === "edit" ? (
       <OutlinedInput
        type="text"
        size="small"
        value="57"
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
        inputProps={{
         "aria-label": "percentage",
        }}
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
