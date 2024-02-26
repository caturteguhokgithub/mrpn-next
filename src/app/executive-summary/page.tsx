"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "../components/layouts/layout";
import EmptyState from "../components/empty";
import { IconEmptyPage } from "../components/icons";

export default function PageExecutiveSummary({}) {
 return (
  <DashboardLayout>
   <ContentPage title="Executive Summary" withCard>
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Executive Summary Masih Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
