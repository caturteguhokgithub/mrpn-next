import { Box, TextField } from "@mui/material";

export default function SearchField(props: any) {
 const { handleSearchTermUpdate } = props;
 return (
  <Box
   sx={{
    ".MuiInputBase-root": { borderRadius: "50px" },
   }}
  >
   <TextField
    onChange={handleSearchTermUpdate}
    variant="outlined"
    size="small"
    placeholder="Cari Kegiatan Pembangunan (KP)"
    InputLabelProps={{
     shrink: true,
    }}
   />
  </Box>
 );
}
