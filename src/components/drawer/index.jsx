"use client";

import { COLORS } from "@/constants/system";
import { drawerRoutes } from "@/constants/ui/drawer";
import { useAppContext } from "@/context/app";
import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useRouter as useNavigationRouter } from "next/navigation";
import Logo from "../../../public/images/logo.png";

const DrawerComponent = () => {
  const navigationRouter = useNavigationRouter();
  const theme = useTheme();
  const { drawerOpen, toggleDrawer, mounted } = useAppContext();

  const handleNavigation = (to) => {
    navigationRouter.replace(to);
  };

  return (
    mounted && (
      <Drawer
        sx={{
          width: drawerOpen ? "15vw" : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "75vw", sm: "30vw", lg: "15vw" },
            bgcolor: COLORS.BACKGROUND,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Image src={Logo} alt="Intra Nav Logo" />

        <Box sx={{ position: "absolute", width: "100%", textAlign: "right" }}>
          <Tooltip title="Close drawer" placement="bottom">
            <IconButton sx={{ color: "white", m: 1 }} onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider />

        <List sx={{}}>
          {(drawerRoutes ?? []).map((r, index) =>
            Object.keys(r).length ? (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleNavigation(r?.path)}>
                  {r?.icon}
                  <ListItemText sx={{ pl: 1 }} primary={r.title} />
                </ListItemButton>
              </ListItem>
            ) : null
          )}
        </List>
      </Drawer>
    )
  );
};

export default DrawerComponent;
