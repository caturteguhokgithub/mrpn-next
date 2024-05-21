import React from "react";
import {
 Button,
 DialogActions,
 Icon,
 IconButton,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormSasaran from "./form-sasaran";
import FormROKunci from "./form-ro-kunci";
import FormProfilRoProject from "@/app/executive-summary/partials/tabPolicy/form-profil-ro-project";
import SelectCustomTheme from "@/app/components/select";
import TableProfilRoKunci from "@/app/executive-summary/partials/tabPolicy/table-profil-ro-kunci";

export default function TableRincianOutput({ mode }: { mode?: string }) {
 const [modalOpenProfilRoKunci, setModalOpenProfilRoKunci] =
  React.useState(false);
 const [modalOpenProfilRoKunciProject, setModalOpenProfilRoKunciProject] =
  React.useState(false);
 const [projectMain, setProjectMain] = React.useState("");
 const [projectSupport, setProjectSupport] = React.useState("");

 const handleChangeProjectMain = (event: SelectChangeEvent) => {
  setProjectMain(event.target.value);
 };
 const handleChangeProjectSupport = (event: SelectChangeEvent) => {
  setProjectSupport(event.target.value);
 };

 const handleModalOpenProfilRoKunci = () => {
  setModalOpenProfilRoKunci(true);
 };
 const handleModalOpenProfilRoKunciProject = () => {
  setModalOpenProfilRoKunciProject(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRoKunci(false);
  setModalOpenProfilRoKunciProject(false);
 };

 function createData(
  id: number,
  kodeRo: string,
  namaRo: string,
  uraian: string,
  satuan: string,
  target: number,
  keuangan: string,
  kementerian: string,
  kode: string
 ) {
  return {
   id,
   kodeRo,
   namaRo,
   uraian,
   satuan,
   target,
   keuangan,
   kementerian,
   kode,
  };
 }

 const rows = [
  createData(
   1,
   "xxx.xxx.xx.xxxx.xx",
   "Eksekusi Realisasi Investasi Proyek-Proyek Mangkrak Di Wilayah Barat",
   "-",
   "juta",
   1,
   "-",
   "BADAN INTELIJEN NEGARA",
   "-"
  ),
  createData(
   2,
   "xxx.xxx.xx.xxxx.xx",
   "Layanan Pendampingan Keberlanjutan Investasi",
   "-",
   "orang",
   2,
   "-",
   "BADAN INTELIJEN NEGARA",
   "-"
  ),
 ];

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography fontWeight={600}>Profil Intervensi Kunci</Typography>
    {mode === "add" || mode === "edit" ? (
     <Stack direction="row" gap={1}>
      <Button
       variant="outlined"
       size="small"
       startIcon={<AddCircle />}
       sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
       onClick={handleModalOpenProfilRoKunciProject}
      >
       Tambah Project
      </Button>
      <Button
       variant="outlined"
       size="small"
       startIcon={<AddCircle />}
       sx={{ lineHeight: 1, py: 1, borderRadius: 24 }}
       onClick={handleModalOpenProfilRoKunci}
      >
       Tambah Profil RO
      </Button>
     </Stack>
    ) : null}
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell rowSpan={2} width="70px"></TableCell>
       <TableCell rowSpan={2}>Kode RO</TableCell>
       <TableCell rowSpan={2}>Nama RO</TableCell>
       <TableCell colSpan={4} align="center">
        Indikator Sasaran
       </TableCell>
       <TableCell rowSpan={2}>Kementerian</TableCell>
       <TableCell rowSpan={2}>Kode</TableCell>
      </TableRow>
      <TableRow>
       {/* <TableCell width="120px">Dukungan Sasaran KP</TableCell> */}
       <TableCell width="120px">Uraian Sasaran</TableCell>
       <TableCell width="120px">Satuan Sasaran</TableCell>
       <TableCell width="120px">Target Fisik</TableCell>
       <TableCell width="120px">Keuangan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableCell colSpan={8}>
        <EmptyState
         icon={<IconEmptyData />}
         title="Data Kosong"
         description="Silahkan isi konten tabel ini"
        />
       </TableCell>
      ) : (
       <>
        {rows.map((row) => (
         <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
          <TableCell sx={{ textAlign: "center" }}>
           <Tooltip title="Delete" placement="top">
            <IconButton
             aria-label="delete"
             color="error"
             disabled={mode === "view"}
            >
             <Icon
              baseClassName="fas"
              className={`fa-trash-alt`}
              sx={{
               fontSize: "14px",
              }}
             />
            </IconButton>
           </Tooltip>
          </TableCell>
          <TableCell>{row.kodeRo}</TableCell>
          <TableCell>{row.namaRo}</TableCell>
          <TableCell>{row.uraian}</TableCell>
          <TableCell>{row.satuan}</TableCell>
          <TableCell>{row.target}</TableCell>
          <TableCell>{row.keuangan}</TableCell>
          <TableCell>{row.kementerian}</TableCell>
          <TableCell>{row.kode}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
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
   <DialogComponent
    tableMode
    width={1000}
    dialogOpen={modalOpenProfilRoKunci}
    dialogClose={handleModalClose}
    title="Tambah Profil RO Kunci"
    headerAction={
     <Stack direction="row" gap={1}>
      <SelectCustomTheme
       rounded
       small
       anchorRight
       value={projectMain}
       onChange={handleChangeProjectMain}
       sx={{
        ".MuiSelect-select": {
         minHeight: 0,
        },
       }}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Kesehatan
       </MenuItem>
       <MenuItem value="2">Kementerian PUPR</MenuItem>
       <MenuItem value="3">Kementerian Perindustrian</MenuItem>
      </SelectCustomTheme>
      <SelectCustomTheme
       rounded
       small
       anchorRight
       value={projectSupport}
       onChange={handleChangeProjectSupport}
       sx={{
        ".MuiSelect-select": {
         minHeight: 0,
        },
       }}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Pendukung
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Pertanian
       </MenuItem>
       <MenuItem value="2">BPOM</MenuItem>
       <MenuItem value="3">Simas</MenuItem>
      </SelectCustomTheme>
     </Stack>
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
  </>
 );
}
