import { Routes, Route } from "react-router-dom";
import ItemTable from "./itemTable";
import CreateItem from "./Createitem";
import EditItem from "./Edititem";
import "./AdminApp.css";

function AdminApp() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<ItemTable />} />
        <Route path="item/create" element={<CreateItem />} />
        <Route path="item/edit/:itemid" element={<EditItem />} /> */}
      </Routes>
    </div>
  );
}

export default AdminApp;
