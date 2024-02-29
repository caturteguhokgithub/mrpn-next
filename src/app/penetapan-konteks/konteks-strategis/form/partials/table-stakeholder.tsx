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

export default function TableStakeholder({ mode }: { mode?: string }) {
 function createData(id: number, stakeholders: string, hubungan: string) {
  return { id, stakeholders, hubungan };
 }

 const rows = [
  createData(1, "-", "-"),
  createData(2, "-", "-"),
  createData(3, "-", "-"),
 ];

 const isEmpty = false;

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <Typography>Daftar Pemangku Kepentingan (Entitas)</Typography>
    {mode === "add" || mode === "edit" ? (
     <Button
      variant="contained"
      size="small"
      startIcon={<AddCircle />}
      sx={{ lineHeight: 1, py: 1 }}
     >
      Tambah/Edit
     </Button>
    ) : null}
   </Stack>
   {isEmpty ? (
    <EmptyState
     icon={<IconEmptyData />}
     title="Data tidak tersedia"
     description="Silahkan isi konten seksi ini"
    />
   ) : (
    <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} size="small">
      <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
       <TableRow>
        <TableCell width="70px"></TableCell>
        <TableCell>Stakeholders</TableCell>
        <TableCell>Hubungan</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
       {mode === "add" ? (
        <TableCell colSpan={3}>
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
           <TableCell>{row.stakeholders}</TableCell>
           <TableCell>{row.hubungan}</TableCell>
          </TableRow>
         ))}
        </>
       )}
      </TableBody>
     </Table>
    </TableContainer>
   )}
  </>
 );
}
