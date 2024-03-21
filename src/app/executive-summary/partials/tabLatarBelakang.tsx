import React from "react";
import {
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogTitle,
 Stack,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableTagging from "./table-tagging";
import AddButton from "@/app/components/buttonAdd";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import FormTagging from "./form-tagging";

export default function TabLatarBelakang({}) {
 const [modalOpenFact, setModalOpenFact] = React.useState(false);
 const [modalOpenGoal, setModalOpenGoal] = React.useState(false);
 const [modalOpenSegment, setModalOpenSegment] = React.useState(false);
 const [modalOpenTag, setModalOpenTag] = React.useState(false);
 const [value, setValue] = React.useState("");

 const handleModalOpenFact = () => {
  setModalOpenFact(true);
 };
 const handleModalOpenGoal = () => {
  setModalOpenGoal(true);
 };
 const handleModalOpenSegment = () => {
  setModalOpenSegment(true);
 };
 const handleModalOpenTag = () => {
  setModalOpenTag(true);
 };

 const handleModalClose = () => {
  setModalOpenFact(false);
  setModalOpenGoal(false);
  setModalOpenSegment(false);
  setModalOpenTag(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 return (
  <Stack gap={1}>
   <CardItem
    title="Fakta & Data (Struktur Masalah yang Dihadapi)"
    setting
    settingEditOnclick={handleModalOpenFact}
   >
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
    <DialogComponent
     dialogOpen={modalOpenFact}
     dialogClose={handleModalClose}
     title="Fakta & Data (Struktur Masalah yang Dihadapi)"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Tujuan Utama/Goals Proyek"
    setting
    settingEditOnclick={handleModalOpenGoal}
   >
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
    <DialogComponent
     dialogOpen={modalOpenGoal}
     dialogClose={handleModalClose}
     title="Tujuan Utama/Goals Proyek"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Tagging Atas Kebijakan Lain"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Tagging"
      onclick={handleModalOpenTag}
     />
    }
   >
    {/* <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    {/* <Stack gap={1}>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>SDGs</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>Janpres</Typography>
     </Paper>
     <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={500}>DAK</Typography>
     </Paper>
    </Stack> */}
    <TableTagging />
    <DialogComponent
     dialogOpen={modalOpenTag}
     dialogClose={handleModalClose}
     title="Tambah Tagging"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <FormTagging mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Segment Penerima Manfaat"
    setting
    settingEditOnclick={handleModalOpenSegment}
   >
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
    <DialogComponent
     dialogOpen={modalOpenSegment}
     dialogClose={handleModalClose}
     title="Segment Penerima Manfaat"
     dialogFooter={
      <DialogActions sx={{ p: 2, px: 3 }}>
       <Button variant="outlined" onClick={handleModalClose}>
        Batal
       </Button>
       <Button variant="contained" type="submit">
        Simpan
       </Button>
      </DialogActions>
     }
    >
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
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
