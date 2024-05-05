import React from "react";
import {
 Box,
 Chip,
 FormControl,
 Grow,
 MenuItem,
 Paper,
 Select,
 SelectChangeEvent,
 Stack,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import SelectCustomTheme from "../select";
import DropdownKp from "../dropdownKp";

export default function ContentPage({
 title,
 children,
 withCard,
 chooseKonteks,
 chooseProject,
 chooseProjectPage,
 titleChild,
 breadcrumb,
 noPadding,
 heightTitleBreadcrumb,
 overflowHidden,
 addButton,
 project,
 handleChangeProject,
 dowloadAttachmentFile,
}: {
 children: React.ReactNode;
 title: string;
 withCard?: boolean;
 noPadding?: boolean;
 chooseProject?: React.ReactNode;
 chooseProjectPage?: React.ReactNode;
 chooseKonteks?: boolean;
 heightTitleBreadcrumb?: boolean;
 titleChild?: React.ReactNode;
 breadcrumb?: React.ReactNode;
 overflowHidden?: boolean;
 addButton?: React.ReactNode;
 project?: any;
 handleChangeProject?: any;
 dowloadAttachmentFile?: React.ReactNode;
}) {
 const [konteks, setKonteks] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const handleChangeKonteks = (event: SelectChangeEvent) => {
  setKonteks(event.target.value);
 };

 const konteksLabel =
  "Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri";

 return (
  <Box>
   <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mb="1.25rem"
   >
    <Stack
     direction="row"
     justifyContent="space-between"
     alignItems="center"
     gap={1}
     width="100%"
    >
     <Stack direction="column">
      {breadcrumb}
      <Typography
       component="h2"
       fontWeight="600"
       fontSize="1.25rem"
       textTransform="capitalize"
      >
       {title}
      </Typography>
     </Stack>
     {titleChild}
    </Stack>
    <Stack direction="row" alignItems="center" gap={1}>
     {chooseProjectPage}
     {dowloadAttachmentFile}
     {chooseProject && (
      <>
       <DropdownKp
        project={project}
        handleChangeProject={handleChangeProject}
       />

       {/* <Chip
        color="primary"
        // variant="outlined"
        label="KP-03 - Kawasan Industri Prioritas dan Smelter"
        sx={{
         //  bgcolor: "white",
         fontWeight: 500,
         lineHeight: 1,
         cursor: "default",
         px: 1,
        }}
       /> */}
       {/* <FormControl size="small">
        <SelectCustomTheme small value={project} onChange={handleChangeProject}>
         <MenuItem value="" disabled>
          <Typography fontSize={14} fontStyle="italic">
           Pilih Kegiatan Pembangunan (KP)
          </Typography>
         </MenuItem>
         <MenuItem value="1" defaultChecked>
          KP.02 - Penurunan stunting
         </MenuItem>
         <MenuItem value="2">
          KP.03 - Peningkatan pelayanan kesehatan...
         </MenuItem>
         <MenuItem value="3">
          KP.04 - Penyediaan Akses Terhadap Rumah...
         </MenuItem>
        </SelectCustomTheme>
       </FormControl> */}
      </>
     )}
     {chooseKonteks && (
      <FormControl size="small">
       <SelectCustomTheme small value={konteks} onChange={handleChangeKonteks}>
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Konteks Strategis
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         {konteksLabel.length >= 40 ? (
          <Tooltip title={konteksLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {konteksLabel.substring(0, 40) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          konteksLabel
         )}
        </MenuItem>
       </SelectCustomTheme>
      </FormControl>
     )}
     {addButton && addButton}
    </Stack>
   </Stack>
   <Box
    height={
     heightTitleBreadcrumb
      ? "calc(100vh - 258px)"
      : overflowHidden
      ? "calc(100vh - 244px)"
      : "calc(100vh - 244px)"
    }
    overflow={overflowHidden ? "hidden" : "auto"}
    margin={-1}
    sx={{
     overflowX: "hidden",
     "&::-webkit-scrollbar": {
      width: "3px",
     },
    }}
   >
    {withCard ? (
     <Paper
      elevation={2}
      sx={{ borderRadius: "1.25rem", p: noPadding ? 0 : "1.5rem", m: 1 }}
     >
      {children}
     </Paper>
    ) : (
     children
    )}
   </Box>
  </Box>
 );
}
