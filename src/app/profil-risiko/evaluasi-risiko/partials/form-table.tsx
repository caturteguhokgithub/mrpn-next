import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 Grow,
 MenuItem,
 Popover,
 SelectChangeEvent,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import moment from "moment";
import { DateRange } from "react-date-range";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import { listPeristiwaRisiko } from "../../perlakuan-risiko/setting";
import { listAppetiteRisiko, listNilaiRisiko } from "../setting";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [state, setState] = React.useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [appetitteDropdown, setAppetitteDropdown] = React.useState("");
 const [valueDropdown, setValueDropdown] = React.useState("");
 const [residualDropdown, setResidualDropdown] = React.useState("");

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };
 const handleChangeAppetitte = (event: SelectChangeEvent) => {
  setAppetitteDropdown(event.target.value);
 };
 const handleChangeValue = (event: SelectChangeEvent) => {
  setValueDropdown(event.target.value);
 };
 const handleChangeResidual = (event: SelectChangeEvent) => {
  setResidualDropdown(event.target.value);
 };

 const handleClick = (event: any) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const id = open ? "simple-popover" : undefined;

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peristiwa Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={prDropdown}
        onChange={handleChangePr}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih peristiwa risiko
         </Typography>
        </MenuItem>
        {listPeristiwaRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.label.length >= 35 ? (
           <Tooltip
            title={prLabel.label}
            followCursor
            TransitionComponent={Grow}
           >
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {prLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           prLabel.label
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
      <Chip label="Nilai Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={valueDropdown}
        onChange={handleChangeValue}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic" color={grey[600]}>
          Pilih nilai
         </Typography>
        </MenuItem>
        {listNilaiRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.value}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tingkat</Typography>
      {mode === "add" || mode === "edit" ? (
       <Stack height="40px" direction="row" alignItems="center">
        {valueDropdown === "1" ? (
         <Chip
          variant="filled"
          color="error"
          label={listNilaiRisiko[0].label}
          sx={{ px: 1 }}
         />
        ) : valueDropdown === "2" ? (
         <Chip
          variant="filled"
          color="warning"
          label={listNilaiRisiko[1].label}
          sx={{ px: 1 }}
         />
        ) : valueDropdown === "3" ? (
         <Chip
          variant="filled"
          color="primary"
          label={listNilaiRisiko[2].label}
          sx={{ px: 1 }}
         />
        ) : (
         "-"
        )}
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Risk Appetitte" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={appetitteDropdown}
        onChange={handleChangeAppetitte}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic" color={grey[600]}>
          Pilih nilai risk appetitte
         </Typography>
        </MenuItem>
        {listAppetiteRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.value}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={appetitteDropdown}
        onChange={handleChangeAppetitte}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic" color={grey[600]}>
          Pilih nilai risk appetitte
         </Typography>
        </MenuItem>
        {listAppetiteRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.value}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Keterangan</Typography>
      <Stack height="40px" direction="row" alignItems="center">
       {appetitteDropdown === "1" ? (
        <Chip
         variant="filled"
         color="error"
         label={listAppetiteRisiko[0].label}
         sx={{ px: 1 }}
        />
       ) : appetitteDropdown === "2" ? (
        <Chip
         variant="filled"
         color="warning"
         label={listAppetiteRisiko[1].label}
         sx={{ px: 1 }}
        />
       ) : appetitteDropdown === "3" ? (
        <Chip
         variant="filled"
         color="success"
         label={listAppetiteRisiko[2].label}
         sx={{ px: 1 }}
        />
       ) : appetitteDropdown === "4" ? (
        <Chip
         variant="filled"
         color="primary"
         label={listAppetiteRisiko[3].label}
         sx={{ px: 1 }}
        />
       ) : (
        "-"
       )}
      </Stack>
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Residual" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Nilai</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={residualDropdown}
        onChange={handleChangeResidual}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic" color={grey[600]}>
          Pilih nilai
         </Typography>
        </MenuItem>
        {listNilaiRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.value}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tingkat</Typography>
      {mode === "add" || mode === "edit" ? (
       <Stack height="40px" direction="row" alignItems="center">
        {residualDropdown === "1" ? (
         <Chip
          variant="filled"
          color="error"
          label={listNilaiRisiko[0].label}
          sx={{ px: 1 }}
         />
        ) : residualDropdown === "2" ? (
         <Chip
          variant="filled"
          color="warning"
          label={listNilaiRisiko[1].label}
          sx={{ px: 1 }}
         />
        ) : residualDropdown === "3" ? (
         <Chip
          variant="filled"
          color="primary"
          label={listNilaiRisiko[2].label}
          sx={{ px: 1 }}
         />
        ) : (
         "-"
        )}
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
