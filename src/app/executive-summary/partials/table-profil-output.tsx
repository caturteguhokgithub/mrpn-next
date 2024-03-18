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
  alokasiApbn: string,
  target: string,
  pic: string
 ) {
  return {
   id,
   alokasiApbn,
   target,
   pic,
  };
 }

 const rows = [createData(1, "-", "-", "-")];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Alokasi APBN</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>KL Pelaksana/PIC</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.alokasiApbn}</TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.pic}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
