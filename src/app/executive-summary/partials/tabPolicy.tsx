import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";

export default function TabPolicy({}) {
 return (
  <Stack gap={1}>
   <CardItem title={<em>Project Roadmap</em>} setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Profil Intervensi Kunci" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Stack gap={1}>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Nomenklatur</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Anggaran</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Sumber Anggaran</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Target</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>KL Pelaksana</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>KL Kontributor</Typography>
     </Paper>
    </Stack>
   </CardItem>
   <CardItem
    title={
     <>
      <em>Critical Path</em> Prioritas Proyek
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
  </Stack>
 );
}
