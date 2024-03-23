import React, { Fragment } from "react";
import {
 Button,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 FormLabel,
 Grid,
 IconButton,
 Radio,
 RadioGroup,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";

const ItemKP = ({ full }: { full?: boolean }) => {
 return (
  <>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography>Kode KP</Typography>
     <TextField
      variant="outlined"
      size="small"
      placeholder="Kode KP"
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item lg={full ? 8 : 7}>
    <FormControl fullWidth>
     <Typography>Nama KP</Typography>
     <TextField
      variant="outlined"
      size="small"
      placeholder="Nama KP"
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
  </>
 );
};

export default function FormTable({ mode }: { mode?: string }) {
 const [items, setItem] = React.useState([{ id: 1 }]);
 const add = () => {
  let arr = [...items];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItem(newItem);
 };

 const minus = (nowId: any) => {
  let arr = [...items];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItem(newArr);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Kode Tema</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Kode Tema"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={8}>
     <FormControl fullWidth>
      <Typography>Tema</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Tema"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Kegiatan Pembangunan (KP)" size="small" />
     </Divider>
    </Grid>
    {/* <ItemKP full /> */}
    {items.map((tags: any) => (
     <Fragment key={`${tags.id}`}>
      <ItemKP />
      <Grid item lg={1}>
       <FormControl sx={{ mt: "27px" }}>
        <IconButton
         aria-label="delete"
         color="error"
         onClick={() => minus(tags.id)}
        >
         <IconFA size={18} name="trash-can" />
        </IconButton>
       </FormControl>
      </Grid>
     </Fragment>
    ))}
    <Grid item lg={12}>
     <FormControl>
      <AddButton title="Tambah KP" noMargin onclick={add} />
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
