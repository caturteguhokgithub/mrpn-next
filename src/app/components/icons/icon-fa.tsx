import { Icon } from "@mui/material";

export const IconFA = ({
 name,
 size,
 color,
 sx,
}: {
 name: string;
 size: number;
 color?: string;
 sx?: any;
}) => {
 return (
  <Icon
   baseClassName="fas"
   className={`fa-${name}`}
   sx={{
    fontSize: `${size}px`,
    color: color,
    ...sx,
   }}
  />
 );
};
