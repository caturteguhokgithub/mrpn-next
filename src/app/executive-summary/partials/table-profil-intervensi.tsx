import React from "react";
import {
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";
import { CheckBox } from "@mui/icons-material";

export default function TableProfilIntervensi() {
 function createData(
  id: number,
  kode: string,
  klUtama: string,
  klKontributor: string,
  nomenklatur: string,
  target: string,
  anggaran: string,
  sumberAnggaran: string
 ) {
  return {
   id,
   kode,
   klUtama,
   klKontributor,
   nomenklatur,
   target,
   anggaran,
   sumberAnggaran,
  };
 }

 const rows = [
  createData(
   1,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Pendampingan terkait Kesehatan dan gizi bagi ibu hamil di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   2,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Ibu Hamil yang melahirkan di faskes Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   3,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Ibu Hamil yang mengkonsumsi PMT di Daerah XXXX",
   "-",
   "-",
   "APBN"
  ),
  createData(
   4,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Pembinaan pendampingan Ibu pascapersalinan di Daerahh XXXX",
   "-",
   "-",
   "APBN"
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Format Kode</TableCell>
      <TableCell>Entitas Utama</TableCell>
      <TableCell>Entitas Kontributor</TableCell>
      <TableCell>Nomenklatur RO/Project</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>Anggaran</TableCell>
      <TableCell>Sumber Anggaran</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.kode}</TableCell>
       <TableCell>{row.klUtama}</TableCell>
       <TableCell>{row.klKontributor}</TableCell>
       <TableCell>{row.nomenklatur}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.anggaran}</TableCell>
       <TableCell>{row.sumberAnggaran}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
