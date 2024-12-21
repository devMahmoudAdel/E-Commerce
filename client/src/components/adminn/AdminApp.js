import { Routes, Route } from "react-router-dom";
import EditItem from "./Edititem";
import "./AdminApp.css";
import DashboardLayoutBasic from "./../DrawerPage/Drawer";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error404 from "../Error404/Error404";
import MenuIcon from "@mui/icons-material/Menu";
import CreateProduct from "../AdminComponents/CreateProduct";
import EditProduct from "../AdminComponents/EditProduct";
import EditProducttt from "../AdminComponents/EditProducttt";
function AdminApp({ setToken }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = [
    { title: "GetUserWithID", navigate: "GetUserWithID" }, //3
    // { title: "ChangeUserToAdmin", navigate: "ChangeUserToAdmin" },
    // { title: "ChangeAdminToUser", navigate: "ChangeAdminToUser" },
    { title: "AddMoneyToWallet", navigate: "AddMoneyToWallet" }, //2
    // { title: "GetAllAdressForUser", navigate: "GetAllAdressForUser" },
    // { title: "GetAllAdress", navigate: "GetAllAdress" },
    { title: "GetAllAdmins", navigate: "GetAllAdmins" }, //3

    ///begin
    { title: "Edituser", navigate: "Edituser" },
    { title: "DeleteUser", navigate: "DeleteUser" }, //2
    { title: "ReActiveUser", navigate: "ReActiveUser" }, //2
    { title: "CreateProduct", navigate: "CreateProduct" }, //1
    { title: "EditAndDeleteProduct", navigate: "EditAndDeleteProduct" }, //1
    ////begin

    { title: "ChangeStatusOrder", navigate: "ChangeStatusOrder" }, //2
    {
      title: "ChangeDeliveryNumberOrder",
      navigate: "ChangeDeliveryNumberOrder",
    }, //3
    { title: "GetAllOredrsForAdmin", navigate: "GetAllOredrsForAdmin" }, //2
    // { title: "CreateAds", navigate: "CreateAds" },
    // { title: "EditAd", navigate: "EditAd" },
    // { title: "ChangeActivationAD", navigate: "ChangeActivationAD" },
    // { title: "CreateAbout", navigate: "CreateAbout" },
    // { title: "EditAbout", navigate: "EditAbout" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {list.map((text, index) => (
          <ListItem
            onClick={() => {
              navigate(`${text.navigate}`);
            }}
            key={text.title}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        "@media(max-width:750px)": {},
        backgroundColor: "#f3f3f3",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
        flexDirection: "row",
        gap: "20px",
      }}
      className="AdminnnnContaimner"
    >
      <Box
        sx={{
          "@media(max-width:750px)": {
            width: "100%",
            height: "60px",
          },
          width: "30%",
          position: "relative",
          height: "100%",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "0px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            padding: "8px 8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
          menu Items
        </button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          "@media(max-width:750px)": {
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<>choose one of the drawer to show</>} />
          {/* {list.map((item) => {
            return (
              <Route
                key={item.title}
                path={`${item.navigate}`}
                element={<EditItem />}
              />
            );
          })} */}

          <Route path="CreateProduct" element={<CreateProduct />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
          {/* <Route path="EditProduct" element={<EditProductWithNoID />} /> */}
          <Route path="EditAndDeleteProduct/" element={<EditProduct />} />
          <Route
            path="EditAndDeleteProduct/edit/:id"
            element={<EditProducttt />}
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminApp;
