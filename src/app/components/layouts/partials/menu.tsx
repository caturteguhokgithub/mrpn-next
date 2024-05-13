import React from "react";
import { whiteRGB } from "@/app/utils/color";
import theme from "@/theme";
import {
 ListItemIcon,
 ListItemText,
 Typography,
 Icon,
 Box,
 List,
 ListItemButton,
 alpha,
 Collapse,
 Popover,
 Button,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { blue } from "@mui/material/colors";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export const MenuItem = ({
 label,
 icon,
 url,
 isExpanded,
 hasChild,
 children,
 menuParentActive,
}: IMenu & ILayout) => {
 const pathname = usePathname();

 const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
 const [openSubmenu, setOpenSubmenu] = React.useState(false);
 const [activeSubmenuCollapse, setactiveSubmenuCollapse] =
  React.useState(false);

 const clickOpenCollapse = () => {
  setOpenSubmenu(!openSubmenu);
 };

 const clickPopoverCollapse = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
  setactiveSubmenuCollapse(true);
 };

 const handleClosePopoverCollapse = () => {
  setAnchorEl(null);
  setactiveSubmenuCollapse(false);
 };

 const clickOutsideCollapse = () => {
  setOpenSubmenu(false);
 };

 const open = Boolean(anchorEl);
 const id = open ? "simple-popover" : undefined;

 const MenuText = (
  <ListItemText sx={{ textTransform: "capitalize", my: isExpanded ? 1 : 0 }}>
   <Typography
    fontSize={isExpanded ? "15px" : "8px"}
    textAlign={isExpanded ? "left" : "center"}
    lineHeight={isExpanded ? "1.3" : "1.3"}
   >
    {label.length >= 20 ? (
     <Typography
      component="span"
      fontSize={isExpanded ? "14px" : "8px"}
      lineHeight="1.3"
     >
      {label}
     </Typography>
    ) : (
     label
    )}
   </Typography>
  </ListItemText>
 );

 const styles = {
  baseStyle: {
   px: "22px",
   gap: "6px",
   borderRadius: 0,
   mx: 0,
   display: "flex",
   flexDirection: "column",
   transition: "all 300ms ease",
   ".MuiListItemIcon-root": {
    color: theme.palette.primary.light,
   },
   "&.Mui-selected, &.link-active": {
    backgroundColor: theme.palette.primary.light,
    border: 0,
    cursor: "default",
    "svg, p, .MuiListItemIcon-root": {
     color: theme.palette.primary.main,
     fill: theme.palette.primary.main,
    },
    svg: {
     path: {
      fill: theme.palette.primary.main,
     },
    },
    "&.Mui-focusVisible, &:hover": {
     backgroundColor: theme.palette.primary.light,
     ".MuiIcon-root, p": {
      color: theme.palette.primary.main,
     },
    },
   },
   "&.Mui-focusVisible, &:hover": {
    backgroundColor: alpha(blue[900], 0.5),
    ".MuiIcon-root, p": {
     color: theme.palette.primary.light,
    },
   },

   ...(isExpanded && {
    gap: 2,
    borderRadius: "50px",
    mx: "16px",
    flexDirection: "row",
    ".MuiIcon-root, p": {
     color: theme.palette.primary.light,
    },
    "&.Mui-selected, &.link-active": {
     backgroundColor: alpha(whiteRGB, 0.2),
     border: "1px solid white",
     transition: "all 1s ease",
     "&.Mui-focusVisible, &:hover": {
      backgroundColor: alpha(whiteRGB, 0.2),
      ".MuiIcon-root, p": {
       color: theme.palette.primary.light,
      },
     },
    },
    "&.Mui-focusVisible, &:hover": {
     backgroundColor: alpha(blue[900], 0.5),
     ".MuiIcon-root, p": {
      color: theme.palette.primary.light,
     },
    },
   }),
  },
  collapseStyle: {
   gap: 2,
   borderRadius: "50px",
   mx: "20px",
   flexDirection: "row",
   ".MuiIcon-root, p": {
    color: theme.palette.primary.light,
   },
   "&.Mui-selected, &.link-active": {
    backgroundColor: alpha(whiteRGB, 0.2),
    border: "1px solid white",
    transition: "all 1s ease",
    "&.Mui-focusVisible, &:hover": {
     backgroundColor: alpha(whiteRGB, 0.2),
     ".MuiIcon-root, p": {
      color: theme.palette.primary.light,
     },
    },
    "&.collapse-active": {
     "&.Mui-focusVisible, &:hover": {
      ".MuiIcon-root, p": {
       color: theme.palette.primary.main,
      },
     },
    },
   },
   "&.Mui-focusVisible, &:hover": {
    backgroundColor: alpha(blue[900], 0.5),
    ".MuiIcon-root, p": {
     color: theme.palette.primary.light,
    },
   },

   ...(!isExpanded && {
    px: "22px",
    gap: "6px",
    borderRadius: 0,
    mx: 0,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    transition: "all 300ms ease",
    ".MuiIcon-root": {
     position: "absolute",
     top: 15,
     right: 10,
     fontSize: 10,
    },
   }),
  },
  collapseActiveStyle: {
   "&.expand-active": {
    backgroundColor: alpha(blue[900], 0.5),
    transition: "all 1s ease",
    "&.Mui-focusVisible, &:hover": {
     backgroundColor: alpha(blue[900], 0.7),
     ".MuiIcon-root": {
      color: theme.palette.primary.light,
     },
     p: {
      color: theme.palette.primary.light,
     },
    },
   },
   "&.Mui-focusVisible, &:hover": {
    backgroundColor: alpha(blue[900], 0.5),
    ".MuiIcon-root": {
     color: theme.palette.primary.light,
    },
    p: {
     color: theme.palette.primary.light,
    },
   },
  },
  collapseSubmenuActiveStyle: {
   px: 0,

   ...(!isExpanded && {
    "&.link-active": {
     backgroundColor: theme.palette.primary.light,
     cursor: "pointer",
     ".MuiIcon-root": {
      color: theme.palette.primary.main,
      transition: "all 1s ease",
     },
     "&.Mui-focusVisible, &:hover": {
      backgroundColor: theme.palette.primary.light,
      ".MuiIcon-root": {
       color: theme.palette.primary.main,
      },
     },
    },
   }),
  },
 };

 const MenuIconText = (
  <>
   <ListItemIcon
    sx={{
     minWidth: 0,
     svg: {
      width: 16,
     },
    }}
   >
    {icon}
   </ListItemIcon>
   {MenuText}
  </>
 );

 const ListButtonText = (
  <>
   {MenuIconText}
   <Icon
    baseClassName="fas"
    className={`fa-chevron-${
     openSubmenu || activeSubmenuCollapse ? "down" : "right"
    }`}
    sx={{
     fontSize: "15px",
     color: isExpanded
      ? theme.palette.primary.main
      : theme.palette.primary.light,
     width: "auto",
     height: "auto",
     transition: "all 1s ease",
    }}
   />
  </>
 );

 return (
  <>
   {hasChild ? (
    <ClickAwayListener onClickAway={clickOutsideCollapse}>
     <Box>
      {isExpanded ? (
       <ListItemButton
        onClick={clickOpenCollapse}
        className={
         openSubmenu ? "expand-active" : menuParentActive ? "link-active" : ""
        }
        sx={[
         styles.baseStyle,
         styles.collapseStyle,
         styles.collapseActiveStyle,
        ]}
       >
        {ListButtonText}
       </ListItemButton>
      ) : (
       <Button
        onClick={clickPopoverCollapse}
        className={
         openSubmenu || activeSubmenuCollapse
          ? "expand-active"
          : menuParentActive
          ? "link-active collapse-active"
          : ""
        }
        sx={[
         styles.baseStyle,
         styles.collapseStyle,
         styles.collapseActiveStyle,
         styles.collapseSubmenuActiveStyle,
        ]}
       >
        {ListButtonText}
       </Button>
      )}
      <Collapse
       in={isExpanded && openSubmenu}
       timeout="auto"
       unmountOnExit
       sx={{ bgcolor: theme.palette.primary.light, py: 1, mt: 1 }}
      >
       <List component="div" disablePadding>
        {children}
       </List>
      </Collapse>
      {!isExpanded && (
       <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopoverCollapse}
        anchorOrigin={{
         vertical: "top",
         horizontal: "right",
        }}
        transformOrigin={{
         vertical: "top",
         horizontal: "left",
        }}
        sx={{
         ".MuiPaper-root": {
          py: 1,
          "& > div": {
           pl: 2,
          },
         },
        }}
       >
        {children}
       </Popover>
      )}
     </Box>
    </ClickAwayListener>
   ) : (
    <Link href={`/${url}`} passHref>
     <ListItemButton
      selected={
       //  typeof window !== "undefined"
       //   ? window.location.pathname === `/${url}`
       //   : false
       pathname == `/${url}`
      }
      className={
       pathname == `/${url}`
        ? "link-active"
        : menuParentActive
        ? "link-active"
        : ""
      }
      sx={[styles.baseStyle]}
     >
      {MenuIconText}
     </ListItemButton>
    </Link>
   )}
  </>
 );
};
