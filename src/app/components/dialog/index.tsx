import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function DialogComponent({
 title,
 dialogOpen,
 dialogClose,
 children,
 dialogFooter,
 width,
 tableMode,
}: {
 title: string;
 dialogOpen: boolean;
 dialogClose?: () => void;
 children?: React.ReactNode;
 dialogFooter?: React.ReactNode;
 width?: number;
 tableMode?: boolean;
}) {
 return (
  <Dialog
   open={dialogOpen}
   keepMounted
   onClose={dialogClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: width ? width : 800,
     ".quill": {
      height: "calc(100vh - 400px)",
      ".ql-container": {
       height: "calc(100% - 44px)",
      },
     },
    },
   }}
  >
   <DialogTitle>{title}</DialogTitle>
   <DialogContent dividers sx={{ p: tableMode ? 0 : "16px 24px" }}>
    {children}
   </DialogContent>
   {dialogFooter}
  </Dialog>
 );
}
