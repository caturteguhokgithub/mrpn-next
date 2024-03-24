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

export default function TableProfilOutput() {
 function createData(
  id: number,
  kl: string,
  ro: string,
  target: string,
  anggaran: string
 ) {
  return {
   id,
   kl,
   ro,
   target,
   anggaran,
  };
 }

 const rows = [
  createData(
   1,
   "Kementerian PUPR",
   "Studi Kelayakan Pengembangan SPAM dari Bendungan ...... Di Daerah XXXX (target 1000 SR)",
   "-",
   "-"
  ),
  createData(
   2,
   "Kementerian Kesehatan",
   "Diseminasi Informasi Mengenai Stunting",
   "-",
   "-"
  ),
  createData(
   3,
   "Kementerian PUPR",
   "Pembebasan Lahan di Daerah XXXX (pembangunan SPAM)",
   "-",
   "-"
  ),
  createData(
   4,
   "Kementerian Kesehatan",
   "Pengembangan SPAM di Daerah XXXX (300 SR Kumulatif)",
   "-",
   "-"
  ),
  createData(
   5,
   "Kementerian Kesehatan",
   "Pengembangan SPAM di Daerah XXXX (400 SR Kumulatif)",
   "-",
   "-"
  ),
  createData(
   6,
   "Kementerian Kesehatan",
   "Pengembangan SPAM di Daerah XXXX (300 SR Kumulatif)",
   "-",
   "-"
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      {/* <TableCell>Alokasi APBN</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>KL Pelaksana/PIC</TableCell> */}
      <TableCell>KL</TableCell>
      <TableCell>RO</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>Anggaran</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.kl}</TableCell>
       <TableCell>{row.ro}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.anggaran}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
