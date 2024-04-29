import React from "react";
import {
 Typography,
 Stack,
 Paper,
 Grid,
 Box,
 Button,
 DialogActions,
 Card,
 CardActions,
 CardContent,
 CardMedia,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { green, grey, red } from "@mui/material/colors";
import TableDampak from "./table-dampak";
import AddButton from "@/app/components/buttonAdd";
import TableProfilOutput from "./table-profil-output";
import DialogComponent from "@/app/components/dialog";
import FormSasaran from "./form-sasaran";
import FormProfilRo from "./form-profil-ro";
import dynamic from "next/dynamic";
import FormPendanaan from "./form-pendanaan";
import Image from "next/image";
import FormStakeholder from "./form-stakeholder";
import CardStakeholder from "@/app/components/cardStakeholder";

export default function TabProfil({}) {
 const [modalOpenSasaran, setModalOpenSasaran] = React.useState(false);
 const [modalOpenProfilRo, setModalOpenProfilRo] = React.useState(false);
 const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);
 const [value, setValue] = React.useState("");

 const handleModalOpenSasaran = () => {
  setModalOpenSasaran(true);
 };
 const handleModalOpenProfilRo = () => {
  setModalOpenProfilRo(true);
 };
 const handleModalOpenStakeholder = () => {
  setModalOpenStakeholder(true);
 };

 const handleModalClose = () => {
  setModalOpenSasaran(false);
  setModalOpenProfilRo(false);
  setModalOpenStakeholder(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title="Cascading Sasaran, Indikator, Target RO"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Sasaran"
      onclick={handleModalOpenSasaran}
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
     <TableDampak />
    )}
    <DialogComponent
     dialogOpen={modalOpenSasaran}
     dialogClose={handleModalClose}
     title="Tambah Sasaran"
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
     <FormSasaran mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Profil Rincian Output"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Profil RO"
      onclick={handleModalOpenProfilRo}
     />
    }
   >
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <TableProfilOutput />
    <DialogComponent
     dialogOpen={modalOpenProfilRo}
     dialogClose={handleModalClose}
     title="Tambah Profil RO"
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
     <FormProfilRo mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Stakeholder Mapping"
    setting
    settingEditOnclick={handleModalOpenStakeholder}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Stack direction="row" flexWrap="wrap" gap={2}>
      <CardStakeholder
       title="Entitas Pendukung"
       img="https://res.cloudinary.com/caturteguh/image/upload/v1711255729/mrpn/stakeholder-entitas-pendukung_e0fimb.png"
       description={
        <>
         <strong>Keep Satisfied</strong>. Penyediaan gizi sesuai dengan standar.
        </>
       }
      />
      <CardStakeholder
       title="Entitas Utama"
       img="https://res.cloudinary.com/caturteguh/image/upload/v1711255595/mrpn/stakeholder-entitas-utama_zsyvn4.png"
       description={
        <>
         <strong>Manage Closely</strong>. Meningkatkan asupan gizi dan
         menyediakan sarana dan prasarana dasar.
        </>
       }
      />
      <CardStakeholder
       title="Monitoring dan Pengawasan"
       img="https://res.cloudinary.com/caturteguh/image/upload/v1711255600/mrpn/stakeholder-monitoring_ztxfek.png"
       description={
        <>
         <strong>Monitor</strong>. Melakukan proses pengawasan atas penyaluran
         asupan gizi dan penyediaan sarpras secara berkelanjutan kepada
         masyarakat.
        </>
       }
      />
      <CardStakeholder
       title="Koordinasi, Informasi, sosialisasi berkala"
       img="https://res.cloudinary.com/caturteguh/image/upload/v1711255598/mrpn/stakeholder-koordinasi_bjgmuu.png"
       description={
        <>
         <strong>Keep Informed</strong>. Keterlibatan pemerintah daerah dalam
         pelaksanaan penurunan stunting yang diagendakan pada beberapa daerah.
        </>
       }
      />
     </Stack>
    )}

    <DialogComponent
     dialogOpen={modalOpenStakeholder}
     dialogClose={handleModalClose}
     title="Stakeholder Mapping"
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
     <FormStakeholder mode="add" />
    </DialogComponent>
   </CardItem>
  </Stack>
 );
}
