import React from "react";
import { Box, Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { green, red } from "@mui/material/colors";

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
  <Stack direction="row" alignItems="center" boxSizing="border-box">
   <Box
    color="white"
    bgcolor={color}
    border={`2px solid ${color}`}
    p="8px 16px"
    borderRadius="8px 0 0 8px"
    fontWeight={700}
    letterSpacing={0.2}
   >
    {label}
   </Box>
   <Box
    border={`2px solid ${color}`}
    p="8px 16px"
    borderRadius="0 8px 8px 0"
    fontWeight={600}
   >
    {value}
   </Box>
  </Stack>
 );
};

export default function TabPendanaan({}) {
 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem title="Profil Pendanaan">
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Sumber Pendanaan 2023">
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Stack direction="row" gap={2}>
      <FundSource
       color={green[500]}
       label="APBN"
       value="Rp. 27.958.490.415.805"
      />
      <FundSource
       color={red[500]}
       label="Non-APBN"
       value="Rp. 27.958.490.415.805"
      />
     </Stack>
    )}
   </CardItem>
   <CardItem title="Kesiapan Pendanaan" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Catatan PJ KP" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
  </Stack>
 );
}
