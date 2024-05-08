import React, { useRef } from "react";
import {
 Typography,
 Stack,
 Button,
 DialogActions,
 Card,
 CardContent,
 Grow,
 Tooltip,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import Image from "next/image";
import FormStakeholder from "./tabProfil/form-stakeholder";
import { dataTema } from "../dataTema";
import { useDragScroll } from "@/app/utils/useDragScroll";
import CardCascading from "./tabProfil/cardCascading";
import CardProfilRo from "./tabProfil/cardProfilRo";
import CardStakeholder from "./tabProfil/cardStakeholder";

export default function TabProfil({ project }: { project: string }) {
 const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);

 const handleModalOpenStakeholder = () => {
  setModalOpenStakeholder(true);
 };

 const handleModalClose = () => {
  setModalOpenStakeholder(false);
 };

 const isEmpty = false;
 const refDrag = useRef([]);
 const [ref] = useDragScroll();

 return (
  <Stack gap={1}>
   <CardCascading project={project} />
   <CardProfilRo project={project} />
   <CardStakeholder project={project} />
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
