import React from "react";
import { Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import TableDampak from "./table-dampak";

export default function TabDampak({}) {
 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title="Dampak Proyek"
    addButton={<AddButton filled small title="Tambah Dampak Proyek" />}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableDampak />
    )}
   </CardItem>
   <CardItem title="Project Roadmap" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Catatan PJ KP" setting>
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
