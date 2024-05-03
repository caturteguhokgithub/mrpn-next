import React from "react";
import {
 Typography,
 MenuItem,
 FormControl,
 Grow,
 Tooltip,
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
       <>
        <Tooltip
         title={nama_kp}
         followCursor
         TransitionComponent={Grow}
         sx={{}}
        >
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
       </>
      ) : (
       nama_kp
      )}
     </MenuItem>
    ))}
   </SelectCustomTheme>
  </FormControl>
 );
}
