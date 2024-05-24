import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 Grow,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";
import TextareaComponent from "@/app/components/textarea";
import { listLevelKemungkinan } from "@/app/utils/data";

export default function FormDampak({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValue(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Level Kemungkinan</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={value}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} color={grey[700]} fontStyle="italic">
          Pilih level kemungkinan
         </Typography>
        </MenuItem>
        {listLevelKemungkinan.map((lkLabel, index) => (
         <MenuItem key={index} value={lkLabel}>
          {lkLabel.length >= 35 ? (
           <Tooltip title={lkLabel} followCursor TransitionComponent={Grow}>
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {lkLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           lkLabel
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Area Dampak Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Beban Keuangan Negara/Daerah</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Beban Keuangan Negara/Daerah"
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
      <Typography gutterBottom>Penurunan Reputasi</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Penurunan Reputasi"
        placeholder="Penurunan Reputasi"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Penurunan Reputasi"
        placeholder="Penurunan Reputasi"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>
       Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)
      </Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)"
        placeholder="Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)"
        placeholder="Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Lingkungan</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Lingkungan"
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
      <Typography gutterBottom>Capaian Kinerja</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Capaian Kinerja"
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
  </>
 );
}
