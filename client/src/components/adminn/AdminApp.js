import { Routes, Route } from 'react-router-dom';
import ItemTable from './itemTable';
import CreateItem from './Createitem';
import EditItem from './Edititem';
import './AdminApp.css';

function AdminApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemTable />} />
        <Route path="student/create" element={<CreateItem />} />
        <Route path="student/edit/:studentid" element={<EditItem />} />
      </Routes>
    </div>
  );
}

export default AdminApp;




