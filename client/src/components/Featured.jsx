import React from 'react';
import './Featured.css';
import { LucideReact, Truck, Headphones, Shield } from 'lucide-react'; // Import icons from lucide-react

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


const services = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: <Truck className="service-icon" />
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: <Headphones className="service-icon" />
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: <Shield className="service-icon" />
  }
];

function Featured() {

  return (

    
    <div className="featured-container">
      <div className="products-container">
        <div className="products-header">
          <span className="products-label">Our Products</span>
          <h1 className="products-title">Explore Our Products</h1>
        </div>
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
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;


