import React from "react";
import {
 Grid,
 Paper,
 Stack,
 ToggleButton,
 ToggleButtonGroup,
 Tooltip,
 Typography,
 alpha,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import Image from "next/image";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey } from "@mui/material/colors";
import {
 stakeholderKoordinasi,
 stakeholderMonitoring,
 stakeholderPendukung,
 stakeholderUtama,
} from "../data";

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

const ToggleButtonLogo = ({
 value,
 imgSrc,
}: {
 value: string;
 imgSrc: string;
}) => {
 return (
  <ToggleButton
   value={value}
   aria-label={value}
   sx={{
    position: "relative",
    ".MuiIcon-root": {
     position: "absolute",
     top: -5,
     right: -5,
    },
   }}
  >
   <Tooltip title={value} arrow>
    <Image
     alt={value}
     src={imgSrc}
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "auto", height: "50px" }}
    />
   </Tooltip>
   <IconFA name="circle-check" size={20} color={theme.palette.primary.main} />
  </ToggleButton>
 );
};

export default function FormStakeholder({ mode }: { mode?: string }) {
 const [formats, setFormats] = React.useState(() => [""]);

 const handleFormat = (
  event: React.MouseEvent<HTMLElement>,
  newFormats: string[]
 ) => {
  setFormats(newFormats);
 };

 const styles = {
  pt: 1,
  mb: 1,
  gap: 1,
  maxWidth: "100%",
  overflow: "auto",
  button: {
   border: `1px solid ${grey[400]}`,
   borderLeft: `1px solid ${grey[400]} !important`,
   borderRadius: "8px !important",
   ".MuiIcon-root": {
    display: "none",
   },
   "&:hover": {
    bgcolor: alpha(theme.palette.primary.main, 0.1),
   },
   "&.Mui-selected": {
    border: `1px solid ${theme.palette.primary.main} !important`,
    color: "white",
    ".MuiIcon-root": {
     display: "block",
    },
    "&:hover": {
     bgcolor: alpha(theme.palette.primary.main, 0.1),
     color: "white",
    },
   },
  },
 };

 return (
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
      <ToggleButtonGroup value={formats} onChange={handleFormat} sx={styles}>
       {stakeholderPendukung.map(({ value, imgUrl, id }) => (
        <ToggleButtonLogo key={id} value={value} imgSrc={imgUrl} />
       ))}
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
      <ToggleButtonGroup value={formats} onChange={handleFormat} sx={styles}>
       {stakeholderUtama.map(({ value, imgUrl, id }) => (
        <ToggleButtonLogo key={id} value={value} imgSrc={imgUrl} />
       ))}
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
      <ToggleButtonGroup value={formats} onChange={handleFormat} sx={styles}>
       {stakeholderMonitoring.map(({ value, imgUrl, id }) => (
        <ToggleButtonLogo key={id} value={value} imgSrc={imgUrl} />
       ))}
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
      <ToggleButtonGroup value={formats} onChange={handleFormat} sx={styles}>
       {stakeholderKoordinasi.map(({ value, imgUrl, id }) => (
        <ToggleButtonLogo key={id} value={value} imgSrc={imgUrl} />
       ))}
      </ToggleButtonGroup>
     }
    />
   </Grid>
  </Grid>
 );
}
