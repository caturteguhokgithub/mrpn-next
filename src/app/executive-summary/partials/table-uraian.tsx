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

export default function TableUraian() {
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
   "Risiko Lingkungan",
   "Risiko yang meliputi bahaya terhadap kesehatan manusia, tumbuhan, dan hewan serta kemungkinan berkurangnya sumber daya alam."
  ),
  createData(
   2,
   "Risiko Sosial",
   "Risiko yang dapat mengancam kesehatan manusia dan kehidupan sosial masyarakat."
  ),
  createData(
   3,
   "Risiko Geopolitik",
   "Risiko yang berfokus pada peluang dan ketidakstabilan yang muncul dari hubungan antar negara."
  ),
  createData(
   4,
   "Risiko Ekonomi",
   "Risiko yang mencakup berbagai isu dalam sistem keuangan dan moneter yang berpotensi mempengaruhi perdagangan, manufaktur dan rantai pasok."
  ),
  createData(
   5,
   "Risiko Teknologi",
   "Risiko yang mempertimbangkan konsekuensi terhadap pemerintah dan organisasi yang mungkin timbul akibat rumitnya penerapan sistem baru, kegagalan teknis, data yang disusupi, kesalahan pengelolaan sumber daya, dan serangan siber."
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 200 }}>Jenis Risiko</TableCell>
      <TableCell>Uraian</TableCell>
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
