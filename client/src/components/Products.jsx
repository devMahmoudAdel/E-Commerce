import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';
import './Products.css';

import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      rating: 4,
      reviews: 10,
      isNew: true,
      image: product1Image,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      rating: 5,
      reviews: 8,
      isNew: false,
      image: product2Image,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      rating: 3,
      reviews: 15,
      isNew: false,
      image: product3Image,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      rating: 4,
      reviews: 12,
      isNew: true,
      image: product1Image,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      rating: 5,
      reviews: 20,
      isNew: false,
      image: product2Image,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 24.99,
      rating: 2,
      reviews: 5,
      isNew: false,
      image: product3Image,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 34.99,
      rating: 4,
      reviews: 7,
      isNew: true,
      image: product1Image,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 44.99,
      rating: 3,
      reviews: 9,
      isNew: false,
      image: product2Image,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 54.99,
      rating: 5,
      reviews: 11,
      isNew: false,
      image: product3Image,
    },
    {
      id: 10,
      name: 'Product 10',
      price: 64.99,
      rating: 4,
      reviews: 13,
      isNew: true,
      image: product1Image,
    },
    {
      id: 11,
      name: 'Product 11',
      price: 74.99,
      rating: 5,
      reviews: 14,
      isNew: false,
      image: product2Image,
    },
    {
      id: 12,
      name: 'Product 12',
      price: 84.99,
      rating: 3,
      reviews: 16,
      isNew: false,
      image: product3Image,
    },
    {
      id: 13,
      name: 'Product 13',
      price: 94.99,
      rating: 4,
      reviews: 18,
      isNew: true,
      image: product1Image,
    },
    {
      id: 14,
      name: 'Product 14',
      price: 104.99,
      rating: 5,
      reviews: 19,
      isNew: false,
      image: product2Image,
    },
    {
      id: 15,
      name: 'Product 15',
      price: 114.99,
      rating: 2,
      reviews: 21,
      isNew: false,
      image: product3Image,
    },
    {
      id: 16,
      name: 'Product 16',
      price: 124.99,
      rating: 4,
      reviews: 22,
      isNew: true,
      image: product1Image,
    },
    {
      id: 17,
      name: 'Product 17',
      price: 134.99,
      rating: 3,
      reviews: 23,
      isNew: false,
      image: product2Image,
    },
    {
      id: 18,
      name: 'Product 18',
      price: 144.99,
      rating: 5,
      reviews: 24,
      isNew: false,
      image: product3Image,
    },
    {
      id: 19,
      name: 'Product 19',
      price: 154.99,
      rating: 4,
      reviews: 25,
      isNew: true,
      image: product1Image,
    },
    {
      id: 20,
      name: 'Product 20',
      price: 164.99,
      rating: 5,
      reviews: 26,
      isNew: false,
      image: product2Image,
    },
    {
      id: 21,
      name: 'Product 21',
      price: 174.99,
      rating: 3,
      reviews: 27,
      isNew: false,
      image: product3Image,
    },
    {
      id: 22,
      name: 'Product 22',
      price: 184.99,
      rating: 4,
      reviews: 28,
      isNew: true,
      image: product1Image,
    },
    {
      id: 23,
      name: 'Product 23',
      price: 194.99,
      rating: 5,
      reviews: 29,
      isNew: false,
      image: product2Image,
    },
    {
      id: 24,
      name: 'Product 24',
      price: 204.99,
      rating: 2,
      reviews: 30,
      isNew: false,
      image: product3Image,
    },
    {
      id: 25,
      name: 'Product 25',
      price: 214.99,
      rating: 4,
      reviews: 31,
      isNew: true,
      image: product1Image,
    }
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