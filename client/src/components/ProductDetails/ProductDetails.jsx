import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { AddToCart } from "../AddToCart";
function ProductDetails({ props }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios
        .get(`https://e-commerce-server-peach.vercel.app/product/get/${id}`)
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch((e) => {
          console.log(e);
          setProduct(null);
        });
      // if (!response) throw new Error(`Error: ${response}`);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="product-detail-container">
      {product === null ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="image-gallery">
            {product.images.map((image, index) => (
              <img key={index} src={image.secure_url} alt={product.Name} />
            ))}
          </div>
          <div className="main-section">
            <h2 className="product-title">{product.Name}</h2>
            <p className="product-brand">
              Brand: {product.Brand || "no brand"}
            </p>
            <p className="product-price">Price: ${product.price}</p>

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

            <button className="buy-button" disabled={!product.inStock} onClick={AddToCart}>
              {product.inStock ? "Buy Now" : "Out of Stock"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
