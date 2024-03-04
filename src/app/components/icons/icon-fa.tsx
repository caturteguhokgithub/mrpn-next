import { Icon, SvgIcon } from "@mui/material";

export const IconFA = ({
 name,
 size,
 color,
}: {
 name: string;
 size: number;
 color?: string;
}) => {
 return (
  <Icon
   baseClassName="fas"
   className={`fa-${name}`}
   sx={{
    fontSize: `${size}px`,
    color: color,
   }}
  />
 );
};
