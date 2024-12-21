import "./navigation.css";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const LeftDrawer = () => {  
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const navigate = useNavigate();
  const drawerItems = [
    { text: "Home", link: "/",icon:<HomeIcon /> },
    { text: "Dashboard", link: "/admin",icon:<SpaceDashboardIcon /> },
    { text: "About Us", link: "/about",icon:<InfoIcon /> },
    { text: "Contact", link: "/contact",icon:<ContactPageIcon /> },
  ];

  return (
    <div>
      <IconButton
        className="menu-icon"
        onClick={toggleDrawer(true)}
        edge="start"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div
          style={{
            width: 250,
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "16px" }}>Menu</h3>
          <Divider />
          <List>
            {drawerItems.map((listItem, index) => (
              <ListItem
                button
                key={index}
                className="drawer-list-item"
                onClick={() => {
                  navigate(listItem.link);
                  setOpen(false);
                }}
              >
                <ListItemText
                  className="drawer-list-item-text"
                  primary={listItem.text}
                />
                {listItem.icon}
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;