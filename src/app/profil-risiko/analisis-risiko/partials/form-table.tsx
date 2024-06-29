import React from "react";
import {
 Box,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 FormLabel,
 Grid,
 Grow,
 MenuItem,
 Radio,
 RadioGroup,
 SelectChangeEvent,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import { listKemungkinan, listDampak } from "@/app/utils/data";
import { listPeristiwaRisiko } from "../../perlakuan-risiko/setting";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import DialogComponent from "@/app/components/dialog";
import TableAnalisis from "./tableAnalisis";

export default function FormTable({ mode }: { mode?: string }) {
 const [probability, setProbability] = React.useState("");
 const [impact, setImpact] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [probabilityAfter, setProbabilityAfter] = React.useState("");
 const [impactAfter, setImpactAfter] = React.useState("");
 const [modalOpenView, setModalOpenView] = React.useState(false);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const handleChangeProbability = (event: SelectChangeEvent) => {
  setProbability(event.target.value);
 };

 const handleChangeImpact = (event: SelectChangeEvent) => {
  setImpact(event.target.value);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };

 const handleChangeProbabilityAfter = (event: SelectChangeEvent) => {
  setProbabilityAfter(event.target.value);
 };

 const handleChangeImpactAfter = (event: SelectChangeEvent) => {
  setImpactAfter(event.target.value);
 };

 const handleModalOpenView = () => {
  setModalOpenView(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
 };

 const valueRisk =
  probabilityAfter === "1" && impactAfter === "1"
   ? "1"
   : probabilityAfter === "1" && impactAfter === "2"
   ? "2"
   : probabilityAfter === "1" && impactAfter === "3"
   ? "3"
   : probabilityAfter === "1" && impactAfter === "4"
   ? "4"
   : probabilityAfter === "1" && impactAfter === "5"
   ? "5"
   : probabilityAfter === "2" && impactAfter === "1"
   ? "2"
   : probabilityAfter === "2" && impactAfter === "2"
   ? "4"
   : probabilityAfter === "2" && impactAfter === "3"
   ? "6"
   : probabilityAfter === "2" && impactAfter === "4"
   ? "8"
   : probabilityAfter === "2" && impactAfter === "5"
   ? "10"
   : probabilityAfter === "3" && impactAfter === "1"
   ? "3"
   : probabilityAfter === "3" && impactAfter === "2"
   ? "6"
   : probabilityAfter === "3" && impactAfter === "3"
   ? "9"
   : probabilityAfter === "3" && impactAfter === "4"
   ? "12"
   : probabilityAfter === "3" && impactAfter === "5"
   ? "15"
   : probabilityAfter === "4" && impactAfter === "1"
   ? "4"
   : probabilityAfter === "4" && impactAfter === "2"
   ? "8"
   : probabilityAfter === "4" && impactAfter === "3"
   ? "12"
   : probabilityAfter === "4" && impactAfter === "4"
   ? "16"
   : probabilityAfter === "4" && impactAfter === "5"
   ? "20"
   : probabilityAfter === "5" && impactAfter === "1"
   ? "5"
   : probabilityAfter === "5" && impactAfter === "2"
   ? "10"
   : probabilityAfter === "5" && impactAfter === "3"
   ? "15"
   : probabilityAfter === "5" && impactAfter === "4"
   ? "20"
   : "25";

 const statusRisk =
  probabilityAfter === "1" && impactAfter === "1"
   ? "error"
   : probabilityAfter === "1" && impactAfter === "2"
   ? "error"
   : probabilityAfter === "1" && impactAfter === "3"
   ? "error"
   : probabilityAfter === "1" && impactAfter === "4"
   ? "error"
   : probabilityAfter === "1" && impactAfter === "5"
   ? "error"
   : probabilityAfter === "2" && impactAfter === "1"
   ? "warning"
   : probabilityAfter === "2" && impactAfter === "2"
   ? "warning"
   : probabilityAfter === "2" && impactAfter === "3"
   ? "warning"
   : probabilityAfter === "2" && impactAfter === "4"
   ? "warning"
   : probabilityAfter === "2" && impactAfter === "5"
   ? "warning"
   : probabilityAfter === "3" && impactAfter === "1"
   ? "secondary"
   : probabilityAfter === "3" && impactAfter === "2"
   ? "secondary"
   : probabilityAfter === "3" && impactAfter === "3"
   ? "secondary"
   : probabilityAfter === "3" && impactAfter === "4"
   ? "secondary"
   : probabilityAfter === "3" && impactAfter === "5"
   ? "secondary"
   : probabilityAfter === "4" && impactAfter === "1"
   ? "primary"
   : probabilityAfter === "4" && impactAfter === "2"
   ? "primary"
   : probabilityAfter === "4" && impactAfter === "3"
   ? "primary"
   : probabilityAfter === "4" && impactAfter === "4"
   ? "primary"
   : probabilityAfter === "4" && impactAfter === "5"
   ? "primary"
   : probabilityAfter === "5" && impactAfter === "1"
   ? "success"
   : probabilityAfter === "5" && impactAfter === "2"
   ? "success"
   : probabilityAfter === "5" && impactAfter === "3"
   ? "success"
   : probabilityAfter === "5" && impactAfter === "4"
   ? "success"
   : "success";

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Peristiwa Risiko" information="Peristiwa Risiko" />
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
    <Grid item xs={12}>
     <Divider>
      <Chip label="Tingkat Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Kemungkinan"
       information="Kemungkinan"
       buttonInfo
       buttonInfoOnclick={handleModalOpenView}
      />
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={probabilityAfter}
        onChange={handleChangeProbabilityAfter}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kemungkinan
         </Typography>
        </MenuItem>
        {listKemungkinan.map((kemungkinanLabel) => (
         <MenuItem key={kemungkinanLabel.id} value={kemungkinanLabel.value}>
          {kemungkinanLabel.label.length >= 35 ? (
           <Tooltip
            title={kemungkinanLabel.label}
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
             {kemungkinanLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           kemungkinanLabel.label
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Dampak"
       information="Dampak"
       buttonInfo
       buttonInfoOnclick={handleModalOpenView}
      />
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={impactAfter}
        onChange={handleChangeImpactAfter}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih dampak
         </Typography>
        </MenuItem>{" "}
        {listDampak.map((dampakLabel) => (
         <MenuItem key={dampakLabel.id} value={dampakLabel.value}>
          {dampakLabel.label.length >= 35 ? (
           <Tooltip
            title={dampakLabel.label}
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
             {dampakLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           dampakLabel.label
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Nilai Risiko" information="Nilai Risiko" />
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        value={valueRisk}
        disabled
        InputLabelProps={{
         shrink: true,
        }}
        sx={{
         input: {
          WebkitTextFillColor: `${grey[800]} !important`,
          bgcolor: grey[200],
         },
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Tingkat Risiko" information="Tingkat Risiko" />
      {mode === "add" || mode === "edit" ? (
       <Stack direction="row" height="40px" alignItems="center">
        <Chip
         //   variant="outlined"
         color={
          statusRisk
          // impactAfter === "1"
          //  ? "error"
          //  : impactAfter === "2"
          //  ? "warning"
          //  : impactAfter === "3"
          //  ? "secondary"
          //  : impactAfter === "4"
          //  ? "primary"
          //  : "success"
         }
         sx={{
          minWidth: 80,
          borderWidth: "2px",
          borderStyle: "solid",
          "& .MuiChip-label": {
           fontWeight: 600,
          },
          "&.MuiChip-colorWarning": {
           bgcolor: yellow[300],
           borderColor: yellow[600],
           color: yellow[900],
          },
          "&.MuiChip-colorError": {
           bgcolor: red[100],
           borderColor: red[400],
           color: red[900],
          },
          "&.MuiChip-colorSuccess": {
           bgcolor: green[100],
           borderColor: green[400],
           color: green[900],
          },
          "&.MuiChip-colorPrimary": {
           bgcolor: blue[100],
           borderColor: blue[400],
           color: blue[900],
          },
          "&.MuiChip-colorSecondary": {
           bgcolor: grey[100],
           borderColor: grey[400],
           color: grey[900],
          },
         }}
         label={
          impactAfter === "1"
           ? "Sangat Rendah"
           : impactAfter === "2"
           ? "Rendah"
           : impactAfter === "3"
           ? "Sedang"
           : impactAfter === "4"
           ? "Tinggi"
           : "Sangat Tinggi"
         }
        />
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Pengendalian yang ada"
       information="Pengendalian yang ada"
      />
      {mode === "add" || mode === "edit" ? (
       <RadioGroup row>
        <FormControlLabel value="ada" control={<Radio />} label="Ada" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
       </RadioGroup>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    {/* <Grid item lg={12}>
     <Divider />
    </Grid>
     <Grid item lg={12}>
     <Divider>
      <Chip label="Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Deskripsi Rencana Mitigasi</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Deskripsi Rencana Mitigasi"
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
      <Typography gutterBottom>Waktu Rencana Mitigasi</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Waktu Rencana Mitigasi"
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
    </Grid> */}
   </Grid>
   <DialogComponent
    closeButton
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Matriks Analisis Risiko"
   >
    <TableAnalisis popupContent />
   </DialogComponent>
  </>
 );
}
