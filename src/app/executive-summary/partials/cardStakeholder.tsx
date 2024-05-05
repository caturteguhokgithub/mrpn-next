import React from "react";
import { useDragScroll } from "@/app/utils/useDragScroll";
import { CardContent, Tooltip, Grow } from "@mui/material";

export default function CardStakeholderItem() {
 const [ref] = useDragScroll();

 return (
  <CardContent
   ref={ref}
   sx={{
    display: "flex",
    gap: 2,
    maxWidth: "100%",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
     height: "3px",
    },
   }}
  >
   {/* {detailStakeholder.instance.map((itemSh, index) => (
    <>
     <Tooltip title={itemSh.name} followCursor TransitionComponent={Grow}>
      <Image
       key={index}
       alt={detailStakeholder.label}
       src={itemSh.logo}
       width={0}
       height={0}
       sizes="100vw"
       style={{
        width: "auto",
        height: "60px",
        userSelect: "none",
        touchAction: "none",
       }}
      />
     </Tooltip>
    </>
   ))} */}
  </CardContent>
 );
}
