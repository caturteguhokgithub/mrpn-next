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

 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title="Fakta & Data (Struktur Masalah yang Dihadapi)"
    setting
    settingEditOnclick={handleModalOpenFact}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <strong>Strength</strong>
      <ul>
       <li>
        Sumber daya manusia yang terlatih dalam bidang kesehatan dan gizi.
       </li>
       <li>
        Program-program pemerintah yang telah ada untuk mempromosikan gizi
        seimbang.
       </li>
       <li>Kolaborasi lintas sektor (Kesehatan, Pendidikan, dan social)</li>
       <li>
        Ketersediaan teknologi dan inovasi dalam pemantauan dan evaluasi status
        gizi anak
       </li>
      </ul>
      <strong>Weakness</strong>
      <ul>
       <li>
        Akses terbatas ke layanan kesehatan dan gizi, terutama di daerah
        pedesaan.
       </li>
       <li>Kurangnya kesadaran masyarakat tentang pentingnya gizi seimbang.</li>
       <li>
        Keterbatasan anggaran untuk program-program penanggulangan stunting.
       </li>
       <li>
        Kurangnya infrastruktur yang memadai untuk mendukung distribusi makanan
        bergizi ke daerah-daerah yang terpencil.
       </li>
      </ul>
      <strong>Opportunity</strong>
      <ol type="1">
       <li>
        Peningkatan pendapatan per kapita dapat memungkinkan akses yang lebih
        baik ke makanan bergizi.
       </li>
       <li>
        Kerjasama antara pemerintah, lembaga swadaya masyarakat, dan sektor
        swasta untuk meningkatkan akses terhadap layanan kesehatan dan gizi
       </li>
       <li>
        Dukungan dari organisasi internasional dan Lembaga nirlaba yang
        berpengalaman dalam masalah gizi dan Kesehatan anak
       </li>
      </ol>
      <strong>Threat</strong>
      <ul>
       <li>
        Perubahan iklim dan bencana alam dapat mempengaruhi ketersediaan dan
        akses terhadap makanan bergizi.
       </li>
       <li>
        Konflik dan ketidakstabilan politik dapat mengganggu implementasi
        program-program penanggulangan stunting.
       </li>
       <li>
        Peningkatan harga makanan dan inflasi dapat membuat makanan bergizi
        menjadi tidak terjangkau bagi masyarakat berpenghasilan rendah.
       </li>
      </ul>
     </>
    )}
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
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <ol type="1">
      <li>
       Menurunkan Prevalensi wasting (kurus dan sangat kurus) pada balita hingga
       3% pada tahun 2029
      </li>
      <li>
       Menurunkan Persentase bayi dengan berat badan lahir rendah hingga 3,8%
       pada tahun 2029
      </li>
     </ol>
    )}
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
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableTagging />
    )}
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
    title="Segmen Penerima Manfaat"
    setting
    settingEditOnclick={handleModalOpenSegment}
   >
    {isEmpty ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <ul>
      <li>Fasilitas kesehatan pemerintah dan swasta</li>
      <li>
       Remaja putri, calon pengantin, ibu hamil, ibu nifas, ibu menyusui; anak
       berusia 0 (nol) - 59 (lima puluh sembilan) bulan
      </li>
     </ul>
    )}
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
