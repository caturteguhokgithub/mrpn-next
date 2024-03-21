import React from "react";
import { Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableOverall from "./table-overall";

export default function TabOverall({}) {
 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem title={<em>Overall Risk</em>}>
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableOverall />
    )}
   </CardItem>
  </Stack>
 );
}
