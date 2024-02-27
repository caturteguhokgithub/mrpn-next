/* eslint-disable @next/next/no-img-element */
"use client";

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

export default function TableMilestone({}) {
 function createData(
  id: number,
  program: string,
  penaggungjawab: string,
  sumber_anggaran: string,
  penyelesaian: string
 ) {
  return { id, program, penaggungjawab, sumber_anggaran, penyelesaian };
 }

 const rows = [
  createData(
   1,
   "Infrastruktur KI",
   "Perusahaan Patungan",
   "PMN kepada PT KIW",
   "2022-12-31"
  ),
  createData(
   2,
   "Suplesi air baku dan drainase utama kawasan klaster 1 fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31"
  ),
  createData(
   3,
   "Sistem penyediaan air minum, pengelolaan limbah terintegrasi dan pengelolaan persampahan klaster 1 fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31"
  ),
  createData(
   4,
   "Rumah susun dan fasilitasnya di Klaster 1 Fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31"
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
    <Typography>Milestone</Typography>
    <Button
     variant="contained"
     size="small"
     startIcon={<AddCircle />}
     sx={{ lineHeight: 1, py: 1 }}
    >
     Tambah Milestone
    </Button>
   </Stack>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Program/ Kegiatan</TableCell>
       <TableCell>Penanggung Jawab</TableCell>
       <TableCell>Sumber Anggaran</TableCell>
       <TableCell width="200px">Penyelesaian</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell sx={{ textAlign: "center" }}>
         <Tooltip title="Delete" placement="top">
          <IconButton aria-label="delete" color="error">
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
        <TableCell>{row.program}</TableCell>
        <TableCell>{row.penaggungjawab}</TableCell>
        <TableCell>{row.sumber_anggaran}</TableCell>
        <TableCell>{row.penyelesaian}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
