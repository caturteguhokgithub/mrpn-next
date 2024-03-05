"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyData, IconEmptyPage } from "@/app/components/icons";
import { advancedTable } from "@/app/components/table";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";

export default function PagePerlakuanRisiko({}) {
 const columns = useMemo(
  () => [
   {
    accessorKey: "no",
    header: "No.",
    size: 80,
    enableColumnActions: false,
   },
   {
    accessorKey: "peristiwa",
    header: "Peristiwa Risiko",
    size: 200,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "ada_tidak",
    header: "Pengendalian yang ada (Ada/Tidak)",
    size: 250,
    enableColumnActions: false,
   },
   {
    id: "perlakuan_risiko",
    header: "Perlakuan Risiko",
    columns: [
     {
      accessorKey: "deskripsi",
      header: "Deskripsi Rencana Mitigasi",
      size: 220,
      enableColumnActions: false,
      enableSorting: false,
     },
     {
      accessorKey: "waktu",
      header: "Waktu Rencana Mitigasi",
      size: 220,
      enableColumnActions: false,
     },
     {
      accessorKey: "penanggungjawab",
      header: "Penanggung Jawab",
      size: 220,
      enableColumnActions: false,
     },
    ],
   },
  ],
  []
 );

 const data: any = [];

 const table = useMaterialReactTable({
  columns,
  data,
  ...advancedTable,
  enableRowActions: false,
  muiTableContainerProps: {
   sx: {
    maxWidth: "calc(100vw - 348px)",
    "&::-webkit-scrollbar": {
     height: "10px",
    },
   },
  },
  renderEmptyRowsFallback: ({ table }) => (
   <EmptyState
    icon={<IconEmptyData />}
    title="Data Kosong"
    description="Silahkan isi konten halaman ini"
   />
  ),
 });

 const isEmpty = false;

 return (
  <DashboardLayout>
   <ContentPage title="Perlakuan Risiko">
    {isEmpty ? (
     <EmptyState
      icon={<IconEmptyPage />}
      title="Halaman Perlakuan Risiko Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Box
      className="table-collapsed perlakuan-risiko"
      sx={{
       ".MuiPaper-root": {
        m: 0,
        boxShadow: "none",
       },
      }}
     >
      <MaterialReactTable table={table} />
     </Box>
    )}
   </ContentPage>
  </DashboardLayout>
 );
}
