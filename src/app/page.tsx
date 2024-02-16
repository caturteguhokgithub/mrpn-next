"use client";

import * as React from "react";
import { Metadata } from "next";
import PageDashboard from "./dashboard/page";

import "./globals.css";

// export const metadata: Metadata = {
//  title: "Dashboard",
// };

export default function Home() {
 return <PageDashboard />;
}
