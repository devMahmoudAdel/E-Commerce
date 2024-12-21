import React, { useEffect, useState } from 'react';
import { Heart, Eye } from 'lucide-react'; 
import './Products.css'; 
import axios from 'axios';
import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';
import ProductDetails from './ProductDetails/ProductDetails';
import { AddToCart } from './AddToCart';
import AddToWishlist from './AddToWishlist';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    useEffect(() => {
      const fetchProducts = async () => {
        try {
         const response = await axios.get("/product/getAll"); // Replace with your API endpoint
          setProducts(response.data);
        } catch (err) {
          setError("Failed to fetch products.");
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

  
  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <span className="products-label">Our Products</span>
        <h1 className="products-title">Explore Our Products</h1>
      </div>

      {products && (
        <div className="products-grid">
          {products && products.length > 0 &&products.slice(0, showAll ? products.length : 10).map((product) => (
          <></>  
          ))}
        </div>
      )}

      {!showAll && products && products.length > 10 && (
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