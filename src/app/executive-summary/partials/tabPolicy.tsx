import React from "react";
import Image from "next/image";
import {
 Typography,
 Stack,
 Paper,
 Button,
 DialogActions,
 Box,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableProfilIntervensi from "./table-profil-intervensi";
import DialogComponent from "@/app/components/dialog";
import FormProfilRo from "./form-profil-ro";
import AddButton from "@/app/components/buttonAdd";
import FormProfilRoKunci from "./form-profil-ro-kunci";
import dynamic from "next/dynamic";
import TableProfilRoKunci from "./table-profil-ro-kunci";

export default function TabPolicy({}) {
 const [modalOpenProfilRoKunci, setModalOpenProfilRoKunci] =
  React.useState(false);
 const [modalOpenRoadmap, setModalOpenRoadmap] = React.useState(false);
 const [modalOpenCritical, setModalOpenCritical] = React.useState(false);
 const [value, setValue] = React.useState("");

 const handleModalOpenProfilRoKunci = () => {
  setModalOpenProfilRoKunci(true);
 };
 const handleModalOpenRoadmap = () => {
  setModalOpenRoadmap(true);
 };
 const handleModalOpenCritical = () => {
  setModalOpenCritical(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRoKunci(false);
  setModalOpenRoadmap(false);
  setModalOpenCritical(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title={<em>Project Roadmap</em>}
    setting
    settingEditOnclick={handleModalOpenRoadmap}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Box width="100%" textAlign="center">
      <Image
       alt="project-roadmap"
       src="https://res.cloudinary.com/caturteguh/image/upload/v1711265069/mrpn/project-roadmap_oleiip.png"
       width={0}
       height={0}
       sizes="100vw"
       style={{ width: "70%", height: "auto", margin: "0 auto" }}
      />
     </Box>
    )}

    <DialogComponent
     dialogOpen={modalOpenRoadmap}
     dialogClose={handleModalClose}
     title="Project Roadmap"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Profil RO Kunci"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Profil RO"
      onclick={handleModalOpenProfilRoKunci}
     />
    }
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableProfilIntervensi />
    )}
    <DialogComponent
     tableMode
     width={1000}
     dialogOpen={modalOpenProfilRoKunci}
     dialogClose={handleModalClose}
     title="Tambah Profil RO Kunci"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <TableProfilRoKunci />
    </DialogComponent>
   </CardItem>
   <CardItem
    title={
     <>
      <em>Critical Path</em> Prioritas Proyek
     </>
    }
    setting
    settingEditOnclick={handleModalOpenCritical}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Box width="100%" textAlign="center">
      <Image
       alt="project-roadmap"
       src="https://res.cloudinary.com/caturteguh/image/upload/v1711267538/mrpn/critical-path_rgszyv.png"
       width={0}
       height={0}
       sizes="100vw"
       style={{ width: "70%", height: "auto", margin: "0 auto" }}
      />
     </Box>
    )}
    <DialogComponent
     dialogOpen={modalOpenCritical}
     dialogClose={handleModalClose}
     title="Critical Path Prioritas Proyek"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
  </Stack>
 );
}
