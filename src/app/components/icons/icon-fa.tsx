import { Icon } from "@mui/material";

export const IconFA = ({
 name,
 size,
 color,
 sx,
 onclick,
}: {
 name: string;
 size: number;
 color?: string;
 sx?: React.CSSProperties;
 onclick?: () => void;
}) => {
 return (
  <Icon
   baseClassName="fas"
   className={`fa-${name}`}
   onClick={onclick}
   sx={{
    fontSize: `${size}px`,
    color: color,
    ...sx,
   }}
  />
 );
};
