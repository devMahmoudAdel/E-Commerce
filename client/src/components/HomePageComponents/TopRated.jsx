import axios from 'axios';
import React, { useState, useEffect } from "react";
import "./TopRated.css";
import { useNavigate } from 'react-router-dom';
import Product from '../Product';
const TopRatedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
   useEffect(() => {
        const fetchTopRatedProducts = async () => {
            try {
                const response = await axios.get('https://e-commerce-server-peach.vercel.app/product/getTopRatedProducts'); 
                setProducts(response.data.data);
            } catch (err) {
                setError(err.message || "Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchTopRatedProducts();
    }, []);
    if (loading) return <p>Loading top-rated products...</p>;
    if (error) return <p>Error: {error}</p>;
        return (
        <section className="top-rated-products">
            <h2>Top Rated Products</h2>
            <div className="top-rated-product-grid">
                {products.map((product) => (
                    <Product key={product._id} product={product}/>
                ))}
            </div>
        </section>
    );
}
export default TopRatedProducts;
