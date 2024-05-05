import React from "react";
import {
 Typography,
 MenuItem,
 FormControl,
 Grow,
 Tooltip,
 Autocomplete,
 TextField,
} from "@mui/material";
import { listSelectKp } from "@/app/executive-summary/data";
import SelectCustomTheme from "../select";

export default function DropdownKp({
 project,
 handleChangeProject,
}: {
 project?: any;
 handleChangeProject?: any;
}) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 return (
  <FormControl size="small">
   {/* <Autocomplete
    id="free-solo-demo"
    freeSolo
    // value={project}
    onChange={handleChangeProject}
    options={listSelectKp.map((option) => option.nama_kp)}
    renderInput={(params) => <TextField {...params} label="freeSolo" />}
   />
   <Autocomplete
    // freeSolo
    sx={{ width: 300 }}
    options={listSelectKp.map((option) => option.nama_kp)}
    value={project}
    onChange={handleChangeProject}
    getOptionLabel={(option) => option.nama_kp}
    // defaultValue={[listSelectKp[1]]}
    renderInput={(params) => (
     <TextField
      {...params}
      placeholder="Pilih Kegiatan Pembangunan (KP)"
      variant="outlined"
      size="small"
      InputLabelProps={{
       shrink: true,
      }}
     />
    )}
   /> */}
   <SelectCustomTheme
    small
    anchorRight
    value={project}
    onChange={handleChangeProject}
   >
    <MenuItem value="" disabled>
     <Typography fontSize={14} fontStyle="italic">
      Pilih Kegiatan Pembangunan (KP)
     </Typography>
    </MenuItem>
    {listSelectKp.map(({ id, value, nama_kp }) => (
     <MenuItem key={id} value={value}>
      {nama_kp.length >= 48 ? (
       <Tooltip title={nama_kp} followCursor TransitionComponent={Grow}>
        <Typography
         aria-owns={open ? "mouse-over-popover" : undefined}
         aria-haspopup="true"
         onMouseEnter={handlePopoverOpen}
         onMouseLeave={handlePopoverClose}
         sx={{ fontSize: 14 }}
        >
         {nama_kp.substring(0, 48) + "..."}
        </Typography>
       </Tooltip>
      ) : (
       nama_kp
      )}
     </MenuItem>
    ))}
   </SelectCustomTheme>
  </FormControl>
 );
}
