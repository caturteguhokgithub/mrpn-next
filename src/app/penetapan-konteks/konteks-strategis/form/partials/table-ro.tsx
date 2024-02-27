/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
 Button,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";

export default function TableRincianOutput({}) {
 function createData(
  id: number,
  kode: string,
  namaRo: string,
  target: number,
  satuan: string,
  kementerian: string
 ) {
  return { id, kode, namaRo, target, satuan, kementerian };
 }

 const rows = [
  createData(
   1,
   "xxx.xxx.xx.xxxx.xx",
   "Eksekusi Realisasi Investasi Proyek-Proyek Mangkrak Di Wilayah Barat",
   253,
   "juta",
   "BADAN INTELIJEN NEGARA"
  ),
  createData(
   2,
   "xxx.xxx.xx.xxxx.xx",
   "Layanan Pendampingan Keberlanjutan Investasi",
   6000,
   "orang",
   "BADAN INTELIJEN NEGARA"
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
    <Typography>Rincian Output (RO) Kunci</Typography>
    <Button
     variant="contained"
     size="small"
     startIcon={<AddCircle />}
     sx={{ lineHeight: 1, py: 1 }}
    >
     Tambah RO Kunci
    </Button>
   </Stack>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell>Kode</TableCell>
       <TableCell>Nama RO</TableCell>
       <TableCell width="120px">Target RO</TableCell>
       <TableCell width="120px">Satuan</TableCell>
       <TableCell>Kementerian</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell>{row.kode}</TableCell>
        <TableCell>{row.namaRo}</TableCell>
        <TableCell>{row.target}</TableCell>
        <TableCell>{row.satuan}</TableCell>
        <TableCell>{row.kementerian}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
