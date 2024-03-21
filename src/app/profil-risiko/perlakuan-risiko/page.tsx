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
import { Box, Button, DialogActions } from "@mui/material";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { data } from "./setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";

export default function PagePerlakuanRisiko({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);

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
   //    {
   //     accessorKey: "no",
   //     header: "No.",
   //     size: 80,
   //     enableColumnActions: false,
   //    },
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
    size: 150,
    enableColumnActions: false,
   },
   //    {
   //     id: "perlakuan_risiko",
   //     header: "Perlakuan Risiko",
   //     columns: [
   //      {
   //       accessorKey: "deskripsi",
   //       header: "Deskripsi Rencana Mitigasi",
   //       size: 180,
   //       enableColumnActions: false,
   //       enableSorting: false,
   //      },
   //      {
   //       accessorKey: "waktu",
   //       header: "Waktu Rencana Mitigasi",
   //       size: 180,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "penanggungjawab",
   //       header: "Penanggung Jawab",
   //       size: 180,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Perlakuan" />
  ),
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  //   enableRowActions: false,
  //   muiTableContainerProps: {
  //    sx: {
  //     maxWidth: "calc(100vw - 348px)",
  //     "&::-webkit-scrollbar": {
  //      height: "10px",
  //     },
  //    },
  //   },
  //   renderEmptyRowsFallback: ({ table }) => (
  //    <EmptyState
  //     icon={<IconEmptyData />}
  //     title="Data Kosong"
  //     description="Silahkan isi konten halaman ini"
  //    />
  //   ),
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

 const isEmpty = false;

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
    <ContentPage title="Perlakuan Risiko" chooseProject>
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
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Perlakuan Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Detail Perlakuan Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="edit" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Detail Perlakuan Risiko"
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
