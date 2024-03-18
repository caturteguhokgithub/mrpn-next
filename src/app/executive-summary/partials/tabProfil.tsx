import React from "react";
import { Typography, Stack, Paper, Grid, Box } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { green, grey, red } from "@mui/material/colors";
import TableDampak from "./table-dampak";
import AddButton from "@/app/components/buttonAdd";
import TableProfilOutput from "./table-profil-output";

const FundSource = ({
 label,
 value,
 color,
}: {
 label: string;
 value: string;
 color: string;
}) => {
 return (
  <Stack
   direction="row"
   alignItems="center"
   boxSizing="border-box"
   width="100%"
   border={`2px solid ${color}`}
   borderRadius="8px"
  >
   <Box
    color="white"
    bgcolor={color}
    border={`2px solid ${color}`}
    p="8px 16px"
    // borderRadius="8px 0 0 8px"
    fontWeight={700}
    letterSpacing={0.2}
    fontSize={14}
   >
    {label}
   </Box>
   <Box
    p="8px 16px"
    fontWeight={600}
    fontSize={14}
    flexGrow={1}
    textAlign="right"
   >
    {value}
   </Box>
  </Stack>
 );
};

export default function TabProfil({}) {
 return (
  <Stack gap={1}>
   <CardItem
    title={
     <>
      <em>Cascading</em> Sasaran, Indikator, Target RO
     </>
    }
    addButton={<AddButton filled small title="Tambah Sasaran" />}
   >
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <TableDampak />
   </CardItem>
   <CardItem title="Profil Rincian Output" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <TableProfilOutput />
   </CardItem>
   <CardItem title={<em>Stakeholder Mapping</em>} setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Pendanaan & Investasi Proyek" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Grid container spacing={2}>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Jumlah Per Tahun</Typography>
       <Stack gap={1} mt={1}>
        <FundSource color={grey[600]} label="2023" value="Rp. -" />
        <FundSource color={grey[600]} label="2024" value="Rp. -" />
       </Stack>
      </Paper>
     </Grid>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Sumber Pendanaan</Typography>
       <Stack gap={1} mt={1}>
        <FundSource color={green[400]} label="APBN" value="Rp. -" />
        <FundSource color={red[400]} label="Non-APBN" value="Rp. -" />
       </Stack>
      </Paper>
     </Grid>
     <Grid item lg={4}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
       <Typography fontWeight={500}>Kesiapan Pendanaan</Typography>
       <Typography>-</Typography>
      </Paper>
     </Grid>
    </Grid>
   </CardItem>
  </Stack>
 );
}
