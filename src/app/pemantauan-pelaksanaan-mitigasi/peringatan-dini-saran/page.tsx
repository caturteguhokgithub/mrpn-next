"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";

export default function PagePeringatanDiniSaran({}) {
 return (
  <DashboardLayout>
   <ContentPage title="Peringatan Dini & Saran" withCard>
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Peringatan Dini & Saran Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
