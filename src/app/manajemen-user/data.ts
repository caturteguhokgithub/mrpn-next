export type Person = {
 id: number;
 name: {
  firstName: string;
  lastName: string;
 };
 address: string;
 city: string;
 state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
export const data: Person[] = [
 {
  id: 1,
  name: {
   firstName: "John",
   lastName: "Doe",
  },
  address: "261 Erdman Ford",
  city: "East Daphne",
  state: "Kentucky",
 },
 {
  id: 2,
  name: {
   firstName: "Jane",
   lastName: "Doe",
  },
  address: "769 Dominic Grove",
  city: "Columbus",
  state: "Ohio",
 },
 {
  id: 3,
  name: {
   firstName: "Joe",
   lastName: "Doe",
  },
  address: "566 Brakus Inlet",
  city: "South Linda",
  state: "West Virginia",
 },
 {
  id: 4,
  name: {
   firstName: "Kevin",
   lastName: "Vandy",
  },
  address: "722 Emie Stream",
  city: "Lincoln",
  state: "Nebraska",
 },
 {
  id: 5,
  name: {
   firstName: "Joshua",
   lastName: "Rolluffs",
  },
  address: "32188 Larkin Turnpike",
  city: "Omaha",
  state: "Nebraska",
 },
];
