"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 ToggleButtonGroup,
 Typography,
 alpha,
 Collapse,
 Box,
 Divider,
 Checkbox,
 FormControlLabel,
 FormGroup,
 Button,
 DialogActions,
 Chip,
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import CustomToggleButton from "@/components/toggleButton";
import AddButton from "../components/buttonAdd";
import DialogComponent from "../components/dialog";
import FormTable from "./partials/form-table";
import Posts from "./partials/search";

const ToggleContentTema = ({ children }: { children?: React.ReactNode }) => {
 return (
  <>
   <Divider sx={{ my: 2 }} />
   <Typography mt={2} color={grey[600]} fontSize={14} fontStyle="italic">
    Pilih KP
   </Typography>
   <Box
    mt={2}
    sx={{
     maxHeight: "36vh",
     overflow: "auto",
     "&::-webkit-scrollbar": {
      width: "3px",
     },
    }}
   >
    <FormGroup>{children}</FormGroup>
   </Box>
  </>
 );
};

export default function PageTema({}) {
 const [valueTheme, setValueTheme] = React.useState<string | null>("[]");
 //  const [valueTheme, setValueTheme] = React.useState([]);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newTheme: string | null
 ) => {
  setValueTheme(newTheme);
 };

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 const isEmpty = false;

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Tema"
     withCard
     addButton={
      <AddButton
       title="Tambah Tema"
       filled
       noMargin
       onclick={handleModalOpenAdd}
      />
     }
    >
     {isEmpty ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Tema Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <>
       <Typography color={grey[600]} fontSize={14} fontStyle="italic">
        Pilih salah satu tema
       </Typography>
       <ToggleButtonGroup
        value={valueTheme}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
         display: "grid",
         gridTemplateColumns: "1fr 1fr 1fr",
         gap: 2,
         mt: 2,
         button: {
          "&:hover": {
           bgcolor: alpha(theme.palette.primary.main, 0.1),
          },
          "&.Mui-selected": {
           bgcolor: theme.palette.primary.main,
           color: "white",
           ".MuiBox-root": {
            bgcolor: theme.palette.primary.main,
            color: "white",
            borderRight: "1px solid white",
           },
           "&:hover": {
            bgcolor: theme.palette.primary.main,
            color: "white",
           },
          },
         },
        }}
       >
        <CustomToggleButton
         code="01.01.02"
         value="penurunan-stunting"
         label="Penurunan Stunting"
        />
        <CustomToggleButton
         code="01.01.03"
         value="penurunan-kemiskinan"
         label="Penurunan Kemiskinan"
        />
        <CustomToggleButton
         code="01.01.04"
         value="percepatan-transisi-energi"
         label="Percepatan Transisi Energi"
        />
        <CustomToggleButton
         code="01.01.05"
         value="peningkatan-pariwisata"
         label="Peningkatan Pariwisata"
        />
        <CustomToggleButton
         code="01.01.06"
         value="ketahanan-pangan"
         label="Ketahanan Pangan"
        />
        <CustomToggleButton
         code="01.01.07"
         value="sistem-persampahan"
         label="Sistem Persampahan"
        />
       </ToggleButtonGroup>
       <Collapse in={valueTheme === "penurunan-stunting"}>
        {/* <ToggleContentTema> */}
        {/* {listKp.map(({ id, kode_kp, nama_kp }) => (
          <FormControlLabel
           key={id}
           control={<Checkbox />}
           label={`${kode_kp} - ${nama_kp}`}
          />
         ))} */}
        {/* <FormControlLabel
          control={<Checkbox />}
          label="KP.02 - Penurunan stunting"
         />
         <FormControlLabel
          control={<Checkbox />}
          label="KP.02 - Penurunan stunting"
         /> */}
        {/* </ToggleContentTema> */}
        {/* {listKp.map((item) => (
         <>
          <div key={item.id}>
           <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
           />
           <label>{item.nama_kp}</label>
          </div>
         </>
        ))}
        <div>
         <h2>Data yang dipilih:</h2>
         <ul>
          {data
           .filter((item) => selectedItems.includes(item.id))
           .map((selectedItem) => (
            <li key={selectedItem.id}>{selectedItem.name}</li>
           ))}
         </ul>
        </div>

        {hasPromo && <Chip label={promo} />} */}
        <Posts />
        <Button
         variant="contained"
         sx={{ minWidth: 160, mt: 2, borderRadius: 50 }}
        >
         Simpan
        </Button>
       </Collapse>
       <Collapse in={valueTheme === "penurunan-kemiskinan"}>
        <ToggleContentTema>
         <FormControlLabel
          control={<Checkbox />}
          label="KP.03 - Peningkatan pelayanan kesehatan dan gizi bagi usia sekolah, usia produktif, lansia, serta KB dan kespro"
         />
        </ToggleContentTema>
        <Button
         variant="contained"
         sx={{ minWidth: 160, mt: 2, borderRadius: 50 }}
        >
         Simpan
        </Button>
       </Collapse>
      </>
     )}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    width={360}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Tema"
    dialogFooter={dialogActionFooter}
   >
    <FormTable />
   </DialogComponent>
  </>
 );
}
