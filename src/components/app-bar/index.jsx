"use client";

import { Menu } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useAppContext } from "@/context/app";
import { COLORS } from "@/constants/system";

const drawerWidth = "15vw";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "drawerOpen",
})(({ theme, drawerOpen }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(drawerOpen && {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarComponent = () => {
  const { drawerOpen, toggleDrawer } = useAppContext();

  return (
    <AppBar
      position="fixed"
      drawerOpen={drawerOpen}
      sx={{ bgcolor: COLORS.BACKGROUND }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2, ...(drawerOpen && { display: "none" }) }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
