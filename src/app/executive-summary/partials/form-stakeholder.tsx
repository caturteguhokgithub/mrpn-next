import React from "react";
import {
 Card,
 CardContent,
 Divider,
 FormControl,
 Grid,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 TextField,
 ToggleButton,
 ToggleButtonGroup,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import Image from "next/image";

const CardStakeholderForm = ({
 title,
 img,
 description,
 label,
}: {
 title: string;
 img: React.ReactNode;
 description: React.ReactNode;
 label: string;
}) => {
 return (
  <Paper
   elevation={0}
   variant="outlined"
   sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
  >
   <Stack direction="column">
    <Typography gutterBottom variant="h6" component="div" lineHeight={1.3}>
     {title}
    </Typography>
    {img}
    <Typography variant="body2" mb={1}>
     <strong>{label}</strong>
    </Typography>
    {description}
   </Stack>
  </Paper>
 );
};

export default function FormStakeholder({ mode }: { mode?: string }) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={6}>
     <CardStakeholderForm
      title="Entitas Pendukung"
      label="Keep Satisfied"
      description={
       <TextareaComponent
        label="Deskripsi Entitas Pendukung"
        placeholder="Deskripsi Entitas Pendukung"
       />
      }
      img={
       <ToggleButtonGroup exclusive>
        {/* <ToggleButton value={value} aria-label={label}>
         <Image
          alt={title}
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
        </ToggleButton> */}
       </ToggleButtonGroup>
      }
     />
    </Grid>
    <Grid item lg={6}>
     <CardStakeholderForm
      title="Entitas Utama"
      label="Manage Closely"
      description={
       <TextareaComponent
        label="Deskripsi Entitas Utama"
        placeholder="Deskripsi Entitas Utama"
       />
      }
      img={
       <ToggleButtonGroup exclusive>
        {/* <ToggleButton value={value} aria-label={label}>
         <Image
          alt={title}
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
        </ToggleButton> */}
       </ToggleButtonGroup>
      }
     />
    </Grid>
    <Grid item lg={6}>
     <CardStakeholderForm
      title="Monitoring dan Pengawasan"
      label="Monitor"
      description={
       <TextareaComponent
        label="Deskripsi Monitoring dan Pengawasan"
        placeholder="Deskripsi Monitoring dan Pengawasan"
       />
      }
      img={
       <ToggleButtonGroup exclusive>
        {/* <ToggleButton value={value} aria-label={label}>
         <Image
          alt={title}
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
        </ToggleButton> */}
       </ToggleButtonGroup>
      }
     />
    </Grid>
    <Grid item lg={6}>
     <CardStakeholderForm
      title="Koordinasi, Informasi, Sosialisasi Berkala"
      label="Keep Informed"
      description={
       <TextareaComponent
        label="Deskripsi Koordinasi, Informasi, Sosialisasi Berkala"
        placeholder="Deskripsi Koordinasi, Informasi, Sosialisasi Berkala"
       />
      }
      img={
       <ToggleButtonGroup exclusive>
        {/* <ToggleButton value={value} aria-label={label}>
         <Image
          alt={title}
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
        </ToggleButton> */}
       </ToggleButtonGroup>
      }
     />
    </Grid>
   </Grid>
  </>
 );
}
