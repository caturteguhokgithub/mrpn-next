import React from "react";
import {
 Button,
 Icon,
 IconButton,
 Paper,
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

export default function TablePeraturan({ mode }: { mode?: string }) {
 function createData(id: number, peraturan: string, amanat: string) {
  return { id, peraturan, amanat };
 }

 const rows = [
  createData(
   1,
   "Peraturan Presiden Nomor 79 Tahun 2019 tentang Percepatan Pembangunan Ekonomi Kawasan Kendal -Semarang - Salatiga - Demak - Grobongan, Kawasan Purworejo - Wonosobo - Magelang - Temanggung, dan Kawasan Brebes - Tegal – Pemalang",
   "Pasal 1 “Untuk mendukung dan memberikan nilai tambah Pembangunan Kawasan sebagaimana dimaksud pada ayat (1) dilakukan pengembangan: b. Kawasan Pekalongan – Batang, yang selanjutnya disebut Kawasan Petanglong”"
  ),
  createData(
   2,
   "Peraturan Presiden Nomor 106 Tahun 2022 tentang Percepatan Investasi Melalui Pengembangan Kawasan Industri Terpadu Batang di Provinsi Jawa Tengah",
   "Pasal 5 “Untuk melaksanakan percepatan pengembangan Kawasan Industri Terpadu Batang sebagaimana dimaksud dalam Pasal 1, dibentuk Tim Percepatan Pengembangan Kawasan lndustri Terpadu Batang, yang selanjutnya dalam Peraturan Presiden ini disebut Tim Koordinasi”"
  ),
  createData(
   3,
   "Peraturan Presiden Nomor 109 Tahun 2020 tentang Perubahan Ketiga atas Peraturan Presiden Nomor 3 Tahun 2016 tentang Percepatan Pelaksanaan Proyek Strategis Nasional",
   "Lampiran Daftar PSN “E. Sektor Kawasan 108. Kawasan Industri Terpadu Batang – Provinsi Jawa Tengah”"
  ),
 ];

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Daftar Peraturan Perundang-Undangan yang Terkait</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="contained"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1 }}
     >
      Tambah Peraturan Terkait
     </Button>
    ) : null}
   </Stack>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Peraturan Terkait</TableCell>
       <TableCell>Amanat Peraturan yang Terkait</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableCell colSpan={3}>
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
          <TableCell>{row.peraturan}</TableCell>
          <TableCell>{row.amanat}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
