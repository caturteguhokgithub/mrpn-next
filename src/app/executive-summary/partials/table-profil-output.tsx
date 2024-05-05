import React from "react";
import {
 Grow,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";

export default function TableProfilOutput() {
 function createData(
  id: number,
  kode_kl: string,
  kl: string,
  kode_pkkr: string,
  ro: string,
  target: string,
  anggaran: string,
  sumberAnggaran: string
 ) {
  return {
   id,
   kode_kl,
   kl,
   kode_pkkr,
   ro,
   target,
   anggaran,
   sumberAnggaran,
  };
 }

 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const rows = [
  createData(
   1,
   "-",
   "Kementerian PUPR",
   "-",
   "Studi Kelayakan Pengembangan SPAM dari Bendungan di daerah Boolang Mangandau, Kalimantan Selatan (target 1000 SR)",
   "-",
   "-",
   "APBN"
  ),
  createData(
   2,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Diseminasi Informasi Mengenai Stunting",
   "-",
   "-",
   "APBN"
  ),
  createData(
   3,
   "-",
   "Kementerian PUPR",
   "-",
   "Pembebasan Lahan di Daerah XXXX (pembangunan SPAM)",
   "-",
   "-",
   "APBN"
  ),
  createData(
   4,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Pengembangan SPAM di Daerah XXXX (300 SR Kumulatif)",
   "-",
   "-",
   "APBN"
  ),
  createData(
   5,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Pengembangan SPAM di Daerah XXXX (400 SR Kumulatif)",
   "-",
   "-",
   "APBN"
  ),
  createData(
   6,
   "-",
   "Kementerian Kesehatan",
   "-",
   "Pengembangan SPAM di Daerah XXXX (300 SR Kumulatif)",
   "-",
   "-",
   "APBN"
  ),
 ];

 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Kode KL</TableCell>
      <TableCell>KL</TableCell>
      <TableCell>Kode PKKR</TableCell>
      <TableCell>RO</TableCell>
      <TableCell>Target</TableCell>
      <TableCell>Anggaran</TableCell>
      <TableCell>Sumber Anggaran</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row) => (
      <TableRow
       key={row.id}
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
       <TableCell>{row.kode_kl}</TableCell>
       <TableCell>{row.kl}</TableCell>
       <TableCell>{row.kode_pkkr}</TableCell>
       <TableCell>
        <>
         {row.ro.length >= 60 ? (
          <Tooltip title={row.ro} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14, cursor: "pointer" }}
           >
            {row.ro.substring(0, 60) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          row.ro
         )}
        </>
       </TableCell>
       <TableCell>{row.target}</TableCell>
       <TableCell>{row.anggaran}</TableCell>
       <TableCell>{row.sumberAnggaran}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}

// import {
//  makeStyles,
//  Paper,
//  TableContainer,
//  Table,
//  TableHead,
//  TableRow,
//  TableCell,
//  TableBody,
//  TablePagination,
// } from "@mui/material";
// import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Paper from "@material-ui/core/Paper";
// // import Table from "@material-ui/core/Table";
// // import TableBody from "@material-ui/core/TableBody";
// // import TableCell from "@material-ui/core/TableCell";
// // import TableContainer from "@material-ui/core/TableContainer";
// // import TableHead from "@material-ui/core/TableHead";
// // import TablePagination from "@material-ui/core/TablePagination";
// // import TableRow from "@material-ui/core/TableRow";

// const columns = [
//  { id: "name", label: "Name", minWidth: 170 },
//  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//  {
//   id: "population",
//   label: "Population",
//   minWidth: 170,
//   align: "right",
//   format: (value: string) => value.toLocaleString(),
//  },
//  {
//   id: "size",
//   label: "Size\u00a0(km\u00b2)",
//   minWidth: 170,
//   align: "right",
//   format: (value: string) => value.toLocaleString(),
//  },
//  {
//   id: "density",
//   label: "Density",
//   minWidth: 170,
//   align: "right",
//   format: (value: number) => value.toFixed(2),
//  },
// ];

// function createData(name, code, population, size) {
//  const density = population / size;
//  return { name, code, population, size, density };
// }

// const countries = [
//  {
//   name: "India",
//   code: "IN",
//   population: 1324171354,
//   size: 3287263,
//  },
//  {
//   name: "China",
//   code: "CN",
//   population: 1403500365,
//   size: 9596961,
//  },
//  {
//   name: "Italy",
//   code: "IT",
//   population: 60483973,
//   size: 301340,
//  },
//  {
//   name: "India",
//   code: "IN2",
//   population: 1324171354,
//   size: 3287263,
//  },
//  {
//   name: "China",
//   code: "CN2",
//   population: 1403500365,
//   size: 9596961,
//  },
//  {
//   name: "Italy",
//   code: "IT2",
//   population: 60483973,
//   size: 301340,
//  },
//  {
//   name: "India",
//   code: "IN3",
//   population: 1324171354,
//   size: 3287263,
//  },
//  {
//   name: "China",
//   code: "CN3",
//   population: 1403500365,
//   size: 9596961,
//  },
//  {
//   name: "Italy",
//   code: "IT3",
//   population: 60483973,
//   size: 301340,
//  },
//  {
//   name: "India",
//   code: "IN4",
//   population: 1324171354,
//   size: 3287263,
//  },
//  {
//   name: "China",
//   code: "CN4",
//   population: 1403500365,
//   size: 9596961,
//  },
//  {
//   name: "Italy",
//   code: "IT4",
//   population: 60483973,
//   size: 301340,
//  },
// ];

// const rows = countries.map((item) =>
//  createData(item.name, item.code, item.population, item.size)
// );

// // const rows = [
// //   createData("India", "IN", 1324171354, 3287263),
// //   createData("China", "CN", 1403500365, 9596961),
// //   createData("Italy", "IT", 60483973, 301340),
// //   createData("United States", "US", 327167434, 9833520),
// //   createData("Canada", "CA", 37602103, 9984670),
// //   createData("Australia", "AU", 25475400, 7692024),
// //   createData("Germany", "DE", 83019200, 357578),
// //   createData("Ireland", "IE", 4857000, 70273),
// //   createData("Mexico", "MX", 126577691, 1972550),
// //   createData("Japan", "JP", 126317000, 377973),
// //   createData("France", "FR", 67022000, 640679),
// //   createData("United Kingdom", "GB", 67545757, 242495),
// //   createData("Russia", "RU", 146793744, 17098246),
// //   createData("Nigeria", "NG", 200962417, 923768),
// //   createData("Brazil", "BR", 210147125, 8515767)
// // ];

// // const useStyles = makeStyles({
// //  root: {
// //   width: "100%",
// //  },
// //  container: {
// //   maxHeight: 440,
// //  },
// // });

// export default function StickyHeadTable() {
//  //  const classes = useStyles();
//  const [page, setPage] = React.useState(0);
//  const [rowsPerPage, setRowsPerPage] = React.useState(10);

//  const handleChangePage = (event, newPage) => {
//   setPage(newPage);
//  };

//  const handleChangeRowsPerPage = (event) => {
//   setRowsPerPage(+event.target.value);
//   setPage(0);
//  };

//  return (
//   <Paper>
//    <TableContainer>
//     <Table stickyHeader aria-label="sticky table">
//      <TableHead>
//       <TableRow>
//        {columns.map((column) => (
//         <TableCell
//          key={column.id}
//          align={column.align}
//          style={{ minWidth: column.minWidth }}
//         >
//          {column.label}
//         </TableCell>
//        ))}
//       </TableRow>
//      </TableHead>
//      <TableBody>
//       {rows
//        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//        .map((row) => {
//         return (
//          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//           {columns.map((column) => {
//            const value = row[column.id];
//            return (
//             <TableCell key={column.id} align={column.align}>
//              {column.format && typeof value === "number"
//               ? column.format(value)
//               : value}
//             </TableCell>
//            );
//           })}
//          </TableRow>
//         );
//        })}
//      </TableBody>
//     </Table>
//    </TableContainer>
//    <TablePagination
//     rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
//     component="div"
//     count={rows.length}
//     rowsPerPage={rowsPerPage}
//     page={page}
//     onChangePage={handleChangePage}
//     onChangeRowsPerPage={handleChangeRowsPerPage}
//    />
//   </Paper>
//  );
// }
