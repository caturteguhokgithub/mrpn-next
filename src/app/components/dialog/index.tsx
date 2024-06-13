import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import theme from "@/theme";

export default function DialogComponent({
 title,
 dialogOpen,
 dialogClose,
 children,
 dialogFooter,
 width,
 tableMode,
 headerAction,
 noDivider,
}: {
 title?: React.ReactNode;
 dialogOpen: boolean;
 dialogClose?: () => void;
 children?: React.ReactNode;
 dialogFooter?: React.ReactNode;
 width?: number | string;
 tableMode?: boolean;
 headerAction?: React.ReactNode;
 noDivider?: boolean;
}) {
 return (
  <Dialog
   open={dialogOpen}
   keepMounted
   onClose={dialogClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: width ? width : 800,
     [theme.breakpoints.down("md")]: {
      minWidth: "90%",
     },
     ".quill": {
      height: "calc(100vh - 400px)",
      ".ql-container": {
       height: "calc(100% - 44px)",
      },
     },
    },
   }}
  >
   {title && (
    <DialogTitle
     component="div"
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
       flexDirection: "column",
       alignItems: "flex-start",
       gap: 2,
      },
     }}
    >
     {title}
     {headerAction}
    </DialogTitle>
   )}
   <DialogContent dividers={noDivider} sx={{ p: tableMode ? 0 : "16px 24px" }}>
    {children}
   </DialogContent>
   {dialogFooter}
  </Dialog>
 );
}
