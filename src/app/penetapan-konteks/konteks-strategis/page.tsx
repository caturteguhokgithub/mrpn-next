/* eslint-disable @next/next/no-img-element */
"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { data } from "./setting";
import { advancedTable } from "@/app/components/table";
import { Typography } from "@mui/material";
import ActionColumn from "@/app/components/actions/action";

export default function PageKonteksStrategis({}) {
 const mainUrl = "/penetapan-konteks/konteks-strategis/";
 const columns = useMemo(
  () => [
   {
    accessorKey: "tahun",
    header: "Tahun",
    size: 150,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "lokasi",
    header: "Lokasi",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "nama_pkppr",
    header: "Nama PKPPR",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
   {
    accessorKey: "latar_belakang",
    header: "Latar Belakang",
    grow: true,
    enableColumnActions: false,
    enableSorting: false,
    accessorFn: (row: any) => row.latar_belakang,
    Cell: ({ renderedCellValue }: any) => (
     <Typography
      fontSize="14px"
      color="inherit"
      sx={{
       overflow: "hidden",
       textOverflow: "ellipsis",
       display: "-webkit-box",
       WebkitLineClamp: "2",
       WebkitBoxOrient: "vertical",
      }}
     >
      {renderedCellValue}
     </Typography>
    ),
   },
   {
    accessorKey: "ruang_lingkup",
    header: "Ruang Lingkup",
    grow: true,
    enableColumnActions: false,
    enableSorting: false,
    accessorFn: (row: any) => row.ruang_lingkup,
    Cell: ({ renderedCellValue }: any) => (
     <Typography
      fontSize="14px"
      color="inherit"
      sx={{
       overflow: "hidden",
       textOverflow: "ellipsis",
       display: "-webkit-box",
       WebkitLineClamp: "2",
       WebkitBoxOrient: "vertical",
      }}
     >
      {renderedCellValue}
     </Typography>
    ),
   },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 100,
    Cell: () => <ActionColumn editUrl={`${mainUrl}form`} viewUrl="/" />,
   },
  },
 });
 return (
  <DashboardLayout>
   <ContentPage title="Konteks Strategis" chooseKonteks>
    <MaterialReactTable table={table} />
   </ContentPage>
  </DashboardLayout>
 );
}
