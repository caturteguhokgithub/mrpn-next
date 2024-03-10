import React from "react";
import {
 Box,
 Chip,
 Dialog,
 DialogContent,
 DialogTitle,
 Divider,
 FormControl,
 Grid,
 IconButton,
 LinearProgress,
 LinearProgressProps,
 Paper,
 Stack,
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
import TableIKU from "./table-iku";

export default function TableOverall() {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };
 const handleModalClose = () => {
  setModalOpen(false);
 };

 const options = {
  view: (
   <IconFA
    size={14}
    name="eye"
    color={theme.palette.primary.main}
    sx={{ width: "auto" }}
   />
  ),
  delete: "delete",
  edit: "edit",
 };

 const rows = [
  {
   name: "K/L-1",
   detail: [
    {
     RO: "RO-1.1",
     alokasi: "a1",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
    {
     RO: "RO-1.2",
     alokasi: "a1",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
    {
     RO: "RO-1.3",
     alokasi: "a1",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
    {
     RO: "RO-1.4",
     alokasi: "a1",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
   ],
   options,
  },
  {
   name: "K/L-2",
   detail: [
    {
     RO: "RO-2.1",
     alokasi: "a2",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
    {
     RO: "RO-2.2",
     alokasi: "a2",
     realisasi: "r1",
     progress: "p1",
     nilaiRisiko: "nr-1",
     evaluasiRisiko: "er-1",
    },
   ],
   options,
  },
 ];

 function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
 ) {
  return (
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ width: "60%", mr: 1 }}>
     <LinearProgress variant="determinate" {...props} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
     <Typography variant="body2" fontWeight={600}>{`${Math.round(
      props.value
     )}%`}</Typography>
    </Box>
   </Box>
  );
 }

 return (
  <>
   <TableContainer component={Paper} elevation={0}>
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell>K/L</TableCell>
       <TableCell>Rincian Output (RO)</TableCell>
       <TableCell>Alokasi</TableCell>
       <TableCell>Realisasi</TableCell>
       <TableCell>Progress</TableCell>
       <TableCell>Nilai Risiko</TableCell>
       <TableCell>Evaluasi Risiko</TableCell>
       <TableCell width="100px"></TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((item) => (
       <>
        {item.detail.map((detailItem, index) => (
         <TableRow key={index}>
          {index === 0 ? (
           <TableCell rowSpan={item.detail.length}>
            <Typography
             fontWeight={600}
             color={theme.palette.primary.main}
             component="a"
             onClick={handleModalOpen}
             sx={{
              cursor: "pointer",
              "&:hover": {
               color: blue[800],
              },
             }}
            >
             {item.name}
            </Typography>
           </TableCell>
          ) : null}
          <TableCell>{detailItem.RO}</TableCell>
          <TableCell>{detailItem.alokasi}</TableCell>
          <TableCell>{detailItem.realisasi}</TableCell>
          <TableCell>{detailItem.progress}</TableCell>
          <TableCell>{detailItem.nilaiRisiko}</TableCell>
          <TableCell>{detailItem.evaluasiRisiko}</TableCell>
          {index === 0 ? (
           <TableCell rowSpan={item.detail.length} sx={{ textAlign: "center" }}>
            <>
             <IconButton>{item.options.view}</IconButton>
             {/* <button role="link">{item.options.delete}</button>
            <button role="link">{item.options.edit}</button> */}
            </>
           </TableCell>
          ) : null}
         </TableRow>
        ))}
       </>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
   <Dialog
    open={modalOpen}
    keepMounted
    onClose={handleModalClose}
    sx={{
     ".MuiPaper-root": {
      minWidth: 800,
      ".quill": {
       height: "calc(100vh - 400px)",
       ".ql-container": {
        height: "calc(100% - 44px)",
       },
      },
     },
    }}
   >
    <DialogTitle
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
     }}
    >
     <Typography component="h3" fontWeight={600} fontSize={16}>
      Detail K/L-1
     </Typography>
     <IconButton onClick={handleModalClose}>
      <IconFA size={16} name="close" />
     </IconButton>
    </DialogTitle>
    <DialogContent dividers sx={{ pb: 0 }}>
     <Grid container spacing={2}>
      <Grid item md={6}>
       <FormControl fullWidth>
        <Typography>Budget</Typography>
        <Typography fontWeight={600} fontSize={16}>
         Rp. 2.365.120.000.000
        </Typography>
       </FormControl>
      </Grid>
      <Grid item md={6}>
       <FormControl fullWidth>
        <Typography>Realisasi</Typography>
        <Typography fontWeight={600} fontSize={16}>
         Rp. 2.365.120.000.000
        </Typography>
       </FormControl>
      </Grid>
      <Grid item md={6}>
       <FormControl fullWidth>
        <Typography mb={1}>Progress</Typography>
        <Typography fontWeight={600} fontSize={16}>
         <LinearProgressWithLabel value={30} />
        </Typography>
       </FormControl>
      </Grid>
      <Grid item md={6}>
       <FormControl fullWidth>
        <Typography mb={1}>Nilai Kinerja</Typography>
        <Stack direction="row" gap={2}>
         <Chip label="A" size="small" color="primary" />
         <Chip label="B" size="small" />
         <Chip label="C" size="small" />
         <Chip label="D" size="small" />
         <Chip label="E" size="small" />
        </Stack>
       </FormControl>
      </Grid>
     </Grid>
     <Box mx={-3}>
      <Divider sx={{ my: 3 }}>
       <Chip label="Indikator Kinerja Utama" size="small" />
      </Divider>
      <TableIKU />
     </Box>
    </DialogContent>
   </Dialog>
  </>
 );
}
