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

export default function TableTagging() {
 function createData(id: number, kebijakan: string, note: React.ReactNode) {
  return {
   id,
   kebijakan,
   note,
  };
 }

 const rows = [
  createData(
   1,
   "Janpres",
   "Memberi makan siang dan susu gratis di sekolah dan pesantren, serta bantuan gizi untuk anak balita dan ibu hamil"
  ),
  createData(
   2,
   "RPJPN",
   <ul>
    <li>
     Investasi pelayanan Kesehatan primer, penuntasan stunting, serta eliminasi
     penyakit menular dan penyakit tropis terabaikan (terutama: tuberculosis dan
     kusta)
    </li>
    <li>Prevalensi stunting (pendek dan sangat pendek) pada balita (%)</li>
   </ul>
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 200 }}>Kebijakan</TableCell>
      <TableCell>Keterangan</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.kebijakan}</TableCell>
       <TableCell>{row.note}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
