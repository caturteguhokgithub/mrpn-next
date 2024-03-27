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

const FundSource = ({
 label,
 value,
 color,
 isYear,
}: {
 label: string;
 value: string;
 color: string;
 isYear?: boolean;
}) => {
 return (
  <Stack
   direction="row"
   alignItems="center"
   boxSizing="border-box"
   width="100%"
   border={`2px solid ${color}`}
   borderRadius="8px"
  >
   <Box
    color="white"
    bgcolor={color}
    border={`2px solid ${color}`}
    p="8px 16px"
    fontWeight={700}
    letterSpacing={0.2}
    fontSize={14}
    minWidth={isYear ? 0 : 120}
   >
    {label}
   </Box>
   <Box
    p="8px 16px"
    fontWeight={600}
    fontSize={14}
    flexGrow={1}
    textAlign="right"
   >
    {value}
   </Box>
  </Stack>
 );
};

const CardStakeholder = ({
 title,
 img,
 description,
}: {
 title: string;
 img: string;
 description: React.ReactNode;
}) => {
 return (
  <Card sx={{ maxWidth: 345 }} elevation={2}>
   <CardContent>
    <Typography gutterBottom variant="h6" component="div" lineHeight={1.3}>
     {title}
    </Typography>
   </CardContent>
   <CardContent sx={{ textAlign: "center" }}>
    <Image
     alt={title}
     src={img}
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "100%", height: "auto" }}
    />
   </CardContent>
   <CardContent>
    <Typography variant="body2">{description}</Typography>
   </CardContent>
  </Card>
 );
};

export default function TabProfil({}) {
 const [modalOpenSasaran, setModalOpenSasaran] = React.useState(false);
 const [modalOpenProfilRo, setModalOpenProfilRo] = React.useState(false);
 const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);
 const [modalOpenPendanaan, setModalOpenPendanaan] = React.useState(false);
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
 const handleModalOpenPendanaan = () => {
  setModalOpenPendanaan(true);
 };

 const handleModalClose = () => {
  setModalOpenSasaran(false);
  setModalOpenProfilRo(false);
  setModalOpenStakeholder(false);
  setModalOpenPendanaan(false);
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
    title="Pendanaan & Investasi Proyek"
    setting
    settingEditOnclick={handleModalOpenPendanaan}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Grid container spacing={2}>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Jumlah per Tahun
        </Typography>
        <Stack gap={1} mt={1}>
         <FundSource isYear color={grey[600]} label="2023" value="Rp. -" />
         <FundSource isYear color={grey[600]} label="2024" value="Rp. -" />
        </Stack>
       </Paper>
      </Grid>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Sumber Pendanaan
        </Typography>
        <Stack gap={1} mt={1}>
         <FundSource color={green[400]} label="APBN" value="Rp. -" />
         <FundSource color={red[400]} label="Non-APBN" value="Rp. -" />
        </Stack>
       </Paper>
      </Grid>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Kesiapan Pendanaan
        </Typography>
        <ul>
         <li>Menyebutkan posisi saat ini dalam proses pemenuhan pendanaan</li>
         <li>Menyebutkan persen nominal pendanaan yang sudah didapatkan</li>
        </ul>
       </Paper>
      </Grid>
     </Grid>
    )}
    <DialogComponent
     dialogOpen={modalOpenPendanaan}
     dialogClose={handleModalClose}
     title="Pendanaan & Investasi Proyek"
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
     <FormPendanaan mode="add" />
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
     <Stack direction="row" flexWrap="wrap" gap={2} maxWidth={800}>
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
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
  </Stack>
 );
}
