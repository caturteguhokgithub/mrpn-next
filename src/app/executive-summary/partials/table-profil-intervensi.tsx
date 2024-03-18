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

export default function TableProfilIntervensi() {
 function createData(
  id: number,
  nomenklatur: string,
  anggaran: string,
  sumberAnggaran: string,
  target: string,
  klPelaksana: string,
  klKontributor: string
 ) {
  return {
   id,
   nomenklatur,
   anggaran,
   sumberAnggaran,
   target,
   klPelaksana,
   klKontributor,
  };
 }

 const rows = [createData(1, "-", "-", "-", "-", "-", "-")];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Nomenklatur</TableCell>
      <TableCell>Anggaran</TableCell>
      <TableCell>Sumber Anggaran</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>KL Pelaksana</TableCell>
      <TableCell>KL Kontributor</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.nomenklatur}</TableCell>
       <TableCell>{row.anggaran}</TableCell>
       <TableCell>{row.sumberAnggaran}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.klPelaksana}</TableCell>
       <TableCell>{row.klKontributor}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
