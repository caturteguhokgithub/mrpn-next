"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyData, IconEmptyPage } from "@/app/components/icons";
import { Box } from "@mui/material";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { advancedTable } from "@/app/components/table";

export default function PagePemantauan({}) {
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
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "kategori",
    header: "Kategori Risiko",
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    id: "nilai_target_sebelum",
    header: "Nilai Target Risiko Sebelum Mitigasi",
    columns: [
     {
      accessorKey: "kemungkinan",
      header: "Kemungkinan",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "dampak",
      header: "Dampak",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "tingkat_risiko",
      header: "Tingkat Risiko",
      size: 170,
      enableColumnActions: false,
     },
    ],
   },
   {
    id: "nilai_target_setelah",
    header: "Nilai Target Risiko Setelah Mitigasi",
    columns: [
     {
      accessorKey: "kemungkinan",
      header: "Kemungkinan",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "dampak",
      header: "Dampak",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "tingkat_risiko",
      header: "Tingkat Risiko",
      size: 170,
      enableColumnActions: false,
     },
    ],
   },
   {
    accessorKey: "perlakuan",
    header: "Perlakuan Risiko",
    size: 200,
    enableColumnActions: false,
   },
   {
    id: "waktu",
    header: "Waktu Rencana dan Realisasi Mitigasi",
    columns: [
     {
      accessorKey: "tgl_rencana",
      header: "Tanggal Rencana",
      size: 200,
      enableColumnActions: false,
     },
     {
      accessorKey: "tgl_realisasi",
      header: "Tanggal Realisasi",
      size: 200,
      enableColumnActions: false,
     },
    ],
   },
   {
    id: "nilai_penurunan",
    header: "Nilai Penurunan Target Risiko Setelah Mitigasi",
    columns: [
     {
      accessorKey: "kemungkinan",
      header: "Kemungkinan",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "dampak",
      header: "Dampak",
      size: 170,
      enableColumnActions: false,
     },
     {
      accessorKey: "tingkat_risiko",
      header: "Tingkat Risiko",
      size: 170,
      enableColumnActions: false,
     },
    ],
   },
   {
    accessorKey: "keterangan",
    header: "Keterangan Perlakuan Risiko",
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
   <ContentPage title="Pemantauan" chooseKonteks chooseProject>
    {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Pemantauan Masih Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Box className="table-collapsed">
     <MaterialReactTable table={table} />
    </Box>
   </ContentPage>
  </DashboardLayout>
 );
}
