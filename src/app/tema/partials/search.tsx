import { useState } from "react";
import SearchField from "./search-bar";
import { Box, Divider, FormGroup, Stack, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import SearchResult from "./search-result";
import TreeView from "./tree-view";

export default function SearchKP({
 activeTab,
 listData,
 searchTerm,
 handleSearchTermUpdate,
 addTheme,
}: {
 activeTab: string;
 listData: any[];
 searchTerm: string;
 handleSearchTermUpdate: any;
 addTheme?: boolean;
}) {
 //  const [searchTerm, setSearchTerm] = useState("");

 //  const handleSearchTermUpdate = (searchTermUpdate: any) => {
 //   setSearchTerm(searchTermUpdate.target.value);
 //  };

 // Trim ends, split into array and remove empty strings in array
 const searchTermsArray = searchTerm
  .replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // Remove regex from search text - $& means the whole matched string
  .trim()
  .split(" ")
  .filter((searchTerm) => searchTerm !== "");
 const replaceRegexString = searchTermsArray.join("|");
 const replaceRegex = new RegExp(replaceRegexString, "ig");

 const filterRegexString = searchTermsArray
  .map((value) => {
   return `(?=.*${value})`;
  })
  .join("");
 const filterRegex = new RegExp(filterRegexString, "igm");

 const highlightedPosts = listData.map((post) => {
  const bodyHighlighted = post.nama.replace(replaceRegex, function (a: any) {
   return `<span style="background-color:rgb(255, 203, 127); font-weight: 500;">${a}</span>`;
  });

  const titleHighlighted = post.kode.replace(replaceRegex, function (a: any) {
   return `<span style="background-color:rgb(255, 203, 127); font-weight: 500;">${a}</span>`;
  });

  return {
   id: post.id,
   title: <div dangerouslySetInnerHTML={{ __html: titleHighlighted }} />,
   body: <div dangerouslySetInnerHTML={{ __html: bodyHighlighted }} />,
  };
 });

 return (
  <>
   {/* <Divider sx={{ my: 2 }} /> */}
   <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    // mt={2}
   >
    {/* <Typography color={grey[600]} fontSize={14} fontStyle="italic"></Typography> */}
    <Typography>
     {addTheme ? "Pilih AP" : "Pilih AP/PP/KP dari tema"}{" "}
     <Typography fontWeight={600} fontSize={14} component="span">
      {activeTab === "penurunan-stunting"
       ? "Penurunan Stunting"
       : activeTab === "penurunan-kemiskinan"
       ? "Penurunan Kemiskinan"
       : activeTab === "percepatan-transisi-energi"
       ? "Percepatan Transisi Energi"
       : activeTab === "peningkatan-pariwisata"
       ? "Peningkatan Pariwisata"
       : activeTab === "ketahanan-pangan"
       ? "Ketahanan Pangan"
       : activeTab === "sistem-persampahan"
       ? "Sistem Persampahan"
       : ""}
     </Typography>
    </Typography>
    <SearchField
     handleSearchTermUpdate={handleSearchTermUpdate}
     addTheme={addTheme}
    />
   </Stack>
   <Box
    mt={2}
    sx={{
     maxHeight: "30vh",
     //  maxHeight: "15vh",
     overflow: "auto",
     "&::-webkit-scrollbar": {
      width: "3px",
     },
    }}
   >
    {addTheme ? (
     <FormGroup>
      {highlightedPosts.map((post) => {
       return <SearchResult key={post.id} {...post} />;
      })}
     </FormGroup>
    ) : (
     <TreeView />
    )}
   </Box>
  </>
 );
}
