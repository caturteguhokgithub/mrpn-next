"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "../components/layouts/layout";
import EmptyState from "../components/empty";
import { IconEmptyPage } from "../components/icons";

export default function PageEvaluasiRisiko({}) {
 return (
  <DashboardLayout>
   <ContentPage title="Evaluasi Risiko" withCard>
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Profil Risiko Masih Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
