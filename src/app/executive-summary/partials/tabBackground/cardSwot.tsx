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
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";
import FormSwot from "./form-swot";

export default function CardSwot({ project }: { project: string }) {
 const [modalOpenFact, setModalOpenFact] = React.useState(false);
 const [modalOpenGoal, setModalOpenGoal] = React.useState(false);
 const [modalOpenSegment, setModalOpenSegment] = React.useState(false);
 const [modalOpenTag, setModalOpenTag] = React.useState(false);
 const [modalOpenUraian, setModalOpenUraian] = React.useState(false);

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
 const handleModalOpenUraian = () => {
  setModalOpenUraian(true);
 };

 const handleModalClose = () => {
  setModalOpenFact(false);
  setModalOpenGoal(false);
  setModalOpenSegment(false);
  setModalOpenTag(false);
  setModalOpenUraian(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
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
    <FormSwot mode="add" project={project} />
   </DialogComponent>
  </CardItem>
 );
}
