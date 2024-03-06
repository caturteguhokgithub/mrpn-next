import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";

export default function TabProfil({}) {
 return (
  <Stack gap={1}>
   <CardItem
    title={
     <>
      <em>Cascading</em> Sasaran, Indikator, Target RO
     </>
    }
    setting
   >
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Profil Rincian Output" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Stack gap={1}>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Alokasi APBN</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Target</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>KL Pelaksana/PIC</Typography>
     </Paper>
    </Stack>
   </CardItem>
   <CardItem title={<em>Stakeholder Mapping</em>} setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Pendanaan & Investasi Proyek" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Stack gap={1}>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Jumlah Per Tahun</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Sumber Pendanaan</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Kesiapan Pendanaan</Typography>
     </Paper>
    </Stack>
   </CardItem>
  </Stack>
 );
}
