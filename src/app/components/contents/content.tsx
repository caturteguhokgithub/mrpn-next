import React from "react";
import {
 Box,
 FormControl,
 MenuItem,
 Paper,
 Select,
 SelectChangeEvent,
 Stack,
 Typography,
} from "@mui/material";

export default function ContentPage({
 title,
 children,
 withCard,
 chooseKonteks,
 chooseProject,
 titleChild,
 breadcrumb,
 noPadding,
 heightTitleBreadcrumb,
}: {
 children: React.ReactNode;
 title: string;
 withCard?: boolean;
 noPadding?: boolean;
 chooseProject?: boolean;
 chooseKonteks?: boolean;
 heightTitleBreadcrumb?: boolean;
 titleChild?: React.ReactNode;
 breadcrumb?: React.ReactNode;
}) {
 const [project, setProject] = React.useState("3");
 const [konteks, setKonteks] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };
 const handleChangeKonteks = (event: SelectChangeEvent) => {
  setKonteks(event.target.value);
 };

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
    <Stack direction="row" gap={2}>
     {chooseProject && (
      <FormControl
       size="small"
       sx={
        {
         // fieldset: {
         //  border: 0,
         // },
        }
       }
      >
       <Select
        value={project}
        onChange={handleChangeProject}
        displayEmpty
        sx={{
         ".MuiSelect-select": {
          //   fontSize: 14,
          //   py: "6px",
          //   borderRadius: 6,
          //   bgcolor: theme.palette.primary.main,
          //   color: theme.palette.primary.light,
         },
        }}
       >
        <MenuItem value="">Pilih project</MenuItem>
        <MenuItem value="1">
         KP-01 - Industri 4.0 di 6 Subsektor Prioritas
        </MenuItem>
        <MenuItem value="2">KP-02 - Destinasi Pariwisata Prioritas</MenuItem>
        <MenuItem value="3">
         KP-03 - Kawasan Industri Prioritas dan Smelter
        </MenuItem>
       </Select>
      </FormControl>
     )}
     {chooseKonteks && (
      <FormControl size="small">
       <Select value={konteks} onChange={handleChangeKonteks} displayEmpty>
        <MenuItem value="">Pilih konteks strategis</MenuItem>
       </Select>
      </FormControl>
     )}
    </Stack>
   </Stack>
   <Box
    // height="calc(100vh - 234px)"
    height={
     heightTitleBreadcrumb ? "calc(100vh - 258px)" : "calc(100vh - 244px)"
    }
    overflow="auto"
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
