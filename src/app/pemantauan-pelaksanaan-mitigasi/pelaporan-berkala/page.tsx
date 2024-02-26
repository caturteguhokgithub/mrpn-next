"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";

export default function PagePelaporanBerkala({}) {
 return (
  <DashboardLayout>
   <ContentPage title="Pelaporan Berkala" withCard>
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Pelaporan Berkala Masih Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
