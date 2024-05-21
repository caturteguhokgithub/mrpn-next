import React, { Fragment } from "react";
import {
 IconButton,
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
import { IconFA } from "@/app/components/icons/icon-fa";
import { blue } from "@mui/material/colors";
import { dataTema } from "../../dataTema";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function TableIndication({ project }: { project: string }) {
 return (
  <>
   {dataTema.map((itemRow) => (
    <>
     {project === itemRow.temaId && (
      <>
       {itemRow.indication.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <>
         <TableContainer component={Paper} elevation={0}>
          <Table size="small">
           <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
            <TableRow>
             <TableCell>
              <Typography variant="body1" fontWeight={600}>
               Jenis Risiko
              </Typography>
             </TableCell>
             <TableCell>
              <Typography variant="body1" fontWeight={600}>
               Kejadian Risiko
              </Typography>
             </TableCell>
             <TableCell>
              <Typography variant="body1" fontWeight={600}>
               Perlakuan Risiko
              </Typography>
             </TableCell>
             <TableCell>
              <Typography variant="body1" fontWeight={600}>
               Indikasi Entitas Utama & Pendukung
              </Typography>
             </TableCell>
             <TableCell width="100px"></TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            {dataTema.map((itemRow, index) => (
             <Fragment key={index}>
              {project === itemRow.temaId && (
               <>
                {itemRow.indication?.map((itemIndication, index) => (
                 <>
                  {/* {itemOr.item?.map((detailItem, index) => ( */}
                  <TableRow
                   key={index}
                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                   <TableCell>
                    <Typography variant="body1">
                     {itemIndication.jenis === "" ? "-" : itemIndication.jenis}
                    </Typography>
                   </TableCell>
                   <TableCell>
                    <Typography variant="body1">
                     {itemIndication.kejadian === ""
                      ? "-"
                      : itemIndication.kejadian}
                    </Typography>
                   </TableCell>
                   <TableCell>
                    <Typography variant="body1">
                     {itemIndication.perlakuan === ""
                      ? "-"
                      : itemIndication.perlakuan}
                    </Typography>
                   </TableCell>
                   <TableCell>
                    <Typography variant="body1">
                     {itemIndication.entitas === ""
                      ? "-"
                      : itemIndication.entitas}
                    </Typography>
                   </TableCell>
                  </TableRow>
                  {/* ))} */}
                 </>
                ))}
               </>
              )}
             </Fragment>
            ))}
           </TableBody>
          </Table>
         </TableContainer>
        </>
       )}
      </>
     )}
    </>
   ))}
  </>
 );
}
