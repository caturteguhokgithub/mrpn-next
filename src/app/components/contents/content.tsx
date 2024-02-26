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
 titleChild,
}: {
 children: React.ReactNode;
 title: string;
 withCard?: boolean;
 chooseKonteks?: boolean;
 titleChild?: React.ReactNode;
}) {
 const [age, setAge] = React.useState("");

 const handleChange = (event: SelectChangeEvent) => {
  setAge(event.target.value);
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
     <Typography
      component="h2"
      fontWeight="600"
      fontSize="1.25rem"
      textTransform="capitalize"
     >
      {title}
     </Typography>
     {titleChild}
    </Stack>
    {chooseKonteks && (
     <FormControl sx={{ minWidth: 220 }} size="small">
      <Select value={age} onChange={handleChange} displayEmpty>
       <MenuItem value="">Pilih konteks</MenuItem>
       <MenuItem value={10}>
        KP-01 - Industri 4.0 di 6 Subsektor Prioritas
       </MenuItem>
       <MenuItem value={20}>KP-02 - Destinasi Pariwisata Prioritas</MenuItem>
       <MenuItem value={30}>
        KP-03 - Kawasan Industri Prioritas dan Smelter
       </MenuItem>
      </Select>
     </FormControl>
    )}
   </Stack>
   <Box
    height="calc(100vh - 250px)"
    overflow="visible"
    margin={-1}
    sx={{
     overflowX: "hidden",
    }}
   >
    {withCard ? (
     <Paper elevation={2} sx={{ borderRadius: "1.25rem", p: "1.5rem", m: 1 }}>
      {children}
     </Paper>
    ) : (
     children
    )}
   </Box>
  </Box>
 );
}
