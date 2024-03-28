import React from "react";
import {
 FormControl,
 Grid,
 InputLabel,
 MenuItem,
 Select,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";

export default function FormTagging({ mode }: { mode?: string }) {
 const [age, setAge] = React.useState("");

 const handleChange = (event: SelectChangeEvent) => {
  setAge(event.target.value as string);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Kebijakan</Typography>
      {mode === "add" ? (
       <>
        <SelectCustomTheme defaultStyle value={age} onChange={handleChange}>
         <MenuItem value="" disabled>
          <Typography fontStyle="italic">Pilih Kebijakan</Typography>
         </MenuItem>
         <MenuItem value="1" defaultChecked>
          Janpres
         </MenuItem>
         <MenuItem value="2">SDGs</MenuItem>
         <MenuItem value="3">Dekon</MenuItem>
         <MenuItem value="4">DAK</MenuItem>
         <MenuItem value="5">PEN</MenuItem>
         <MenuItem value="6">RPJPN</MenuItem>
         <MenuItem value="7">RPJMN</MenuItem>
         <MenuItem value="8">RKP</MenuItem>
         <MenuItem value="9">Major Project</MenuItem>
         <MenuItem value="10">Nawacita</MenuItem>
        </SelectCustomTheme>
       </>
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
      <Typography>Keterangan</Typography>
      {mode === "add" ? (
       <TextareaComponent label="Keterangan" placeholder="Keterangan" />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Keterangan"
        value="-"
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
