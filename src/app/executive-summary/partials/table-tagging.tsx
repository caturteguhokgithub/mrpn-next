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
 function createData(id: number, kebijakan: string, note: string) {
  return {
   id,
   kebijakan,
   note,
  };
 }

 const rows = [
  createData(1, "SDGs", "-"),
  createData(2, "Janpres", "-"),
  createData(3, "DAK", "-"),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 250 }}>Kebijakan</TableCell>
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
