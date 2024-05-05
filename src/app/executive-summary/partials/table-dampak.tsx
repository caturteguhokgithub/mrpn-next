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
import { IconFA } from "@/app/components/icons/icon-fa";
import { green, red } from "@mui/material/colors";

export default function TableDampak() {
 function createData(
  id: number,
  outcome: string,
  kode: string,
  sasaran: string
  //   highlight: boolean
 ) {
  return {
   id,
   outcome,
   kode,
   sasaran,
   //    highlight,
  };
 }

 const rows = [
  createData(
   1,
   "Menurunnya prevalensi stunting pada balita",
   "-",
   "Kesehatan untuk Semua"
   //    true
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Outcome/Dampak</TableCell>
      <TableCell>Kode Sasaran AP</TableCell>
      <TableCell>Sasaran AP</TableCell>
      {/* <TableCell width="150px">Highlight</TableCell> */}
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.outcome}</TableCell>
       <TableCell>{row.kode}</TableCell>
       <TableCell>{row.sasaran}</TableCell>
       {/* <TableCell align="center">
        {row.highlight ? (
         <IconFA color={green[500]} name="check" size={16} />
        ) : (
         <IconFA color={red[500]} name="xmark" size={16} />
        )}
       </TableCell> */}
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
