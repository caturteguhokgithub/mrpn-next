"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 Box,
 FormControl,
 FormControlLabel,
 FormLabel,
 Radio,
 RadioGroup,
 Stack,
 ToggleButton,
 ToggleButtonGroup,
 Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import theme from "@/theme";

const LabelRadio = ({
 heading,
 description,
}: {
 heading: string;
 description: any;
}) => {
 return (
  <Stack direction="column" justifyContent="flex-start">
   <Typography
    component="h2"
    fontSize="16px"
    fontWeight={600}
    textTransform="none"
   >
    {heading}
   </Typography>
   <Typography
    component="p"
    color={grey[700]}
    textTransform="none"
    fontSize={14}
   >
    {description}
   </Typography>
  </Stack>
 );
};

export default function PageSeleraRisiko({}) {
 const [value, setValue] = React.useState("");

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue((event.target as HTMLInputElement).value);
 };

 return (
  <DashboardLayout>
   <ContentPage title="Selera Risiko" withCard>
    <Box mb={2} p={2} bgcolor={theme.palette.primary.light} borderRadius={3}>
     <Typography component="p">
      Selera risiko adalah jenis/jumlah (nilai absolut) dari risiko yang siap
      diambil dalam proses pencapaian sasaran PKPPR, dengan pilihan sebagai
      berikut.
     </Typography>
    </Box>
    <FormControl>
     <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
      sx={{ gap: 2 }}
     >
      <FormControlLabel
       value="1"
       control={<Radio sx={{ mt: -1 }} />}
       sx={{ alignItems: "flex-start" }}
       label={
        <LabelRadio
         heading="Tidak memberikan toleransi"
         description="Sangat berhati-hati dalam mengambil risiko dan lebih memilih menjaga
        stabilitas dan konsistensi dalam operasi bisnis"
        />
       }
      />
      <FormControlLabel
       value="2"
       control={<Radio sx={{ mt: -1 }} />}
       sx={{ alignItems: "flex-start" }}
       label={
        <LabelRadio
         heading="Konservatif"
         description={
          <>
           <Box component="p">
            Berhati-hati dalam mengambil risiko, dengan memilih beberapa risiko
            yang terkendali tetapi tetap memprioritaskan kestabilan kegiatan.
           </Box>
           <Box component="p">
            Keputusan didasarkan pada upaya untuk melindungi nilai dari risiko
            besar yang tidak terduga, termasuk di dalamnya menghindari paparan
            terhadap fluktuasi/kondisi global/eksternal yang signifikan serta
            dapat menanggung beban yang kecil.
           </Box>
          </>
         }
        />
       }
      />
      <FormControlLabel
       value="3"
       control={<Radio sx={{ mt: -1 }} />}
       sx={{ alignItems: "flex-start" }}
       label={
        <LabelRadio
         heading="Moderat"
         description={
          <>
           <Box component="p">
            Bersedia mengambil risiko dalam batas tertentu untuk mencapai
            manfaat, tetapi tetap memperhatikan perlindungan terhadap kerugian
            besar.
           </Box>
           <Box component="p">
            Keputusan mempertimbangkan peluang pertumbuhan dan dampak risiko
            secara bersamaan dan dapat menanggung beban sedang.
           </Box>
          </>
         }
        />
       }
      />
      <FormControlLabel
       value="4"
       control={<Radio sx={{ mt: -1 }} />}
       sx={{ alignItems: "flex-start" }}
       label={
        <LabelRadio
         heading="Agresif"
         description={
          <>
           <Box component="p">
            Secara aktif menerapkan strategi yang melibatkan pengelolaan risiko
            sebagai bagian integral dari rencana kegiatan, mengambil risiko
            lebih tinggi dalam rangka mencapai peluang dan inovasi yang lebih
            besar.
           </Box>
           <Box component="p">
            Keputusan didasarkan pada analisis risiko dan pengembalian investasi
            jangka panjang serta dapat menanggung beban yang besar.
           </Box>
          </>
         }
        />
       }
      />
     </RadioGroup>
    </FormControl>
   </ContentPage>
  </DashboardLayout>
 );
}
