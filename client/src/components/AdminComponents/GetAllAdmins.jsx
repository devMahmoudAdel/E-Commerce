import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
function GetAllAdmins() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function ff() {
      await axios
        .get("/user/getAllAdmins")
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

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default GetAllAdmins;
