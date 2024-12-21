import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { AddToCart } from "../AddToCart";

function ProductDetails({ props }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [faildrating, setfaildrating] = useState('');


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://e-commerce-server-peach.vercel.app/product/get/${id}`);
        setProduct(response.data.data);
      } catch (e) {
        console.log(e);
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  const addReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://e-commerce-server-peach.vercel.app/product/setReview/${id}`, {
        rating: rating,
        comment: comment,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const updatedProduct = response.data.data;
      setProduct(updatedProduct);

    } catch (err) {
      console.error("Failed to add review:", err);
      setfaildrating('you already added rating before')
    }
  };

  return (
    <div className="product-detail-container">
      {product === null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="product-detail-layout">
          <div className="image-gallery">
            <div className="thumbnail-list">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image.secure_url}
                  alt={product.Name}
                  className="thumbnail"
                />
              ))}
            </div>
            <div className="main-image">
              <img src={product.images?.[0]?.secure_url} alt={product.Name} />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.Name}</h1>
            <p className="product-reviews">
              <span className="number-star">{product.avgRating}</span>
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span>({product.reviews.length} Reviews)</span>
              <span className="stock-status">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <h2 className="product-price">${product.price}</h2>
            <p className="product-description">{product.description}</p>

            <div className="product-options"></div>

            <div className="purchase-section">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                max={product.invertoryStock}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className="buy-button" disabled={!product.inStock} onClick={AddToCart}>
                {product.inStock ? "Buy Now" : "Out of Stock"}
              </button>
              <button className="wishlist-button">❤</button>
            </div>

            <div className="delivery-info">
              <div className="info-item">
                <span>🚚 Free Delivery</span>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
              <div className="info-item">
                <span>↩️ Return Delivery</span>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

          <div className="review-section">
            <form onSubmit={addReview}>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                minLength="4"
                maxLength="1000"
                required
              />
              <button type="submit" className="buy-button">
                Add Review 
              </button>
              <span className="faildrating">{faildrating}</span>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
