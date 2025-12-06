import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Login", path: "/login" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleAbrirMenu = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar
        className="navbarContainer"
        sx={{
          background: "black",
        }}
      >
        <Toolbar className="navbarToolbar">
          <Typography className="logo">DRIVER AUTÔNOMO</Typography>
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleAbrirMenu(true)}
          >
            <MenuIcon className="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleAbrirMenu(false)}
        ModalProps={{
          BackdropProps: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(1px)",
            },
          },
        }}
      >
        <Box
          sx={{ width: "35vh", height: "100%", backgroundColor: "#121212" }}
          role="presentation"
          onClick={toggleAbrirMenu(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem className="nav-links" key={item.label} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
