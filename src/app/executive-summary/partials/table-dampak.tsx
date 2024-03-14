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
  sasaran: string,
  highlight: boolean
 ) {
  return {
   id,
   outcome,
   sasaran,
   highlight,
  };
 }

 const rows = [
  createData(
   1,
   //    "Meningkatkan pertumbuhan PDB industri pengolahan menjadi 5,3%-5,7% dan kontribusi industri pengolahan terhadap PDB menjadii 19,9%-20,0% (2022)",
   //    "02 - Meningkatnya nilai tambah, lapangan kerja, investasi, ekspor, dan daya saing perekonomian",
   "-",
   "-",
   true
  ),
  createData(
   2,
   //    "Meningkatnya nilai ekspor produk industri pengolahan menjadi USD 153,7 miliar (2022)",
   //    "02 - Meningkatnya nilai tambah, lapangan kerja, investasi, ekspor, dan daya saing perekonomian",
   "-",
   "-",
   false
  ),
  createData(
   3,
   //    "Pertumbuhan ekspor produk industri berteknologi tinggi menjadi 8,2-10,1% (2022)",
   //    "02 - Meningkatnya nilai tambah, lapangan kerja, investasi, ekspor, dan daya saing perekonomian",
   "-",
   "-",
   true
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Outcome/Dampak</TableCell>
      <TableCell>Sasaran PN</TableCell>
      <TableCell width="150px">Highlight</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.outcome}</TableCell>
       <TableCell>{row.sasaran}</TableCell>
       <TableCell align="center">
        {row.highlight ? (
         <IconFA color={green[500]} name="check" size={16} />
        ) : (
         <IconFA color={red[500]} name="xmark" size={16} />
        )}
       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
