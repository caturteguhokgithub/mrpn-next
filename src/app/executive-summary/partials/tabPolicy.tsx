import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableProfilIntervensi from "./table-profil-intervensi";

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
   <CardItem title="Profil RO Kunci" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <TableProfilIntervensi />
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
