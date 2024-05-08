import React, { useRef } from "react";
import {
 Typography,
 Stack,
 Paper,
 Grid,
 Box,
 Button,
 DialogActions,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Grow,
 Tooltip,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { green, grey, red } from "@mui/material/colors";
import TableDampak from "./table-dampak";
import AddButton from "@/app/components/buttonAdd";
import TableProfilOutput from "./table-profil-output";
import DialogComponent from "@/app/components/dialog";
import FormSasaran from "./form-sasaran";
import FormProfilRo from "./form-profil-ro";
import dynamic from "next/dynamic";
import FormPendanaan from "./form-pendanaan";
import Image from "next/image";
import FormStakeholder from "./form-stakeholder";
import CardStakeholder from "@/app/components/cardStakeholder";
import { dataTema } from "../dataTema";
import { useDragScroll } from "@/app/utils/useDragScroll";

export default function TabProfil({ project }: { project: string }) {
 const [modalOpenSasaran, setModalOpenSasaran] = React.useState(false);
 const [modalOpenProfilRo, setModalOpenProfilRo] = React.useState(false);
 const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);

 const handleModalOpenSasaran = () => {
  setModalOpenSasaran(true);
 };
 const handleModalOpenProfilRo = () => {
  setModalOpenProfilRo(true);
 };
 const handleModalOpenStakeholder = () => {
  setModalOpenStakeholder(true);
 };

 const handleModalClose = () => {
  setModalOpenSasaran(false);
  setModalOpenProfilRo(false);
  setModalOpenStakeholder(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;
 const refDrag = useRef([]);
 const [ref] = useDragScroll();

 return (
  <Stack gap={1}>
   <CardItem
    title="Cascading Sasaran, Indikator, Target RO"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Sasaran"
      onclick={handleModalOpenSasaran}
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
     <TableDampak project={project} />
    )}
    <DialogComponent
     dialogOpen={modalOpenSasaran}
     dialogClose={handleModalClose}
     title="Tambah Sasaran"
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
     <FormSasaran mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Profil Rincian Output"
    addButton={
     <AddButton
      filled
      small
      title="Tambah Profil RO"
      onclick={handleModalOpenProfilRo}
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
     <>
      <TableProfilOutput />
      <DialogComponent
       dialogOpen={modalOpenProfilRo}
       dialogClose={handleModalClose}
       title="Tambah Profil RO"
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
       <FormProfilRo mode="add" />
      </DialogComponent>
     </>
    )}
   </CardItem>
   <CardItem
    title="Stakeholder Mapping"
    setting
    settingEditOnclick={handleModalOpenStakeholder}
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Stack direction="row" flexWrap="wrap" gap={2}>
      {dataTema.map((itemStakeholder) => (
       <>
        {project === itemStakeholder.temaId && (
         <>
          {itemStakeholder.stakeholder?.map((detailStakeholder, index) => (
           <Card sx={{ maxWidth: 345 }} variant="outlined" key={index}>
            <CardContent sx={{ pb: 1, minHeight: 84 }}>
             <Typography
              gutterBottom
              variant="h6"
              component="div"
              lineHeight={1.3}
             >
              {detailStakeholder.label}
             </Typography>
            </CardContent>
            <CardContent
             ref={ref}
             sx={{
              display: "flex",
              gap: 2,
              maxWidth: "100%",
              overflowX: "auto",
              "&::-webkit-scrollbar": {
               height: "3px",
              },
             }}
            >
             {detailStakeholder.instance.map((itemSh, index) => (
              <>
               <Tooltip
                title={itemSh.name}
                followCursor
                TransitionComponent={Grow}
               >
                <Image
                 key={index}
                 alt={detailStakeholder.label}
                 src={itemSh.logo}
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{
                  width: "auto",
                  height: "60px",
                  userSelect: "none",
                  touchAction: "none",
                 }}
                />
               </Tooltip>
              </>
             ))}
            </CardContent>
            <CardContent>
             <Typography variant="body2">
              <strong>{detailStakeholder.tag}</strong>. {detailStakeholder.desc}
              .
             </Typography>
            </CardContent>
           </Card>
          ))}
         </>
        )}
       </>
      ))}
     </Stack>
    )}

    <DialogComponent
     dialogOpen={modalOpenStakeholder}
     dialogClose={handleModalClose}
     title="Stakeholder Mapping"
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
     <FormStakeholder mode="add" project={project} />
    </DialogComponent>
   </CardItem>
  </Stack>
 );
}
