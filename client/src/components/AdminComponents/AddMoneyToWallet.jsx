import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AddMoneyToWallet() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [ref, setref] = useState(false);
  useEffect(() => {
    async function ff() {
      await axios
        .get(`/user/get/${id}`)
        .then((r) => {
          console.log(r);
          setUser(r.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    ff();
  }, [ref]);
  return (
    <div>
      {user && (
        <div>
          <h2>Add money to {user.firstName}'s wallet</h2>
          <p>Current balance: {user.walletbalance}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .patch(`/user/AddMoneyToWallet/${id}`, {
                  amount: e.target.amount.value,
                })
                .then((r) => {
                  setref(!ref);
                  e.target.amount.value = "";
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <input type="number" name="amount" placeholder="Enter amount" />
            <Button variant="contained" type="submit">
              Add money
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddMoneyToWallet;
