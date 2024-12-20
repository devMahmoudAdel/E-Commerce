import axios from 'axios';
import React, { useState, useEffect } from "react";
import "./TopRated.css";
import { useNavigate } from 'react-router-dom';
const TopRatedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
   useEffect(() => {
        const fetchTopRatedProducts = async () => {
            try {
                const response = await axios.get('/product/getTopRatedProducts'); 
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
                    <div key={product._id} className="top-rated-product-card">
                        <img 
                            src={product.images?.[0]?.secure_url || "default-image.jpg"} 
                            alt={product.Name} 
                        />
                        <h3>{product.Name}</h3>
                        <p>{product.Brand}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <p>Average Rating: {product.avgRating.toFixed(1)} / 5</p>{/*round 2 decimal*/}
                        <button onClick={() => navigate(`/product/get/${product._id}`)}>View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default TopRatedProducts;
