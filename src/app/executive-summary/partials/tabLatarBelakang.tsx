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
      </Stack>
     </>
    )}
    <DialogComponent
     dialogOpen={modalOpenFact}
     dialogClose={handleModalClose}
     title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
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
