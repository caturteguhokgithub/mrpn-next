import React from "react";
import theme from "@/theme";
import { Typography, ListItemButton, Stack } from "@mui/material";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation";

export const SubmenuItem = ({ label, url, urlLv2 }: IMenu) => {
 const pathname = usePathname();

 return (
  <ListItemButton
   sx={{
    pl: 6,
    py: 0,
    cursor: "default",
    "&:hover": { bgcolor: "transparent" },
   }}
  >
   <Link href={`/${url}/${urlLv2}`} passHref>
    <Stack direction="row" alignItems="center" py="5px">
     <Typography
      ml="20px"
      fontSize="13px"
      color={grey[700]}
      className={pathname == `/${url}/${urlLv2}` ? "link-active" : ""}
      lineHeight={1.2}
      sx={{
       transition: "all 300ms",
       position: "relative",
       "&.link-active": {
        fontWeight: 600,
        color: theme.palette.primary.main,
        "&:before": {
         backgroundColor: theme.palette.primary.main,
         outline: "3px solid",
         outlineColor: grey[300],
        },
       },
       "&:before": {
        content: "''",
        width: "7px",
        height: "7px",
        backgroundColor: grey[700],
        display: "block",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: -20,
        transform: "translateY(-50%)",
        transition: "all 300ms",
       },
       "&:hover": {
        fontWeight: 600,
        "&:before": {
         backgroundColor: theme.palette.primary.main,
         outline: "3px solid",
         outlineColor: grey[300],
        },
       },
      }}
     >
      {label}
     </Typography>
    </Stack>
   </Link>
  </ListItemButton>
 );
};
