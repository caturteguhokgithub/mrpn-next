import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";

export default function TabLatarBelakang({}) {
 return (
  <Stack gap={1}>
   <CardItem title="Fakta & Data (Struktur Masalah yang Dihadapi)" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
    {/* <Typography variant="body2" component="div" color="text.secondary">
     <ul style={{ paddingLeft: 20 }}>
      <li>
       Nilai kontribusi PDB industri menurun menjadi di bawah 20 persen, dengan
       rata-rata pertumbuhan PDB yang lebih rendah dari pertumbuhan nasional.
      </li>
      <li>
       Produktivitas tenaga kerja industri meningkat namun dalam laju yang lebih
       lambat dibandingkan peningkatan produktivitas tenaga kerja di negara lain
      </li>
      <li>
       Kontribusi ekspor industri Indonesia lebih rendah dibandingkan dengan
       negara China, Filipina, Thailand, Vietnam dan Malaysia, dan sebagian
       besar ekspor industri dari Indonesia memiliki kandungan teknologi yang
       lebih rendah.
      </li>
      <li>
       Potensi pemanfaatan teknologi digital sangat besar dengan percepatan
       aplikasi teknologi digital di berbagai macam aspek kehidupan, termasuk
       pada sektor industri nasional
      </li>
     </ul>
    </Typography> */}
   </CardItem>
   <CardItem title="Tujuan Utama/Goals Proyek" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Tagging Atas Kebijakan Lain" setting>
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}

    <Stack gap={1}>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>SDGs</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Janpres</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>DAK</Typography>
     </Paper>
    </Stack>
   </CardItem>
   <CardItem title="Segment Penerima Manfaat" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
    {/* <Typography variant="body2" color="text.secondary">
     Fokus pada industri 6 subsektor prioritas, yaitu industri makanan dan
     minuman, tekstil, otomotif, elektronik, kimia dan farmasi, serta alat
     kesehatan
    </Typography> */}
   </CardItem>
   {/* <CardItem title="Intisari" setting>
    <Typography variant="body2" color="text.secondary">
     Implementasi Industri 4.0 pada 6 subsektor prioritas tersebut dapat
     meningkatkan pertumbuhan PDB manufaktue dan kontribusi manufaktur terhadap
     PDB, serta menciptakan lapangan kerja dengan didukung oleh peran
     masing-masing dari Kementerian/Lembaga
    </Typography>
   </CardItem>
   <CardItem title="Keterkaitan dengan Arahan Presiden" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem>
   <CardItem title="Keterkaitan dengan SDG's" setting>
    <Typography variant="body2" color="text.secondary">
     This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the mussels,
     if you like.
    </Typography>
   </CardItem>
   <CardItem title="Catatan PJ KP" setting>
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </CardItem> */}
  </Stack>
 );
}
