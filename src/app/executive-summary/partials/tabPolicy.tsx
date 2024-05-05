import React from "react";
import Image from "next/image";
import {
 Typography,
 Stack,
 Paper,
 Button,
 DialogActions,
 Box,
 Tooltip,
 MenuItem,
 SelectChangeEvent,
 Grid,
 Zoom,
 Card,
 CardContent,
 alpha,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableProfilIntervensi from "./table-profil-intervensi";
import DialogComponent from "@/app/components/dialog";
import FormProfilRo from "./form-profil-ro";
import AddButton from "@/app/components/buttonAdd";
import FormProfilRoKunci from "./form-profil-ro-kunci";
import dynamic from "next/dynamic";
import TableProfilRoKunci from "./table-profil-ro-kunci";
import FormProfilRoProject from "./form-profil-ro-project";
import SelectCustomTheme from "@/app/components/select";
import { grey, green, red, blue, orange } from "@mui/material/colors";
import FormPendanaan from "./form-pendanaan";
import { dataTema } from "../dataTema";
import theme from "@/theme";

const FundSource = ({
 label,
 value,
 color,
 isYear,
}: {
 label: string;
 value: string;
 color: string;
 isYear?: boolean;
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
    fontWeight={700}
    letterSpacing={0.2}
    fontSize={14}
    minWidth={isYear ? 0 : 120}
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

export default function TabPolicy({ project }: { project: string }) {
 const [modalOpenProfilRoKunci, setModalOpenProfilRoKunci] =
  React.useState(false);
 const [modalOpenProfilRoKunciProject, setModalOpenProfilRoKunciProject] =
  React.useState(false);
 const [modalOpenRoadmap, setModalOpenRoadmap] = React.useState(false);
 const [modalOpenCritical, setModalOpenCritical] = React.useState(false);
 const [value, setValue] = React.useState("");
 const [modalOpenImgRoadmap, setModalOpenImgRoadmap] = React.useState(false);
 const [modalOpenImgCritical, setModalOpenImgCritical] = React.useState(false);
 const [projectMain, setProjectMain] = React.useState("");
 const [projectSupport, setProjectSupport] = React.useState("");
 const [modalOpenPendanaan, setModalOpenPendanaan] = React.useState(false);

 const handleChangeProjectMain = (event: SelectChangeEvent) => {
  setProjectMain(event.target.value);
 };
 const handleChangeProjectSupport = (event: SelectChangeEvent) => {
  setProjectSupport(event.target.value);
 };

 const handleModalOpenProfilRoKunci = () => {
  setModalOpenProfilRoKunci(true);
 };
 const handleModalOpenRoadmap = () => {
  setModalOpenRoadmap(true);
 };
 const handleModalOpenCritical = () => {
  setModalOpenCritical(true);
 };
 const handleModalImgRoadmap = () => {
  setModalOpenImgRoadmap(true);
 };
 const handleModalImgCritical = () => {
  setModalOpenImgCritical(true);
 };
 const handleModalOpenProfilRoKunciProject = () => {
  setModalOpenProfilRoKunciProject(true);
 };

 const handleModalOpenPendanaan = () => {
  setModalOpenPendanaan(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRoKunci(false);
  setModalOpenRoadmap(false);
  setModalOpenCritical(false);
  setModalOpenImgRoadmap(false);
  setModalOpenImgCritical(false);
  setModalOpenProfilRoKunciProject(false);
  setModalOpenPendanaan(false);
 };
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem
    title="Project Roadmap"
    setting
    settingEditOnclick={handleModalOpenRoadmap}
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
      <Box width="100%" textAlign="center">
       {dataTema.map((itemRoadmap) => (
        <>
         {project === itemRoadmap.temaId && (
          <>
           {itemRoadmap.roadmap.length < 1 ? (
            <EmptyState
             dense
             icon={<IconEmptyData width={100} />}
             title="Data Kosong"
             description="Silahkan isi konten halaman ini"
            />
           ) : (
            <>
             {itemRoadmap.roadmap.map((detailRoadmap) => (
              <>
               <Typography
                component="h2"
                fontSize="1.2em"
                fontWeight={500}
                textAlign="left"
               >
                Berbasis Output
               </Typography>
               {detailRoadmap.outputBase.length > 1 ? (
                <Stack direction="row" gap={2} width="100%" mt={1}>
                 {detailRoadmap.outputBase.map((itemOutput, index) => (
                  <Card
                   variant="outlined"
                   key={index}
                   sx={{
                    flex: "0 0 calc(20% - 12px)",
                    borderRadius: "10px 10px 0 0",
                   }}
                  >
                   <CardContent
                    sx={{
                     bgcolor:
                      index === 0
                       ? alpha(theme.palette.primary.main, 1)
                       : index === 1
                       ? alpha(theme.palette.primary.main, 0.9)
                       : index === 2
                       ? alpha(theme.palette.primary.main, 0.8)
                       : index === 3
                       ? alpha(theme.palette.primary.main, 0.7)
                       : index === 4
                       ? alpha(theme.palette.primary.main, 0.6)
                       : index === 5
                       ? alpha(theme.palette.primary.main, 0.5)
                       : alpha(theme.palette.primary.main, 0.4),
                     color: "white",
                     borderRadius: "10px 10px 0 0",
                     py: 1,
                    }}
                   >
                    <Typography
                     variant="h6"
                     component="div"
                     lineHeight={1}
                     textTransform="capitalize"
                     fontWeight={600}
                    >
                     {itemOutput.year}
                    </Typography>
                   </CardContent>
                   <CardContent>
                    {itemOutput.note.length < 1 ? (
                     <>
                      <Typography component="p" textAlign="left">
                       <Typography
                        component="strong"
                        fontWeight={500}
                        textAlign="left"
                       >
                        Output:
                       </Typography>{" "}
                       {itemOutput.output}
                      </Typography>
                      <Typography component="p" textAlign="left" mt={1}>
                       <Typography
                        component="strong"
                        fontWeight={500}
                        textAlign="left"
                       >
                        Ro Pendukung:
                       </Typography>{" "}
                       {itemOutput.roPendukung.length > 1 ? (
                        <Box component="ul" pl="20px !important">
                         {itemOutput.roPendukung.map((itemRop, index) => (
                          <Box component="li" key={index} textAlign="left">
                           <Typography
                            variant="body1"
                            key={index}
                            fontSize="0.9em"
                           >
                            {itemRop}
                           </Typography>
                          </Box>
                         ))}
                        </Box>
                       ) : (
                        <>
                         {itemOutput.roPendukung.map((itemRop) => (
                          <>{itemRop}</>
                         ))}
                        </>
                       )}
                      </Typography>
                     </>
                    ) : (
                     <>
                      {itemOutput.note.length > 1 ? (
                       <Box component="ul" pl="20px !important">
                        {itemOutput.note.map((itemNote, index) => (
                         <Box component="li" key={index} textAlign="left">
                          <Typography variant="body1" key={index}>
                           {itemNote}
                          </Typography>
                         </Box>
                        ))}
                       </Box>
                      ) : (
                       <Typography component="p" textAlign="left">
                        {itemOutput.note}
                       </Typography>
                      )}
                     </>
                    )}
                   </CardContent>
                  </Card>
                 ))}
                </Stack>
               ) : null}
               {detailRoadmap.businessBase.length > 1 ? (
                <>
                 <Box mt={4}>
                  <Typography
                   component="h2"
                   fontSize="1.2em"
                   fontWeight={500}
                   textAlign="left"
                  >
                   Berbasis Bisnis
                  </Typography>
                 </Box>
                 <Stack direction="row" gap={2} width="100%" mt={1}>
                  {detailRoadmap.businessBase.map((itemOutput, index) => (
                   <Card
                    variant="outlined"
                    key={index}
                    sx={{
                     flex: "0 0 calc(20% - 12px)",
                     borderRadius: "10px 10px 0 0",
                    }}
                   >
                    <CardContent
                     sx={{
                      bgcolor:
                       index === 0
                        ? alpha(orange[700], 1)
                        : index === 1
                        ? alpha(orange[700], 0.9)
                        : index === 2
                        ? alpha(orange[700], 0.8)
                        : index === 3
                        ? alpha(orange[700], 0.7)
                        : index === 4
                        ? alpha(orange[700], 0.6)
                        : index === 5
                        ? alpha(orange[700], 0.5)
                        : alpha(orange[700], 0.4),

                      color: "white",
                      borderRadius: "10px 10px 0 0",
                      py: 1,
                     }}
                    >
                     <Typography
                      variant="h6"
                      component="div"
                      lineHeight={1}
                      textTransform="capitalize"
                      fontWeight={600}
                     >
                      {itemOutput.year}
                     </Typography>
                    </CardContent>
                    <CardContent>
                     {itemOutput.note.length < 1 ? (
                      <>
                       <Typography component="p" textAlign="left">
                        <Typography
                         component="strong"
                         fontWeight={500}
                         textAlign="left"
                        >
                         Output:
                        </Typography>{" "}
                        {itemOutput.output}
                       </Typography>
                       <Typography component="p" textAlign="left" mt={1}>
                        <Typography
                         component="strong"
                         fontWeight={500}
                         textAlign="left"
                        >
                         Ro Pendukung:
                        </Typography>{" "}
                        {itemOutput.roPendukung.length > 1 ? (
                         <Box component="ul" pl="20px !important">
                          {itemOutput.roPendukung.map((itemRop, index) => (
                           <Box component="li" key={index} textAlign="left">
                            <Typography
                             variant="body1"
                             key={index}
                             fontSize="0.9em"
                            >
                             {itemRop}
                            </Typography>
                           </Box>
                          ))}
                         </Box>
                        ) : (
                         <>
                          {itemOutput.roPendukung.map((itemRop) => (
                           <>{itemRop}</>
                          ))}
                         </>
                        )}
                       </Typography>
                      </>
                     ) : (
                      <>
                       {itemOutput.note.length > 1 ? (
                        <Box component="ul" pl="20px !important">
                         {itemOutput.note.map((itemNote, index) => (
                          <Box component="li" key={index} textAlign="left">
                           <Typography variant="body1" key={index}>
                            {itemNote}
                           </Typography>
                          </Box>
                         ))}
                        </Box>
                       ) : (
                        <Typography component="p" textAlign="left">
                         {itemOutput.note}
                        </Typography>
                       )}
                      </>
                     )}
                    </CardContent>
                   </Card>
                  ))}
                 </Stack>
                </>
               ) : null}
              </>
             ))}
            </>
           )}
          </>
         )}
        </>
       ))}
      </Box>
     </>
    )}
    <DialogComponent
     dialogOpen={modalOpenRoadmap}
     dialogClose={handleModalClose}
     title="Project Roadmap"
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
     <Typography variant="caption" component="div" mb={2}>
      Format gambar: <strong>.png / .jpg / .jpeg</strong>. Ukuran gambar{" "}
      <strong>max. 200kb</strong>
     </Typography>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Profil Intevensi Kunci"
    addButton={
     <>
      <AddButton
       filled
       small
       title="Tambah Project"
       onclick={handleModalOpenProfilRoKunciProject}
      />
      <AddButton
       filled
       small
       title="Tambah Profil RO"
       onclick={handleModalOpenProfilRoKunci}
      />
     </>
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
     <TableProfilIntervensi />
    )}
    <DialogComponent
     tableMode
     width={1000}
     dialogOpen={modalOpenProfilRoKunci}
     dialogClose={handleModalClose}
     title="Tambah Profil RO Kunci"
     headerAction={
      <Stack direction="row" gap={1}>
       <SelectCustomTheme
        small
        anchorRight
        value={projectMain}
        onChange={handleChangeProjectMain}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Entitas Utama
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Kementerian Kesehatan
        </MenuItem>
        <MenuItem value="2">Kementerian PUPR</MenuItem>
        <MenuItem value="3">Kementerian Perindustrian</MenuItem>
       </SelectCustomTheme>
       <SelectCustomTheme
        small
        anchorRight
        value={projectSupport}
        onChange={handleChangeProjectSupport}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih Entitas Pendukung
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Kementerian Pertanian
        </MenuItem>
        <MenuItem value="2">BPOM</MenuItem>
        <MenuItem value="3">Simas</MenuItem>
       </SelectCustomTheme>
      </Stack>
     }
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
     <TableProfilRoKunci />
    </DialogComponent>
    <DialogComponent
     width={1000}
     dialogOpen={modalOpenProfilRoKunciProject}
     dialogClose={handleModalClose}
     title="Tambah Nomenklatur RO/Project"
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
     <FormProfilRoProject mode="add" />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Critical Path Prioritas Proyek"
    setting
    settingEditOnclick={handleModalOpenCritical}
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
      <Box width="100%" textAlign="center">
       {dataTema.map((itemCritical) => (
        <>
         {project === itemCritical.temaId && (
          <>
           {itemCritical.criticalPath.length < 1 ? (
            <EmptyState
             dense
             icon={<IconEmptyData width={100} />}
             title="Data Kosong"
             description="Silahkan isi konten halaman ini"
            />
           ) : (
            <>
             {itemCritical.criticalPath.map((detailCritical, index) => (
              <>
               <Tooltip
                key={index}
                title="Klik untuk perbesar gambar"
                placement="right"
                followCursor
                TransitionComponent={Zoom}
               >
                <Image
                 alt="Critical Path Prioritas Proyek"
                 src={detailCritical}
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{
                  width: "70%",
                  height: "auto",
                  margin: "0 auto",
                  cursor: "pointer",
                 }}
                 onClick={handleModalImgCritical}
                />
               </Tooltip>
               <DialogComponent
                width="80%"
                dialogOpen={modalOpenImgCritical}
                dialogClose={handleModalClose}
               >
                <Image
                 alt="Critical Path Prioritas Proyek"
                 src={detailCritical}
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                 }}
                />
               </DialogComponent>
              </>
             ))}
            </>
           )}
          </>
         )}
        </>
       ))}
      </Box>
     </>
    )}
    <DialogComponent
     dialogOpen={modalOpenCritical}
     dialogClose={handleModalClose}
     title="Critical Path Prioritas Proyek"
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
     <Typography variant="caption" component="div" mb={2}>
      Format gambar: <strong>.png / .jpg / .jpeg</strong>. Ukuran gambar{" "}
      <strong>max. 200kb</strong>
     </Typography>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogComponent>
   </CardItem>
   <CardItem
    title="Pendanaan & Investasi Proyek"
    setting
    settingEditOnclick={handleModalOpenPendanaan}
   >
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Grid container spacing={2}>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Jumlah per Tahun
        </Typography>
        <Stack gap={1} mt={1}>
         <FundSource isYear color={grey[600]} label="2023" value="Rp. -" />
         <FundSource isYear color={grey[600]} label="2024" value="Rp. -" />
        </Stack>
       </Paper>
      </Grid>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Sumber Pendanaan
        </Typography>
        <Stack gap={1} mt={1}>
         <FundSource color={green[400]} label="APBN" value="Rp. -" />
         <FundSource color={red[400]} label="Non-APBN" value="Rp. -" />
        </Stack>
       </Paper>
      </Grid>
      <Grid item lg={4}>
       <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontWeight={500} mb={2}>
         Kesiapan Pendanaan
        </Typography>
        <ul>
         <li>Menyebutkan posisi saat ini dalam proses pemenuhan pendanaan</li>
         <li>Menyebutkan persen nominal pendanaan yang sudah didapatkan</li>
        </ul>
       </Paper>
      </Grid>
     </Grid>
    )}
    <DialogComponent
     dialogOpen={modalOpenPendanaan}
     dialogClose={handleModalClose}
     title="Pendanaan & Investasi Proyek"
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
     <FormPendanaan mode="add" />
    </DialogComponent>
   </CardItem>
  </Stack>
 );
}
