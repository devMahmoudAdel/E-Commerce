import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function EditUserrrr() {
  const [userData, setUserData] = React.useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function ff() {
      await axios
        .get(`/user/get/${id}`)
        .then((r) => {
          console.log(r);
          setUserData(r.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    ff();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`/user/edit/${userData._id}`, userData).then(() => {
      console.log("updated");
    });
  };
  return (
    <div>
      <h1>Edit User</h1>
      {userData && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">firstName</label>
          <input
            onChange={(e) => {
              setUserData({ ...userData, firstName: e.target.value });
            }}
            id="firstName"
            type="text"
            value={userData.firstName}
          />
          <label htmlFor="firstName">lastName</label>
          <input
            onChange={(e) => {
              setUserData({ ...userData, lastName: e.target.value });
            }}
            id="lastName"
            type="text"
            value={userData.lastName}
          />
          <label htmlFor="Email">Email</label>
          <input disabled id="Email" type="text" value={userData.email} />
          <Button variant="contained" type="submit" value="Update">
            Update User
          </Button>
        </form>
      )}
    </div>
  );
}

export default EditUserrrr;
