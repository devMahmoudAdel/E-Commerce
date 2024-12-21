import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function EditProduct() {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function ff() {
      await axios.get("/product/getAll").then((r) => {
        console.log(r);
        setProducts(r.data.data);
      });
    }
    ff();
  }, []);

  return (
    <div>
      {products.map((product, i) => {
        return (
          <div key={i}>
            <h6>{product.Name}</h6>
            <img
              style={{
                maxHeight: "100px",
              }}
              src={product.images[0].secure_url}
              alt=""
            />
            <Button
              onClick={() => {
                Navigate(`edit/${product._id}`);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                axios.delete(`/product/delete/${product._id}`).then((r) => {
                  console.log(r);
                  setProducts(products.filter((p) => p._id !== product._id));
                });
              }}
            >
              delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default EditProduct;
