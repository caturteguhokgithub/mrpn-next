import {
 Box,
 Checkbox,
 FormControlLabel,
 Stack,
 Typography,
} from "@mui/material";

export default function qPost(props: any) {
 const { title, body } = props;

 return (
  <FormControlLabel
   control={<Checkbox />}
   label={
    <Stack direction="row" gap={1}>
     {title} - {body}
    </Stack>
   }
  />
 );
}
