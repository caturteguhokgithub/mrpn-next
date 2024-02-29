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
import ActionColumn from "@/components/actions/action";
import AddButton from "@/utils/smallComponent";

type ColumnsType = {};

export default function PageUserManagement() {
 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => <AddButton title="Tambah User" />,
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
    Cell: () => <ActionColumn editUrl="/manajemen-user/role" />,
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
