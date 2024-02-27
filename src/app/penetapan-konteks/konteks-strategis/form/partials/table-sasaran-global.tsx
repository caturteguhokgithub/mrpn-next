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

export default function TableSasaran({ variant }: { variant: string }) {
 function createData(id: number, daftarSasaran: string, keterangan: string) {
  return { id, daftarSasaran, keterangan };
 }

 const rows = [
  createData(1, "Pertumbuhan ekspor produk industri berteknologi tinggi", "-"),
  createData(2, "Pertumbuhan ekspor industri pengolahan", "-"),
 ];

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Sasaran {variant}</Typography>
    <Button
     variant="contained"
     size="small"
     startIcon={<AddCircle />}
     sx={{ lineHeight: 1, py: 1 }}
    >
     Tambah Sasaran {variant}
    </Button>
   </Stack>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Daftar Sasaran {variant}</TableCell>
       <TableCell>Keterangan</TableCell>
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
        <TableCell>{row.daftarSasaran}</TableCell>
        <TableCell>{row.keterangan}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
