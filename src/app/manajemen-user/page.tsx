/* eslint-disable react/display-name */
"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { advancedTable } from "@/app/components/table";
import { columns, data } from "./setting";
import { Box, Button, Icon } from "@mui/material";
import { blue } from "@mui/material/colors";
import ActionColumn from "../components/actions/action";

type ColumnsType = {};

export default function PageUserManagement() {
 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
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
     sx={{
      borderRadius: "50px",
      "&:hover": {
       bgcolor: blue[800],
       color: "white",
      },
     }}
    >
     Tambah User
    </Button>
   </Box>
  ),
 };
 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 50,
    Cell: () => <ActionColumn editUrl="/manajemen-user" />,
   },
  },
 });

 return (
  <DashboardLayout>
   <ContentPage title="Manajemen User">
    <MaterialReactTable table={table} />
   </ContentPage>
  </DashboardLayout>
 );
}
