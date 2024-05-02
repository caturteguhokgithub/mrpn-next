import React from "react";
import {
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { dataTema } from "../dataTema";

export default function TableUraian({ project }: { project: string }) {
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
     {dataTema.map((itemRow) => (
      <>
       {project === itemRow.temaId && (
        <>
         {itemRow.typeOfRisk.map((detailRisk, index) => (
          <TableRow
           key={index}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
           <TableCell>
            <Typography variant="body1">{detailRisk.type}</Typography>
           </TableCell>
           <TableCell>
            {detailRisk.description.length > 1 ? (
             <ul>
              {detailRisk.description.map((itemDesc, index) => (
               <li key={index}>
                <Typography variant="body1">{itemDesc}</Typography>
               </li>
              ))}
             </ul>
            ) : (
             <Typography variant="body1">{detailRisk.description}</Typography>
            )}
           </TableCell>
          </TableRow>
         ))}
        </>
       )}
      </>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
