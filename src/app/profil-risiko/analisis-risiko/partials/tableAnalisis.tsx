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
import theme from "@/theme";
import { green, grey, red, yellow } from "@mui/material/colors";

function createData(
 id: number,
 levelText: string,
 level: number,
 levelLabel: string,
 rendah: number,
 sedang: number,
 tinggi: number
) {
 return { id, levelText, level, levelLabel, rendah, sedang, tinggi };
}

const rows = [
 createData(1, "Kemungkinan Terjadinya Risiko", 3, "Sering Terjadi", 3, 6, 9),
 createData(2, "Kemungkinan Terjadinya Risiko", 3, "Sering Terjadi", 3, 6, 9),
 createData(3, "Kemungkinan Terjadinya Risiko", 3, "Sering Terjadi", 3, 6, 9),
];

export default function TableAnalisis({}) {
 return (
  <Box>
   <Typography fontWeight={600} mb={1}>
    a. Matriks Analisis Risiko
   </Typography>
   <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
    <Table>
     <TableHead>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell colSpan={3} rowSpan={3} align="center">
        Matriks Analisis Risiko 3 X 3
       </TableCell>
       <TableCell colSpan={3} align="center">
        Level Dampak
       </TableCell>
      </TableRow>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell align="center">1</TableCell>
       <TableCell align="center">2</TableCell>
       <TableCell align="center">3</TableCell>
      </TableRow>
      <TableRow sx={{ bgcolor: grey[200] }}>
       <TableCell align="center">Rendah</TableCell>
       <TableCell align="center">Sedang</TableCell>
       <TableCell align="center">Tinggi</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell
        width={70}
        rowSpan={3}
        align="center"
        sx={{
         transform: "rotate(270deg)",
        }}
       >
        Kemungkinan Terjadinya Risiko
       </TableCell>
       <TableCell align="center">3</TableCell>
       <TableCell>Sering Terjadi</TableCell>
       <TableCell align="center" sx={{ bgcolor: yellow[500] }}>
        3
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: yellow[500] }}>
        6
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: red[500] }}>
        9
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell align="center">2</TableCell>
       <TableCell>Kadang Terjadi</TableCell>
       <TableCell align="center" sx={{ bgcolor: green[500] }}>
        2
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: yellow[500] }}>
        5
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: red[500] }}>
        8
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell align="center">1</TableCell>
       <TableCell>Hampir Tidak Terjadi</TableCell>
       <TableCell align="center" sx={{ bgcolor: green[500] }}>
        1
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: yellow[500] }}>
        4
       </TableCell>
       <TableCell align="center" sx={{ bgcolor: red[500] }}>
        7
       </TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
  </Box>
 );
}
