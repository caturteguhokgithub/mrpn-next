import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Autocomplete,
 Box,
 Breadcrumbs,
 Checkbox,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Grow,
 List,
 ListItem,
 ListItemButton,
 ListItemText,
 Paper,
 Popover,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
// import TableSasaranPkppr from "./partials/table-sasaran-pkkpr";
import TableSasaran from "./table-sasaran-global";
import TableRincianOutput from "./table-ro";
import TableMilestone from "./table-milestone";
import TableStakeholder from "./table-stakeholder";
import TablePeraturan from "./table-peraturan";
import Link from "next/link";
import TextareaComponent from "@/app/components/textarea";
import { DateRange } from "react-date-range";
import moment from "moment";
import { listSelectKp } from "@/app/executive-summary/data";
import { blue, grey } from "@mui/material/colors";
import MultiSelect from "@/app/components/multiSelect";
import { Option } from "@/app/components/multiSelect";
import DropdownKp, {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/app/components/dropdownKp";
import TableKemungkinan from "./table-kriteria-kemungkinan";
import { listKotaKab } from "@/app/utils/kotaKab";
import theme from "@/theme";
import TableDampak from "./table-kriteria-dampak";
import DateRangePicker from "@/app/components/dateRange";
import { IconFA } from "@/app/components/icons/icon-fa";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listProvinsi } from "@/app/utils/provinsi";

type Option = (typeof listProvinsi)[number];

export default function FormKonstra({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
 const [state, setState] = React.useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const [anchorElTooltip, setAnchorElTooltip] =
  React.useState<HTMLElement | null>(null);
 const [project, setProject] = React.useState("");
 const [valueLocation, setValueLocation] = React.useState<string | null>("");
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElTooltip(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorElTooltip(null);
 };

 const handleClick = (event: any) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const openTooltip = Boolean(anchorElTooltip);
 const open = Boolean(anchorEl);
 const id = open ? "simple-popover" : undefined;

 const momentStart = moment.utc(state[0].startDate).format("YYYY");
 const momentEnd = moment.utc(state[0].endDate).format("YYYY");

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const nameOfKp = listSelectKp[4].name;

 const handleChangeProject = (value: any) => {
  setProject(value);
 };

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listProvinsi]);
   else setColumns([]);
   return !prev;
  });
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Formulir Penetapan Konteks"
    withCard
    heightTitleBreadcrumb
    chipKp
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb" sx={{ lineHeight: 1 }}>
      <Typography fontSize="12px">Penetapan Konteks</Typography>
      <Link href="/penetapan-konteks/konteks-strategis">
       <Typography fontSize="12px">Konteks Strategis</Typography>
      </Link>
     </Breadcrumbs>
    }
    sxCard={{
     marginTop: 0,
    }}
    sxHeaderCard={{
     [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
     },
    }}
   >
    <Typography
     component="h2"
     fontWeight="600"
     fontSize="1.1rem"
     textTransform="capitalize"
     mb="2rem"
    >
     Konteks Manajemen Risiko
    </Typography>
    <Grid container spacing={2}>
     <Grid item xs={12} sm={6} lg={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Nama PKPPR" information="Nama PKPPR" />
       <Typography fontWeight={600}>Penurunan Stunting</Typography>
       {/* {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Nama PKPPR"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>Penurunan Stunting</Typography>
       )} */}
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6} lg={6}>
      <FormControl fullWidth>
       <FieldLabelInfo
        title="Periode Penerapan"
        information="Periode Penerapan"
       />
       <Typography fontWeight={600}>2025 - 2029</Typography>
       {/* {mode === "add" || mode === "edit" ? (
        <DateRangePicker placeholder="Pilih periode penerapan" />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )} */}
      </FormControl>
     </Grid>
     <Grid item xs={12}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Latar Belakang" information="Latar Belakang" />
       <Typography fontWeight={600} component="div">
        <List
         sx={{
          listStyleType: "disc",
          py: 0,
          pl: 2,
          ml: 1,
          li: {
           pl: 0,
           py: "2px",
          },
         }}
        >
         <ListItem sx={{ display: "list-item" }}>
          Indonesia menuju upper-middle income countries, tetapi AKI dan
          stunting sebagai indikator kesejahteraan masih tertinggal
         </ListItem>
         <ListItem sx={{ display: "list-item" }}>
          AKI merupakah indikator penting dalam pencapaian IPM, untuk itu
          penurunan kematian ibu investasi penting bagi pembangunan ekonomi dan
          pembangunan manusia
         </ListItem>
         <ListItem sx={{ display: "list-item" }}>
          Stunting menjadi ancaman dalam menciptakan generasi yang unggul dan
          berdaya saing, dalam mewujudkan Indonesia Emas tahun 2045
         </ListItem>
        </List>
       </Typography>
       {/* {mode === "add" ? (
        <TextareaComponent
         label="Latar Belakang"
         placeholder="Latar Belakang"
        />
       ) : mode === "edit" ? (
        <TextareaComponent
         label="Latar Belakang"
         placeholder="Latar Belakang"
         value="-"
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )} */}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableSasaran mode={mode} />
    {/* <Divider sx={{ my: 3 }} />
    <TableSasaran variant="PN" />
    <Divider sx={{ my: 3 }} />
    <TableSasaranPkppr /> */}
    <Divider sx={{ my: 3 }} />
    <Grid container spacing={2}>
     <Grid item xs={12}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Ruang Lingkup" information="Ruang Lingkup" />
       <Typography fontWeight={600} component="div">
        <List
         sx={{
          listStyleType: "disc",
          py: 0,
          pl: 2,
          ml: 1,
          li: {
           pl: 0,
           py: "2px",
          },
         }}
        >
         <ListItem sx={{ display: "list-item" }}>
          SSGB, 2019: sebesar 27,7% ,termasuk dalam kategori tinggi berdasarkan
          (WHO)
         </ListItem>
         <ListItem sx={{ display: "list-item" }}>
          Diperlukan percepatan hingga dua kali (2,7% rata-rata penurunan per
          tahun) untuk mencapai target RPJMN
         </ListItem>
         <ListItem sx={{ display: "list-item" }}>
          Diperlukan intervensi lintas-sector
         </ListItem>
         <ListItem sx={{ display: "list-item" }}>
          Kegiatan Pembangunan relevan dengan Program Prioritas
          Presiden/Gamechanger/Percepatan pencapaian 45 indikator.
         </ListItem>
        </List>
       </Typography>
       {/* {mode === "add" ? (
        <TextareaComponent label="Ruang Lingkup" placeholder="Ruang Lingkup" />
       ) : mode === "edit" ? (
        <TextareaComponent
         label="Ruang Lingkup"
         placeholder="Ruang Lingkup"
         value="-"
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )} */}
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6} lg={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Lokasi" information="Lokasi" />
       {mode === "add" ? (
        <>
         <Autocomplete
          multiple
          disableCloseOnSelect
          filterSelectedOptions
          freeSolo={false}
          size="small"
          value={columns}
          options={listProvinsi}
          getOptionLabel={(option) => option.nama}
          // value={valueLocation}
          // onChange={(event: any, newValue: string | null) => {
          //  setValueLocation(newValue);
          // }}
          // defaultValue={[listKotaKab[13]]}

          onChange={(_e, value, reason) => {
           if (reason === "clear" || reason === "removeOption")
            setSelectAll(false);
           if (
            reason === "selectOption" &&
            value.length === listProvinsi.length
           )
            setSelectAll(true);
           setColumns(value);
          }}
          renderInput={(params) => (
           <TextField
            {...params}
            InputLabelProps={{
             shrink: true,
            }}
            placeholder="Pilih provinsi"
            sx={SxAutocompleteTextField}
           />
          )}
          PaperComponent={(paperProps) => {
           const { children, ...restPaperProps } = paperProps;
           return (
            <Paper {...restPaperProps}>
             <Box
              onMouseDown={(e) => e.preventDefault()} // prevent blur
              pl={1.5}
              py={0.5}
             >
              <FormControlLabel
               onClick={(e) => {
                e.preventDefault(); // prevent blur
                handleToggleSelectAll();
               }}
               label="Pilih semua provinsi"
               control={
                <Checkbox id="select-all-checkbox" checked={selectAll} />
               }
              />
             </Box>
             <Divider />
             {children}
            </Paper>
           );
          }}
          sx={{
           ...SxAutocomplete,
           ".MuiInputBase-root": {
            borderRadius: 1,
           },
          }}
         />
         {/* <MultiSelect defaultValue={[10, 20]}>
          <Option value={10}>Ten</Option>
          <Option value={20}>Twenty</Option>
          <Option value={30}>Thirty</Option>
          <Option value={40}>Forty</Option>
          <Option value={50}>Fifty</Option>
         </MultiSelect> */}
        </>
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6} lg={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Tahun Anggaran" information="Tahun Anggaran" />
       <Typography
        fontWeight={600}
        height={40}
        alignItems="center"
        display="inline-flex"
       >
        2024
       </Typography>
       {/* {mode === "add" ? (
        <TextField
         disabled
         variant="outlined"
         size="small"
         placeholder="Tahun Anggaran"
         InputLabelProps={{
          shrink: true,
         }}
         value={
          moment(momentStart).isSame(momentEnd)
           ? moment.utc(state[0].startDate).format("YYYY")
           : `${moment.utc(state[0].startDate).format("YYYY")} - ${moment
              .utc(state[0].endDate)
              .format("YYYY")}`
         }
         sx={{
          ".Mui-disabled": {
           bgcolor: grey[200],
           color: grey[900],
           WebkitTextFillColor: grey[900],
          },
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )} */}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableRincianOutput mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableMilestone mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableStakeholder mode={mode} project="1" />
    <Divider sx={{ my: 3 }} />
    <TablePeraturan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableKemungkinan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableDampak mode={mode} />
   </ContentPage>
  </DashboardLayout>
 );
}
