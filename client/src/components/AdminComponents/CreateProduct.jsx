import { Button } from "@mui/material";
import React from "react";

function CreateProduct() {
  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={() => {}}>
        <label>Product Name:</label>
        <input type="text" name="productName" required />
        <label>Product Price:</label>
        <input type="number" name="productPrice" required />
        <label>Product Image:</label>
        <input type="file" name="productImage" required />
        <label>Product Category:</label>
        <select name="productCategory" required>
          <option value="">Select Category</option>
          <option value="laptop">laptop</option>
          <option value="headPhones">headPhones</option>
          <option value="mouses">mouses</option>
          <option value="keyboards">keyboards</option>
          <option value="accessories">accessories</option>
          <option value="electronics">electronics</option>
        </select>
        <label>Product Quantity:</label>
        <input type="number" name="productQuantity" required />
        <label>Product Brand:</label>
        <input type="text" name="productBrand" required />
        {/* Form Submit Button */}
        <Button type="submit">Create Product</Button>
        <Button type="reset">Reset Form</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
