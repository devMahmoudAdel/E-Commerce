import React from 'react';
import './Featured.css';

import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';

// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "Description for product 1",
    image: product1Image
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    description: "Description for product 2",
    image: product2Image
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    description: "Description for product 3,3",
    image: product3Image
  }
];

function Featured() {
  return (
    <div className="featured-container">
      <h1 className="featured-header">Featured Products</h1>
      <div className="products-wrapper">
        <div className="left-column">
            <div key={featuredProducts[0].id} className="card big-card">
              <div className="details">
                <h2 className="name">{featuredProducts[0].name}</h2>
                <p className="description">{featuredProducts[0].description}</p>
                <p className="price">Price: ${featuredProducts[0].price}</p>
              </div>
              <img src={featuredProducts[0].image} alt={featuredProducts[0].name} className="image" />
            </div>
        </div>
        <div className="right-column">
          {featuredProducts.slice(1).map(product => (
            <div key={product.id} className="card small-card">
              <div className="details">
                <h2 className="name">{product.name}</h2>
                <p className="description">{product.description}</p>
                <p className="price">Price: ${product.price}</p>
              </div>
              <img src={product.image} alt={product.name} className="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;