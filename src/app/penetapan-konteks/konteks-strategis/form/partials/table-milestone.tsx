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
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function TableMilestone({ mode }: { mode?: string }) {
 function createData(
  id: number,
  program: string,
  penaggungjawab: string,
  sumber_anggaran: string,
  mulai: string,
  penyelesaian: string
 ) {
  return {
   id,
   program,
   penaggungjawab,
   sumber_anggaran,
   mulai,
   penyelesaian,
  };
 }

 const rows = [
  createData(
   1,
   "Infrastruktur KI",
   "Perusahaan Patungan",
   "PMN kepada PT KIW",
   "2022-12-31",
   "2022-12-31"
  ),
  createData(
   2,
   "Suplesi air baku dan drainase utama kawasan klaster 1 fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31",
   "2022-12-31"
  ),
  createData(
   3,
   "Sistem penyediaan air minum, pengelolaan limbah terintegrasi dan pengelolaan persampahan klaster 1 fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31",
   "2022-12-31"
  ),
  createData(
   4,
   "Rumah susun dan fasilitasnya di Klaster 1 Fase 1",
   "Kementerian PUPR",
   "APBN",
   "2022-12-31",
   "2022-12-31"
  ),
 ];

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Milestone/Critical Path</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="contained"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1 }}
     >
      Tambah Milestone
     </Button>
    ) : null}
   </Stack>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Program/ Kegiatan</TableCell>
       <TableCell>Penanggung Jawab</TableCell>
       <TableCell>Sumber Anggaran</TableCell>
       <TableCell width="150px">Waktu Mulai Pekerjaan</TableCell>
       <TableCell width="150px">Waktu Penyelesaian Pekerjaan</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableCell colSpan={6}>
        <EmptyState
         icon={<IconEmptyData />}
         title="Data Kosong"
         description="Silahkan isi konten tabel ini"
        />
       </TableCell>
      ) : (
       <>
        {rows.map((row) => (
         <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
          <TableCell sx={{ textAlign: "center" }}>
           <Tooltip title="Delete" placement="top">
            <IconButton
             aria-label="delete"
             color="error"
             disabled={mode === "view"}
            >
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
          <TableCell>{row.program}</TableCell>
          <TableCell>{row.penaggungjawab}</TableCell>
          <TableCell>{row.sumber_anggaran}</TableCell>
          <TableCell>{row.mulai}</TableCell>
          <TableCell>{row.penyelesaian}</TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
