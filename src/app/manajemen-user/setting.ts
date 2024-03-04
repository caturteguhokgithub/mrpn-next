import { type MRT_ColumnDef } from "material-react-table";

export type Person = {
 id: number;
 name: {
  firstName: string;
  lastName: string;
 };
};

export const columns: MRT_ColumnDef<Person>[] = [
 {
  accessorKey: "id",
  header: "No.",
  size: 120,
  grow: false,
 },
 {
  accessorFn: (row) => `${row.name.firstName} ${row.name.lastName}`,
  header: "Nama User",
  grow: true,
 },
];

export const data: Person[] = [
 {
  id: 1,
  name: {
   firstName: "L1:",
   lastName: "Entitas Utama UPR",
  },
 },
 {
  id: 2,
  name: {
   firstName: "L1:",
   lastName: "Entitas Pendukung UPR",
  },
 },
 {
  id: 3,
  name: {
   firstName: "L1:",
   lastName: "Kemenko UPR",
  },
 },
 {
  id: 4,
  name: {
   firstName: "L1:",
   lastName: "Unit Pengelola Risiko",
  },
 },
 {
  id: 5,
  name: {
   firstName: "L2:",
   lastName: "Sekretariat Komite",
  },
 },
 {
  id: 6,
  name: {
   firstName: "L2:",
   lastName: "Komite MRPN",
  },
 },
 {
  id: 7,
  name: {
   firstName: "L3:",
   lastName: "BPKP",
  },
 },
];

export const dataEmpty = [];
