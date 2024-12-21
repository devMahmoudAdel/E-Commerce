import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
function EditProducttt() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    picture: "",
    Name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    invertoryStock: "",
    Brand: "",
  });

  useEffect(() => {
    axios
      .get(`/product/get/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`/product/edit/${id}`, {
        price: product.price,
        picture: product.picture,
        category: product.category,
        invertoryStock: product.invertoryStock,
        Brand: product.Brand,
        Name: product.Name,
      })
      .then((res) => setProduct(res.data.data));
  };

  if (id) {
    axios.patch(`/product/Edit/${id}`);
  }
  return (
    <div>
      <h1>Edit Product</h1>

      {/* form for editing product */}
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          value={product.Name}
          onChange={(v) => {
            setProduct({ ...product, Name: v.target.value });
          }}
          type="text"
          name="Name"
        />
        <label>Product Price:</label>
        <input
          value={product.price}
          onChange={(v) => {
            setProduct({ ...product, price: v.target.value });
          }}
          type="number"
          name="price"
        />

        <label>Product Image:</label>
        <input
          onChange={(v) => {
            setProduct({ ...product, picture: v.target.files[0] });
          }}
          type="file"
          name="picture"
        />
        <label>Product Category:</label>
        <select
          onChange={(v) => {
            setProduct({ ...product, category: v.target.value });
          }}
          name="category"
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
            setProduct({ ...product, invertoryStock: v.target.value });
          }}
          type="number"
          name="invertoryStock"
          value={product.invertoryStock}
        />
        <label>Product Brand:</label>
        <input
          value={product.Brand}
          onChange={(v) => {
            setProduct({ ...product, Brand: v.target.value });
          }}
          type="text"
          name="Brand"
        />
        <Button type="submit">Update product</Button>
      </form>

      {/* input fields for product name, price, description, image */}
      {/* submit button */}
    </div>
  );
}

export default EditProducttt;
