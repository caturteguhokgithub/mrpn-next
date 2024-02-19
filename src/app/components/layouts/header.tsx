import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function Header({}) {
 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "white",
    padding: "0 42px",
    pl: "3rem",
   }}
  >
   <Stack direction="row" justifyContent="space-between" width="100%">
    <Stack direction="row" alignItems="center" spacing={1}>
     <Typography component="h1" fontWeight="800" fontSize="1.25rem">
      MRPN 2024
     </Typography>
     <Typography
      component="h1"
      letterSpacing={4}
      fontSize="1.25rem"
      fontWeight={300}
     >
      BAPPENAS
     </Typography>
    </Stack>
    <Avatar />
   </Stack>
  </Box>
 );
}
