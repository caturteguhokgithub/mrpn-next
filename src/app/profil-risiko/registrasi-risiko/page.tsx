"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { advancedTable } from "@/app/components/table";
import { Box } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function PageRegistrasiRisiko({}) {
 const columns = useMemo(
  () => [
   {
    accessorKey: "sasaran",
    header: "Sasaran Strategi PKPPR",
    size: 200,
    enableColumnActions: false,
   },
   {
    id: "indikator_sasaran",
    header: "Indikator Sasaran",
    columns: [
     {
      accessorKey: "uraian",
      header: "Uraian",
      size: 150,
      enableColumnActions: false,
     },
     {
      accessorKey: "target",
      header: "Target",
      size: 150,
      enableColumnActions: false,
     },
     {
      accessorKey: "fisik",
      header: "Fisik",
      size: 150,
      enableColumnActions: false,
     },
    ],
   },
   {
    accessorKey: "peristiwa",
    header: "Peristiwa Risiko Strategis MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   {
    accessorKey: "pemilik",
    header: "Pemilik Risiko (PJ Sasaran) MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   {
    accessorKey: "kategori",
    header: "Kategori Risiko MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   {
    accessorKey: "penyebab",
    header: "Penyebab/Faktor Risiko Strategis MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   {
    accessorKey: "dampak",
    header: "Dampak Strategis MRPN Linsek",
    size: 250,
    enableColumnActions: false,
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
    maxWidth: "calc(100vw - 364px)",
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

 return (
  <DashboardLayout>
   <ContentPage title="Registrasi Risiko" chooseKonteks chooseProject>
    <Box className="table-collapsed">
     <MaterialReactTable table={table} />
    </Box>
   </ContentPage>
  </DashboardLayout>
 );
}
