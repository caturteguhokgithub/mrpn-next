import React from "react";
import {
 Typography,
 Stack,
 Paper,
 Grid,
 Box,
 Button,
 DialogActions,
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

const FundSource = ({
 label,
 value,
 color,
}: {
 label: string;
 value: string;
 color: string;
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
    // borderRadius="8px 0 0 8px"
    fontWeight={700}
    letterSpacing={0.2}
    fontSize={14}
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

 return (
  <Stack gap={1}>
   <CardItem
    title={
     <>
      <em>Cascading</em> Sasaran, Indikator, Target RO
     </>
    }
    addButton={
     <AddButton
      filled
      small
      title="Tambah Sasaran"
      onclick={handleModalOpenSasaran}
     />
    }
   >
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <TableDampak />
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
    title={<em>Stakeholder Mapping</em>}
    setting
    settingEditOnclick={handleModalOpenStakeholder}
   >
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
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
   <CardItem
    title="Pendanaan & Investasi Proyek"
    setting
    settingEditOnclick={handleModalOpenPendanaan}
   >
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Grid container spacing={2}>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Jumlah per Tahun</Typography>
       <Stack gap={1} mt={1}>
        <FundSource color={grey[600]} label="2023" value="Rp. -" />
        <FundSource color={grey[600]} label="2024" value="Rp. -" />
       </Stack>
      </Paper>
     </Grid>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Sumber Pendanaan</Typography>
       <Stack gap={1} mt={1}>
        <FundSource color={green[400]} label="APBN" value="Rp. -" />
        <FundSource color={red[400]} label="Non-APBN" value="Rp. -" />
       </Stack>
      </Paper>
     </Grid>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Kesiapan Pendanaan</Typography>
       <Typography>-</Typography>
      </Paper>
     </Grid>
    </Grid>
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
  </Stack>
 );
}
