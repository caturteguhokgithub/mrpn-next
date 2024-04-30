import React from "react";
import Image from "next/image";
import {
 Typography,
 Stack,
 Paper,
 Button,
 DialogActions,
 Box,
 Tooltip,
 MenuItem,
 SelectChangeEvent,
 Grid,
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
import FormProfilRoProject from "./form-profil-ro-project";
import SelectCustomTheme from "@/app/components/select";
import { grey, green, red } from "@mui/material/colors";
import FormPendanaan from "./form-pendanaan";

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

export default function TabPolicy({ project }: { project: string }) {
 const [modalOpenProfilRoKunci, setModalOpenProfilRoKunci] =
  React.useState(false);
 const [modalOpenProfilRoKunciProject, setModalOpenProfilRoKunciProject] =
  React.useState(false);
 const [modalOpenRoadmap, setModalOpenRoadmap] = React.useState(false);
 const [modalOpenCritical, setModalOpenCritical] = React.useState(false);
 const [value, setValue] = React.useState("");
 const [modalOpenImgRoadmap, setModalOpenImgRoadmap] = React.useState(false);
 const [modalOpenImgCritical, setModalOpenImgCritical] = React.useState(false);
 const [projectKL, setProjectKL] = React.useState("");
 const [modalOpenPendanaan, setModalOpenPendanaan] = React.useState(false);

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProjectKL(event.target.value);
 };

 const handleModalOpenProfilRoKunci = () => {
  setModalOpenProfilRoKunci(true);
 };
 const handleModalOpenRoadmap = () => {
  setModalOpenRoadmap(true);
 };
 const handleModalOpenCritical = () => {
  setModalOpenCritical(true);
 };
 const handleModalImgRoadmap = () => {
  setModalOpenImgRoadmap(true);
 };
 const handleModalImgCritical = () => {
  setModalOpenImgCritical(true);
 };
 const handleModalOpenProfilRoKunciProject = () => {
  setModalOpenProfilRoKunciProject(true);
 };

 const handleModalOpenPendanaan = () => {
  setModalOpenPendanaan(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRoKunci(false);
  setModalOpenRoadmap(false);
  setModalOpenCritical(false);
  setModalOpenImgRoadmap(false);
  setModalOpenImgCritical(false);
  setModalOpenProfilRoKunciProject(false);
  setModalOpenPendanaan(false);
 };
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title="Project Roadmap"
    setting
    settingEditOnclick={handleModalOpenRoadmap}
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <Box width="100%" textAlign="center">
       <Tooltip title="Klik untuk perbesar gambar" placement="right">
        <Image
         alt="project-roadmap"
         src="https://res.cloudinary.com/caturteguh/image/upload/v1711265069/mrpn/project-roadmap_oleiip.png"
         width={0}
         height={0}
         sizes="100vw"
         style={{
          width: "70%",
          height: "auto",
          margin: "0 auto",
          cursor: "pointer",
         }}
         onClick={handleModalImgRoadmap}
        />
       </Tooltip>
      </Box>
      <DialogComponent
       width="80%"
       dialogOpen={modalOpenImgRoadmap}
       dialogClose={handleModalClose}
      >
       <Image
        alt="project-roadmap"
        src="https://res.cloudinary.com/caturteguh/image/upload/v1711265069/mrpn/project-roadmap_oleiip.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{
         width: "100%",
         height: "auto",
         margin: "0 auto",
        }}
        onClick={handleModalImgRoadmap}
       />
      </DialogComponent>
     </>
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
     <Typography variant="caption" component="div" mb={2}>
      Format gambar: <strong>.png / .jpg / .jpeg</strong>. Ukuran gambar{" "}
      <strong>max. 200kb</strong>
     </Typography>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Profil Intevensi Kunci"
    addButton={
     <>
      <AddButton
       filled
       small
       title="Tambah Project"
       onclick={handleModalOpenProfilRoKunciProject}
      />
      <AddButton
       filled
       small
       title="Tambah Profil RO"
       onclick={handleModalOpenProfilRoKunci}
      />
     </>
    }
   >
    {isEmpty || project === "4" ? (
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
     headerAction={
      <SelectCustomTheme
       small
       anchorRight
       value={projectKL}
       onChange={handleChangeProject}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih K/L
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Kesehatan
       </MenuItem>
       <MenuItem value="2">Kementerian PUPR</MenuItem>
       <MenuItem value="3">Kementerian Perindustrian</MenuItem>
      </SelectCustomTheme>
     }
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
    <DialogComponent
     width={1000}
     dialogOpen={modalOpenProfilRoKunciProject}
     dialogClose={handleModalClose}
     title="Tambah Nomenklatur RO/Project"
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
     <FormProfilRoProject mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Critical Path Prioritas Proyek"
    setting
    settingEditOnclick={handleModalOpenCritical}
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <Box width="100%" textAlign="center">
       <Tooltip title="Klik untuk perbesar gambar" placement="right">
        <Image
         alt="Critical Path Prioritas Proyek"
         src="https://res.cloudinary.com/caturteguh/image/upload/v1711267538/mrpn/critical-path_rgszyv.png"
         width={0}
         height={0}
         sizes="100vw"
         style={{
          width: "70%",
          height: "auto",
          margin: "0 auto",
          cursor: "pointer",
         }}
         onClick={handleModalImgCritical}
        />
       </Tooltip>
      </Box>
      <DialogComponent
       width="80%"
       dialogOpen={modalOpenImgCritical}
       dialogClose={handleModalClose}
      >
       <Image
        alt="Critical Path Prioritas Proyek"
        src="https://res.cloudinary.com/caturteguh/image/upload/v1711267538/mrpn/critical-path_rgszyv.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{
         width: "100%",
         height: "auto",
         margin: "0 auto",
        }}
        onClick={handleModalImgRoadmap}
       />
      </DialogComponent>
     </>
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
     <Typography variant="caption" component="div" mb={2}>
      Format gambar: <strong>.png / .jpg / .jpeg</strong>. Ukuran gambar{" "}
      <strong>max. 200kb</strong>
     </Typography>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Pendanaan & Investasi Proyek"
    setting
    settingEditOnclick={handleModalOpenPendanaan}
   >
    {isEmpty || project === "4" ? (
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
  </Stack>
 );
}
