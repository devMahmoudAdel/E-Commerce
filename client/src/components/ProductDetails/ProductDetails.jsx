import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(()=>{
  const fetchProduct = async () => {
    try{
    const response = await fetch(`/products/get/${id}`); 
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);// the message that noor make in product controller "product not found"
    const data = await response.json();
    setProduct(data.data);
    }
    catch(err){
        console.log("error fetching:",err);
    }
  };
  fetchProduct();
},[id]);

return(
 <div className="product-detail-container">
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image.secure_url}
            alt={image.originalName}
            className="image-thumbnail"
          />
        ))}
      </div>
      <div className="main-section">
        <h2 className="product-title">{product.Name}</h2>
        <p className="product-brand">Brand: {product.Brand || "no brand"}</p>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.discription}</p>

        <div className="variations">
          {product.varaity1 && <span>Variety: {product.varaity1}</span>}
        </div>

        <div className="quantity">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={product.invertoryStock}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button className="buy-button" disabled={!product.inStock}>
          {product.inStock ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
