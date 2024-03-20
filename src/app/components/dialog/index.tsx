import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function DialogQuill({
 title,
 dialogOpen,
 dialogClose,
 children,
}: {
 title: string;
 dialogOpen: boolean;
 dialogClose?: () => void;
 children?: React.ReactNode;
}) {
 return (
  <Dialog
   open={dialogOpen}
   keepMounted
   onClose={dialogClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: 800,
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
   <DialogContent dividers>{children}</DialogContent>
  </Dialog>
 );
}
