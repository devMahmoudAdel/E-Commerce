import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import './CreateProduct.css'
function CreateProduct() {
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setpicture] = useState("");
  const [category, setCategory] = useState("");
  const [invertoryStock, setInvertoryStock] = useState("");
  const [Brand, setBrand] = useState("");

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("price", price);
    formdata.append("picture", picture);
    formdata.append("categories", category);
    formdata.append("invertoryStock", invertoryStock);
    formdata.append("brand", Brand);

    e.preventDefault();
    console.log(formdata);
    axios
      .post("/product/createProduct", formdata)
      .then((v) => {
        console.log(v.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1 className="state">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          onChange={(v) => {
            setname(v.target.value);
          }}
          type="text"
          name="Name"
          required
        />
        <label>Product Price:</label>
        <input
          onChange={(v) => {
            setPrice(v.target.value);
          }}
          type="number"
          name="price"
          required
        />

        <label>Product Image:</label>
        <input
          onChange={(v) => {
            setpicture(v.target.files[0]);
          }}
          type="file"
          name="picture"
          required
        />
        <label>Product Category:</label>
        <select
          onChange={(v) => {
            setCategory(v.target.value);
          }}
          name="category"
          required
        >
          <option value="">Select Category</option>
          <option value="laptop">Laptop</option>
          <option value="headPhones">HeadPhones</option>
          <option value="mouses">Mouses</option>
          <option value="keyboards">Keyboards</option>
          <option value="accessories">Accessories</option>
          <option value="electronics">Electronics</option>
        </select>
        <label>invertoryStock:</label>
        <input
          onChange={(v) => {
            setInvertoryStock(v.target.value);
          }}
          type="number"
          name="invertoryStock"
          required
        />
        <label>Product Brand:</label>
        <input
          onChange={(v) => {
            setBrand(v.target.value);
          }}
          type="text"
          name="Brand"
          required
        />
        <Button type="submit">Create Product</Button>
        <Button type="reset">Reset Form</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
