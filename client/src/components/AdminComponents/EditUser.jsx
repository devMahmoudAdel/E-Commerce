import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = React.useState([]);
  useEffect(() => {
    async function ff() {
      await axios
        .get("/user/getAllUser")
        .then((r) => {
          console.log(r);
          setAllUsers(r.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    ff();
  }, []);

  return (
    <div>
      {allUsers ? (
        <>
          {allUsers.map((user, i) => {
            return (
              <div key={user._id}>
                <h2>
                  {i + 1}. {user.firstName} {user.lastName}
                </h2>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  email: {user.email}
                </p>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  admin : {`${user.isAdmin}`}
                </p>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  active : {`${user.isActive}`}
                </p>

                <Button
                  sx={{
                    display: "block",
                    margin: "3px auto",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate(`edit/${user._id}`);
                  }}
                >
                  Edit User
                </Button>

                <Button
                  sx={{
                    display: "block",
                    margin: "8px auto",
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    navigate(`addMoney/${user._id}`);
                  }}
                >
                  Add Money To User
                </Button>

                <Button
                  color="error"
                  onClick={() => {
                    axios
                      .patch(`/user/delete/${user._id}`)
                      .then((r) => {
                        console.log(r);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  sx={{
                    display: "block",
                    margin: "3px auto",
                  }}
                >
                  Deactivate User
                </Button>
                <hr />
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditUser;
