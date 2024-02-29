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
import { green, grey, red, yellow } from "@mui/material/colors";

function createData(
 id: number,
 level: string,
 percentage: string,
 frequency: string
) {
 return { id, level, percentage, frequency };
}

const rows = [
 createData(
  1,
  "Hampir Tidak Terjadi",
  "X ≤ 10 %",
  "Jarang : < 2 kali dalam 1 Tahun"
 ),
 createData(
  2,
  "Hampir Tidak Terjadi",
  "10 < X < 30 % C",
  "Cukup Sering : 2 kali s.d 5 kali dalam 1 Tahun"
 ),
 createData(
  3,
  "Hampir Tidak Terjadi",
  "X ≥ 30 %",
  "Sering : > 5 kali dalam 1 Tahun"
 ),
];

export default function TableLevel({}) {
 return (
  <Box>
   <Typography fontWeight={600} mb={1}>
    b. Level Risiko
   </Typography>
   <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
    <Table>
     <TableHead>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell>Level Risiko</TableCell>
       <TableCell align="center">Besaran Risiko </TableCell>
       <TableCell align="center">Warna</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell>Tinggi (3)</TableCell>
       <TableCell align="center">7-9</TableCell>
       <TableCell align="center" sx={{ bgcolor: red[500] }}>
        Merah
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell>Sedang (2)</TableCell>
       <TableCell align="center">3-6</TableCell>
       <TableCell align="center" sx={{ bgcolor: yellow[500] }}>
        Kuning
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell>Rendah (1)</TableCell>
       <TableCell align="center">1-2</TableCell>
       <TableCell align="center" sx={{ bgcolor: green[500] }}>
        Hijau
       </TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
  </Box>
 );
}
