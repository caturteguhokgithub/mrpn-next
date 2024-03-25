import { useState } from "react";
import SearchField from "./search-bar";
import Post from "./search-result";
import { listKp } from "@/app/executive-summary/data";
import { Box, Divider, FormGroup, Stack, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

export default function Posts() {
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchTermUpdate = (searchTermUpdate: any) => {
  setSearchTerm(searchTermUpdate.target.value);
 };

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

 const filteredPosts = () => {
  // Return if blanc or no search
  if (searchTerm.trim() === "") return listKp;

  // Filter posts
  const filteredPosts = listKp.filter((post) => {
   const titleAndBodyText =
    post.kode_kp.replace(/\n/g, " ") + post.nama_kp.replace(/\n/g, " ");

   return filterRegex.test(titleAndBodyText);
  });

  return filteredPosts;
 };

 // Highlight matches
 const filteredPostsArray = filteredPosts();

 const highlightedPosts = filteredPostsArray.map((post) => {
  const bodyHighlighted = post.nama_kp.replace(replaceRegex, function (a) {
   return `<span style="background-color: ${yellow[200]}; font-weight: 500;">${a}</span>`;
  });

  const titleHighlighted = post.kode_kp.replace(replaceRegex, function (a) {
   return `<span style="background-color:  ${yellow[200]}; font-weight: 500;">${a}</span>`;
  });

  return {
   id: post.id,
   title: <div dangerouslySetInnerHTML={{ __html: titleHighlighted }} />,
   body: <div dangerouslySetInnerHTML={{ __html: bodyHighlighted }} />,
  };
 });

 return (
  <>
   <Divider sx={{ my: 2 }} />
   <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mt={2}
   >
    <Typography color={grey[600]} fontSize={14} fontStyle="italic">
     Pilih KP
    </Typography>
    <SearchField handleSearchTermUpdate={handleSearchTermUpdate} />
   </Stack>
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
    <FormGroup>
     {highlightedPosts.map((post) => {
      return <Post key={post.id} {...post} />;
     })}
    </FormGroup>
   </Box>
  </>
 );
}
