import React from "react";
import {
 Box,
 Typography,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function createData(
 id: number,
 level: string,
 beban: string,
 penurunan: any,
 tuntutan: string,
 lingkungan: string,
 capaian: string
) {
 return { id, level, beban, penurunan, tuntutan, lingkungan, capaian };
}

const rows = [
 createData(
  1,
  "Rendah",
  "x ≤ 0,1 permil",
  <>
   Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
   <em>luring</em>), sampai dengan 3 kali dalam setahun. : {"<"} 2 kali dalam 1
   Tahun
  </>,
  "Teguran lisan/tulisan",
  "Proper Hijau",
  "Tidak tercapai < 5%"
 ),
 createData(
  2,
  "Sedang",
  "0,1 permil < x ≤ 10 permil",
  <>
   Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
   <em>luring</em>), sampai dengan 12 kali dalam setahun. : {"<"} 2 kali dalam 1
   Tahun
  </>,
  "Tuntutan denda administratif kepada satu atau lebih entitas di UPR Lintas Sektor",
  "Proper Biru",
  "Tidak tercapai antara 5% s.d 20%"
 ),
 createData(
  3,
  "Tinggi",
  "> 10 permil",
  <>
   Pemberitaan negatif di media <em>mainstream</em> (<em>daring</em> dan
   <em>luring</em>) yang masuk kategori viral
  </>,
  "PTUN dan perdata. ",
  "Proper Merah ",
  "Tidak tercapai di atas 20%"
 ),
];

export default function TableDampak({}) {
 return (
  <Box>
   <Typography fontWeight={600} mb={1}>
    b. Kriteria Dampak
   </Typography>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell colSpan={2} rowSpan={2}>
        Level Kemungkinan
       </TableCell>
       <TableCell colSpan={5} align="center">
        Area Dampak Risiko
       </TableCell>
      </TableRow>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell>Beban Keuangan Negara/Daerah</TableCell>
       <TableCell>Penurunan Reputasi</TableCell>
       <TableCell>
        Tuntutan Hukum (Sanksi Pidana, Perdata, dan/atau administratif)
       </TableCell>
       <TableCell>Lingkungan</TableCell>
       <TableCell>Capaian Kinerja</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell component="th" scope="row">
         {row.id}
        </TableCell>
        <TableCell>{row.level}</TableCell>
        <TableCell>{row.beban}</TableCell>
        <TableCell>{row.penurunan}</TableCell>
        <TableCell>{row.tuntutan}</TableCell>
        <TableCell>{row.lingkungan}</TableCell>
        <TableCell>{row.capaian}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Box>
 );
}
