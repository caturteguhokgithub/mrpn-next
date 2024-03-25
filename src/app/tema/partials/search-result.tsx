import { Checkbox, FormControlLabel, Stack } from "@mui/material";

export default function SearchResult(props: any) {
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
