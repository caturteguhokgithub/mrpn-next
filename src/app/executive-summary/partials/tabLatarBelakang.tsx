import React from "react";
import {
 Button,
 Card,
 CardContent,
 Dialog,
 DialogActions,
 DialogContent,
 DialogTitle,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableTagging from "./table-tagging";
import AddButton from "@/app/components/buttonAdd";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import FormTagging from "./form-tagging";
import CardStakeholder from "@/app/components/cardStakeholder";
import TableUraian from "./table-uraian";
import { dataTema } from "../dataTema";
import { title } from "process";

export default function TabLatarBelakang({ project }: { project: string }) {
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
    // title="Fakta & Data (Struktur Masalah yang Dihadapi)"
    title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
    setting
    settingEditOnclick={handleModalOpenFact}
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <Stack direction="row" flexWrap="wrap" gap={2}>
       {dataTema.map((itemSwot) => (
        <>
         {project === itemSwot.temaId && (
          <>
           {itemSwot.swot.map((detailSwot, index) => (
            <Card sx={{ maxWidth: 345 }} variant="outlined" key={index}>
             {itemSwot.temaId ? (
              <CardContent>
               <Typography
                gutterBottom
                variant="h6"
                component="div"
                lineHeight={1.3}
                textTransform="capitalize"
               >
                {detailSwot.label}
               </Typography>
              </CardContent>
             ) : null}
             <CardContent sx={{ pt: 0 }}>
              {detailSwot.item.length > 1 ? (
               <ul>
                {detailSwot.item.map((itemSwot, index) => (
                 <li key={index}>
                  <Typography variant="body1">{itemSwot}</Typography>
                 </li>
                ))}
               </ul>
              ) : (
               <>
                {detailSwot.item.map((itemSwot, index) => (
                 <Typography variant="body1" key={index}>
                  {itemSwot}
                 </Typography>
                ))}
               </>
              )}
             </CardContent>
            </Card>
           ))}
          </>
         )}
        </>
       ))}
       {/* <CardStakeholder
        title="Strength"
        img=""
        description={
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
           Ketersediaan teknologi dan inovasi dalam pemantauan dan evaluasi
           status gizi anak
          </li>
         </ul>
        }
       />
       <CardStakeholder
        title="Weakness"
        img=""
        description={
         <ul>
          <li>
           Akses terbatas ke layanan kesehatan dan gizi, terutama di daerah
           pedesaan.
          </li>
          <li>
           Kurangnya kesadaran masyarakat tentang pentingnya gizi seimbang.
          </li>
          <li>
           Keterbatasan anggaran untuk program-program penanggulangan stunting.
          </li>
          <li>
           Kurangnya infrastruktur yang memadai untuk mendukung distribusi
           makanan bergizi ke daerah-daerah yang terpencil.
          </li>
         </ul>
        }
       />
       <CardStakeholder
        title="Opportunity"
        img=""
        description={
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
        }
       />
       <CardStakeholder
        title="Threat"
        img=""
        description={
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
        }
       /> */}
      </Stack>
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
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      {dataTema.map((itemGoals) => (
       <>
        {project === itemGoals.temaId && (
         <>
          {itemGoals.goals.length > 1 ? (
           <ol type="1">
            {itemGoals.goals.map((detailGoals, index) => (
             <li key={index}>
              <Typography variant="body1">{detailGoals}</Typography>
             </li>
            ))}
           </ol>
          ) : (
           <Typography variant="body1">{itemGoals.goals}</Typography>
          )}
         </>
        )}
       </>
      ))}
      {/* <ol type="1">
       <li>
        Menurunkan Prevalensi wasting (kurus dan sangat kurus) pada balita
        hingga 3% pada tahun 2029
       </li>
       <li>
        Menurunkan Persentase bayi dengan berat badan lahir rendah hingga 3,8%
        pada tahun 2029
       </li>
      </ol> */}
     </>
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
    title="Uraian Risiko Strategis"
    // addButton={
    //  <AddButton
    //   filled
    //   small
    //   title="Tambah Tagging"
    //   onclick={handleModalOpenTag}
    //  />
    // }
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableUraian project={project} />
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
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <TableTagging project={project} />
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
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      {dataTema.map((itemSegment) => (
       <>
        {project === itemSegment.temaId && (
         <>
          {itemSegment.segment.length > 1 ? (
           <ul>
            {itemSegment.segment.map((detailSegment, index) => (
             <li key={index}>
              <Typography variant="body1">{detailSegment}</Typography>
             </li>
            ))}
           </ul>
          ) : (
           <Typography variant="body1">{itemSegment.segment}</Typography>
          )}
         </>
        )}
       </>
      ))}

      {/* <ul>
       <li>Fasilitas kesehatan pemerintah dan swasta</li>
       <li>
        Remaja putri, calon pengantin, ibu hamil, ibu nifas, ibu menyusui; anak
        berusia 0 (nol) - 59 (lima puluh sembilan) bulan
       </li>
      </ul> */}
     </>
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
  </Stack>
 );
}
