import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react'; // Import icons from lucide-react
import './Products.css'; // Import the new CSS file

import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      rating: 3.5,
      reviews: 35,
      image: product1Image,
      isNew: false
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },{
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      rating: 3.5,
      reviews: 35,
      image: product1Image,
      isNew: false
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },{
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      rating: 3.5,
      reviews: 35,
      image: product1Image,
      isNew: false
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },{
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      rating: 3.5,
      reviews: 35,
      image: product1Image,
      isNew: false
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      image: product2Image,
      isNew: false
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: product3Image,
      isNew: false
    },
    {
      id: 4,
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      image: product1Image,
      isNew: true
    },
    // Add more products as needed
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <span className="products-label">Our Products</span>
        <h1 className="products-title">Explore Our Products</h1>
      </div>

      <div className="products-grid">
        {products.slice(0, showAll ? products.length : 10).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              {product.isNew && <span className="new-badge">NEW</span>}
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-overlay">
                <button className="icon-button heart-button">
                  <Heart size={20} />
                </button>
                <button className="icon-button eye-button">
                  <Eye size={20} />
                </button>
              </div>
              <button className="add-to-cart-button">Add To Cart</button>
            </div>

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-meta">
                <span className="product-price">${product.price}</span>
                <div className="product-rating">
                  {renderStars(product.rating)}
                  <span className="review-count">({product.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="view-all-container">
          <button className="view-all-button" onClick={handleViewAll}>
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;


