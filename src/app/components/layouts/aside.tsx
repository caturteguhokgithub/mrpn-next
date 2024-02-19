import React from "react";
import { Typography, Box, Stack, Collapse } from "@mui/material";
import Image from "next/image";
import { MenuItem } from "./partials/menu";
import { MenuGroup } from "./partials/menu-group";
import { SubmenuItem } from "./partials/submenu";
import {
 IconAnalisis,
 IconDashboard,
 IconEvaluasi,
 IconExecutive,
 IconKeluar,
 IconManajemen,
 IconPemantauan,
 IconPenetapan,
 IconProfil,
} from "../icons";

export default function Aside({ isExpanded }: { isExpanded?: boolean }) {
 const CompanyIcon = (
  <Stack
   width="100%"
   height="120px"
   alignItems="center"
   justifyContent="center"
   direction="row"
  >
   <Collapse in={isExpanded}>
    <Stack
     width="100%"
     height="120px"
     alignItems="center"
     justifyContent="center"
     direction="row"
     gap={2}
    >
     <Box
      sx={{
       transition: "all 300ms ease",
      }}
     >
      <Image
       width={64}
       height={68}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      />
     </Box>
     <Typography
      color="white"
      fontSize="14px"
      fontWeight={600}
      variant="caption"
      textTransform="uppercase"
      lineHeight={1.3}
      maxWidth="136px"
     >
      Manajemen Risiko Pembangunan Nasional
     </Typography>
    </Stack>
   </Collapse>
  </Stack>
 );

 const subMenuKonteks = "penetapan-konteks";
 const subMenuAnalisis = "analisis-risiko";
 const subMenuMitigasi = "pemantauan-pelaksanaan-mitigasi";

 const Sidemenu = (
  <Stack
   direction="column"
   justifyContent="space-between"
   height="calc(100% - 120px)"
  >
   <Stack gap="40px" direction="column">
    <MenuGroup isExpanded={isExpanded} label="menu">
     <Stack direction="column" gap={1}>
      <MenuItem
       isExpanded={isExpanded}
       label="dashboard"
       icon={<IconDashboard />}
       url=""
      />
      <MenuItem
       isExpanded={isExpanded}
       label="Executive Summary"
       icon={<IconExecutive />}
       url="executive-summary"
      />
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="penetapan konteks"
       icon={<IconPenetapan />}
       url={subMenuKonteks}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuKonteks)
         : false
       }
      >
       <SubmenuItem
        label="Konteks Strategis"
        url={subMenuKonteks}
        urlLv2="konteks-strategis"
       />
       <SubmenuItem
        label="Selera Risiko"
        url={subMenuKonteks}
        urlLv2="selera-risiko"
       />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Analisis Risiko"
       icon={<IconAnalisis />}
       url={subMenuAnalisis}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuAnalisis)
         : false
       }
      >
       <SubmenuItem
        label="Registrasi Risiko"
        url={subMenuAnalisis}
        urlLv2="registrasi-risiko"
       />
       <SubmenuItem
        label="Penilaian Risiko"
        url={subMenuAnalisis}
        urlLv2="penilaian-risiko"
       />
       <SubmenuItem
        label="Persetujuan Risiko"
        url={subMenuAnalisis}
        urlLv2="persetujuan-risiko"
       />
      </MenuItem>
      <MenuItem
       isExpanded={isExpanded}
       label="Profil Risiko"
       icon={<IconProfil />}
       url="profil-risiko"
      />
      <MenuItem
       isExpanded={isExpanded}
       label="Evaluasi Risiko"
       icon={<IconEvaluasi />}
       url="evaluasi-risiko"
      />
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Pemantauan Pelaksanaan Mitigasi"
       icon={<IconPemantauan />}
       url={subMenuMitigasi}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuMitigasi)
         : false
       }
      >
       <SubmenuItem
        label="Peringatan Dini & Saran"
        url={subMenuMitigasi}
        urlLv2="peringatan-dini-saran"
       />
       <SubmenuItem
        label="Pemantauan"
        url={subMenuMitigasi}
        urlLv2="pemantauan"
       />
       <SubmenuItem
        label="Pelaporan Berkala"
        url={subMenuMitigasi}
        urlLv2="pelaporan-berkala"
       />
      </MenuItem>
     </Stack>
    </MenuGroup>
    <MenuGroup isExpanded={isExpanded} label="administrator">
     <Stack direction="column" gap={1}>
      <MenuItem
       isExpanded={isExpanded}
       label="manajemen user"
       icon={<IconManajemen />}
       url="manajemen-user"
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes("manajemen-user")
         : false
       }
      />
     </Stack>
    </MenuGroup>
   </Stack>
   <MenuItem
    isExpanded={isExpanded}
    reflect
    label="keluar sistem"
    icon={<IconKeluar />}
   />
  </Stack>
 );

 return (
  <Box color="white" px="0" height="100vh" pb={4}>
   {CompanyIcon}
   {Sidemenu}
  </Box>
 );
}
