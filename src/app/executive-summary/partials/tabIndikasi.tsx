import React from "react";
import { Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableIndication from "./tabIndication/table";

export default function TabIndikasi({ project }: { project: string }) {
 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem title="Indikasi Risiko Strategis">
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableIndication project={project} />
    )}
   </CardItem>
  </Stack>
 );
}
