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
import { Button, DialogActions } from "@mui/material";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./form/partials/form-table";

type ColumnsType = {};

export default function PageKonteksStrategis({}) {
 //  const mainUrl = "/penetapan-konteks/konteks-strategis/";
 //  const addUrl = `${mainUrl}form/add`;
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Konteks" />
  ),
 };

 const handleModalOpenView = () => {
  setModalOpenView(true);
 };

 const handleModalOpenEdit = () => {
  setModalOpenEdit(true);
 };

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalOpenDelete = () => {
  setModalOpenDelete(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenEdit(false);
  setModalOpenAdd(false);
  setModalOpenDelete(false);
 };

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
    accessorKey: "kl_utama",
    header: "KL Utama",
    size: 200,
    grow: false,
    enableColumnActions: false,
   },
   //    {
   //     accessorKey: "latar_belakang",
   //     header: "Latar Belakang",
   //     grow: true,
   //     enableColumnActions: false,
   //     enableSorting: false,
   //     accessorFn: (row: any) => row.latar_belakang,
   //     Cell: ({ renderedCellValue }: any) => (
   //      <Typography
   //       fontSize="14px"
   //       color="inherit"
   //       sx={{
   //        overflow: "hidden",
   //        textOverflow: "ellipsis",
   //        display: "-webkit-box",
   //        WebkitLineClamp: "2",
   //        WebkitBoxOrient: "vertical",
   //       }}
   //      >
   //       {renderedCellValue}
   //      </Typography>
   //     ),
   //    },
   //    {
   //     accessorKey: "ruang_lingkup",
   //     header: "Ruang Lingkup",
   //     grow: true,
   //     enableColumnActions: false,
   //     enableSorting: false,
   //     accessorFn: (row: any) => row.ruang_lingkup,
   //     Cell: ({ renderedCellValue }: any) => (
   //      <Typography
   //       fontSize="14px"
   //       color="inherit"
   //       sx={{
   //        overflow: "hidden",
   //        textOverflow: "ellipsis",
   //        display: "-webkit-box",
   //        WebkitLineClamp: "2",
   //        WebkitBoxOrient: "vertical",
   //       }}
   //      >
   //       {renderedCellValue}
   //      </Typography>
   //     ),
   //    },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 100,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editClick={handleModalOpenEdit}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
 });

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 const dialogActionDeleteFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" color="error" type="submit">
    Hapus
   </Button>
  </DialogActions>
 );

 return (
  <>
   <DashboardLayout>
    <ContentPage title="Konteks Strategis" chooseKonteks>
     <MaterialReactTable table={table} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Konteks Strategis"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Detail Konteks Strategis"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="edit" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Detail Konteks Strategis"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    width={240}
    dialogOpen={modalOpenDelete}
    dialogClose={handleModalClose}
    title="Hapus Data"
    dialogFooter={dialogActionDeleteFooter}
   >
    Anda yakin akan menghapus data ini?
   </DialogComponent>
  </>
 );
}
