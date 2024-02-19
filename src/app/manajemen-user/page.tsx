"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "../components/layouts/layout";
import { Box, Button, Icon, IconButton, Paper, Stack } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import {
 useMaterialReactTable,
 type MRT_ColumnDef,
 MRT_GlobalFilterTextField,
 MRT_TableContainer,
 MRT_TablePagination,
 MRT_ToolbarAlertBanner,
 MaterialReactTable,
} from "material-react-table";
import { data, type Person } from "./data";
import { grey } from "@mui/material/colors";

export default function PageUserManagement() {
 //  const columns = useMemo<MRT_ColumnDef<Person>[]>(
 //   () => [
 //    {
 //     accessorKey: "id",
 //     enableColumnPinning: false, //disable column pinning for this column
 //     header: "No.",
 //     size: 120,
 //     grow: false,
 //    },
 //    {
 //     accessorKey: "firstName",
 //     header: "Nama",
 //     size: 700,
 //     grow: true,
 //    },
 //   ],
 //   []
 //  );

 const columns = useMemo<MRT_ColumnDef<Person>[]>(
  () => [
   {
    accessorKey: "id",
    header: "No.",
    size: 100,
    grow: false,
   },
   {
    accessorFn: (row) => `${row.name.firstName} ${row.name.lastName}`,
    // accessorKey: "name.firstName",
    header: "Nama User",
    size: 1000,
    grow: true,
   },
  ],
  []
 );

 const table = useMaterialReactTable({
  columns,
  data,
  initialState: { showGlobalFilter: true },
  renderTopToolbarCustomActions: ({ table }) => (
   <Box>
    <Button
     variant="outlined"
     startIcon={
      <Icon
       baseClassName="fas"
       className={`fa-plus-circle`}
       sx={{
        fontSize: 2,
       }}
      />
     }
     sx={{ borderRadius: "50px" }}
    >
     Tambah User
    </Button>
   </Box>
  ),
  renderToolbarInternalActions: ({ table }) => (
   <Box>
    <MRT_GlobalFilterTextField
     sx={{
      width: "20vw",
      ".MuiInputBase-root": {
       height: "36.5px",
       borderRadius: "50px",
       svg: {
        width: 20,
       },
      },
      ".MuiButtonBase-root": {
       svg: {
        width: 20,
       },
      },
      svg: {
       fill: grey[400],
      },
      input: {
       py: 0,
      },
     }}
     table={table}
    />
   </Box>
  ),
  positionActionsColumn: "last",
  enableRowActions: true,
  //   enableColumnResizing: true,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "", //change header text
    size: 150, //make actions column wider
    Cell: ({ row, table }) => (
     <Stack direction="row" justifyContent="flex-end" width="100%">
      <Link href="/manajemen-user/role">
       <IconButton
        aria-label="edit"
        color="primary"
        //  sx={{ bgcolor: theme.palette.primary.main, color: "white" }}
       >
        <Icon
         // onClick={() => table.setEditingRow(row)}
         baseClassName="fas"
         className={`fa-pencil`}
         sx={{
          fontSize: "14px",
         }}
        />
       </IconButton>
      </Link>
      <IconButton
       aria-label="edit"
       color="error"
       //  sx={{ bgcolor: theme.palette.primary.main, color: "white" }}
      >
       <Icon
        onClick={() => table.setEditingRow(row)}
        baseClassName="fas"
        className={`fa-trash`}
        sx={{
         fontSize: "14px",
        }}
       />
      </IconButton>
     </Stack>
    ),
   },
  },
  muiTableHeadCellProps: {
   sx: (theme) => ({
    bgcolor: theme.palette.primary.light,
   }),
  },
 });

 //  const table = useMaterialReactTable({
 //   columns,
 //   data,
 //   // enableRowSelection: true,
 //   positionActionsColumn: "last",
 //   initialState: { showGlobalFilter: true },
 //   enableRowActions: true,
 //   enableColumnResizing: true,
 //   displayColumnDefOptions: {
 //    "mrt-row-actions": {
 //     header: "", //change header text
 //     size: 100, //make actions column wider
 //    },
 //   },
 //   renderRowActions: ({ row }) => (
 //    <Box sx={{ display: "flex", gap: "1rem" }}>
 //     <Link href="/manajemen-user/role">
 //      <IconButton
 //       aria-label="edit"
 //       color="primary"
 //       //  sx={{ bgcolor: theme.palette.primary.main, color: "white" }}
 //      >
 //       <Icon
 //        // onClick={() => table.setEditingRow(row)}
 //        baseClassName="fas"
 //        className={`fa-pencil`}
 //        sx={{
 //         fontSize: "14px",
 //        }}
 //       />
 //      </IconButton>
 //     </Link>
 //     <IconButton
 //      aria-label="edit"
 //      color="error"
 //      //  sx={{ bgcolor: theme.palette.primary.main, color: "white" }}
 //     >
 //      <Icon
 //       onClick={() => table.setEditingRow(row)}
 //       baseClassName="fas"
 //       className={`fa-trash`}
 //       sx={{
 //        fontSize: "14px",
 //       }}
 //      />
 //     </IconButton>
 //    </Box>
 //   ),
 //   muiTableHeadCellProps: {
 //    //no useTheme hook needed, just use the `sx` prop with the theme callback
 //    sx: (theme) => ({
 //     bgcolor: theme.palette.primary.light,
 //    }),
 //   },
 //  });

 return (
  <DashboardLayout>
   <ContentPage title="Manajemen User">
    <Paper elevation={1} sx={{ borderRadius: 4 }}>
     {/* <Stack direction="row" justifyContent="space-between" p={2}>
      <Box>
       <Button
        variant="outlined"
        startIcon={
         <Icon
          baseClassName="fas"
          className={`fa-plus-circle`}
          sx={{
           fontSize: 2,
          }}
         />
        }
        sx={{ borderRadius: "50px" }}
       >
        Tambah User
       </Button>
      </Box>
      <MRT_GlobalFilterTextField
       sx={{
        width: "20vw",
        ".MuiInputBase-root": {
         height: "36.5px",
         borderRadius: "50px",
         svg: {
          width: 20,
         },
        },
        ".MuiButtonBase-root": {
         svg: {
          width: 20,
         },
        },
        svg: {
         fill: grey[400],
        },
        input: {
         py: 0,
        },
       }}
       table={table}
      />
     </Stack> */}
     <Paper
      elevation={0}
      sx={{ width: "100%", border: "1px solid", borderColor: grey[200] }}
     >
      <MaterialReactTable table={table} />
      {/* <MRT_TableContainer table={table} />
      <Box>
       <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MRT_TablePagination table={table} />
       </Box>
       <Box sx={{ display: "grid", width: "100%" }}>
        <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
       </Box>
      </Box> */}
     </Paper>
    </Paper>
   </ContentPage>
  </DashboardLayout>
 );
}
