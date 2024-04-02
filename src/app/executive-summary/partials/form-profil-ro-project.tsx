import React from "react";
import {
 FormControl,
 Grid,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";

export default function FormProfilRoProject({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };
 return (
  <Grid container spacing={2}>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography>Format Kode</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Format Kode"
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
     <Typography>Entitas Utama</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
     ) : mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography>Entitas Kontributor</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Kontributor
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
     ) : mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Kontributor
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
     ) : (
      <Typography fontWeight={600}>-</Typography>
     )}
    </FormControl>
   </Grid>
   <Grid item lg={12}>
    <FormControl fullWidth>
     <Typography>Nomenklatur RO/Project</Typography>
     {mode === "add" ? (
      <SelectCustomTheme
       defaultStyle
       small
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Nomenklatur RO/Project
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
     ) : mode === "edit" ? (
      <SelectCustomTheme
       defaultStyle
       value={project}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Nomenklatur RO/Project
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        -
       </MenuItem>
       <MenuItem value="2">-</MenuItem>
       <MenuItem value="3">-</MenuItem>
      </SelectCustomTheme>
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
     <Typography>Anggaran</Typography>
     {mode === "add" ? (
      <TextField
       variant="outlined"
       size="small"
       placeholder="Anggaran"
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
     <Typography>Sumber Anggaran</Typography>
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
  </Grid>
 );
}
