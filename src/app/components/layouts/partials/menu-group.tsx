import React from "react";
import { Typography, List, ListSubheader } from "@mui/material";

export const MenuGroup = ({ label, children, isExpanded }: IMenu & ILayout) => {
 return (
  <List
   component="nav"
   subheader={
    <ListSubheader
     component="div"
     sx={{
      bgcolor: "transparent",
      mb: "1rem",
      mx: isExpanded ? "24px" : 0,
     }}
    >
     <Typography
      fontSize="11px"
      color="white"
      textTransform="uppercase"
      sx={{ opacity: 0.5 }}
     >
      {isExpanded ? (
       label
      ) : (
       <>{label.length >= 5 ? label.substr(0, 5) + "..." : label}</>
      )}
     </Typography>
    </ListSubheader>
   }
  >
   {children}
  </List>
 );
};
