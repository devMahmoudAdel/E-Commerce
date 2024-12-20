import React, { useState } from 'react';
import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';

const StarIcon = () => <span>★</span>;

function Products() {
  const [visibleProducts, setVisibleProducts] = useState(6);
  
  const productsData = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      discountedPrice: 24.99,
      description: "Description for product 1",
      image: product1Image,
      rating: 4,
      reviews: 123
    },
    // ...copy the structure for other products, using your existing IDs and images
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    discountedPrice: 34.99,
    description: "Description for product 2",
    image: product2Image,
    rating: 5,
    reviews: 98
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    discountedPrice: 44.99,
    description: "Description for product 3",
    image: product3Image,
    rating: 3,
    reviews: 76
  },
  {
    id: 4,
    name: "Product 4",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Description for product 4",
    image: product1Image,
    rating: 4,
    reviews: 123
  },
  {
    id: 5,
    name: "Product 5",
    price: 39.99,
    discountedPrice: 34.99,
    description: "Description for product 5",
    image: product2Image,
    rating: 5,
    reviews: 98
  },
  {
    id: 6,
    name: "Product 6",
    price: 49.99,
    discountedPrice: 44.99,
    description: "Description for product 6",
    image: product3Image,
    rating: 3,
    reviews: 76
  },
  {
    id: 7,
    name: "Product 7",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Description for product 7",
    image: product1Image,
    rating: 4,
    reviews: 123
  },
  {
    id: 8,
    name: "Product 8",
    price: 39.99,
    discountedPrice: 34.99,
    description: "Description for product 8",
    image: product2Image,
    rating: 5,
    reviews: 98
  },
  {
    id: 9,
    name: "Product 9",
    price: 49.99,
    discountedPrice: 44.99,
    description: "Description for product 9",
    image: product3Image,
    rating: 3,
    reviews: 76
  },
  {
    id: 10,
    name: "Product 10",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Description for product 10",
    image: product1Image,
    rating: 4,
    reviews: 123
  },
  {
    id: 11,
    name: "Product 11",
    price: 39.99,
    discountedPrice: 34.99,
    description: "Description for product 11",
    image: product2Image,
    rating: 5,
    reviews: 98
  },
  {
    id: 12,
    name: "Product 12",
    price: 49.99,
    discountedPrice: 44.99,
    description: "Description for product 12",
    image: product3Image,
    rating: 3,
    reviews: 76
  },
  {
    id: 13,
    name: "Product 13",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Description for product 13",
    image: product1Image,
    rating: 4,
    reviews: 123
  },
  {
    id: 14,
    name: "Product 14",
    price: 39.99,
    discountedPrice: 34.99,
    description: "Description for product 14",
    image: product2Image,
    rating: 5,
    reviews: 98
  },
  {
    id: 15,
    name: "Product 15",
    price: 49.99,
    discountedPrice: 44.99,
    description: "Description for product 15",
    image: product3Image,
    rating: 3,
    reviews: 76
  },
  {
    id: 16,
    name: "Product 16",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Description for product 16",
    image: product1Image,
    rating: 4,
    reviews: 123
  }
  ];

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 3, productsData.length));
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '2.5em',
      color: '#333',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    productsWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px'
    },
    card: {
      position: 'relative',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      marginBottom: '15px'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    addToCartButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    priceContainer: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    },
    price: {
      color: '#333',
      fontSize: '1.1em',
      fontWeight: 'bold'
    },
    discountedPrice: {
      color: 'red',
      fontSize: '1.1em',
      fontWeight: 'bold'
    },
    originalPrice: {
      textDecoration: 'line-through',
      color: '#999',
      fontSize: '0.9em'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginTop: '10px'
    },
    loadMoreButton: {
      display: 'block',
      margin: '20px auto',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Products</h1>
      <div style={styles.productsWrapper}>
        {productsData.slice(0, visibleProducts).map(product => (
          <div key={product.id} style={styles.card}
               onMouseOver={e => {
                 e.currentTarget.querySelector('.addToCart').style.opacity = '1';
               }}
               onMouseOut={e => {
                 e.currentTarget.querySelector('.addToCart').style.opacity = '0';
               }}>
            <div style={styles.imageContainer}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <button className="addToCart" style={styles.addToCartButton}>
                Add to Cart
              </button>
            </div>
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.description}>{product.description}</p>
            <div style={styles.priceContainer}>
              <span style={styles.discountedPrice}>${product.discountedPrice}</span>
              <span style={styles.originalPrice}>${product.price}</span>
            </div>
            <div style={styles.ratingContainer}>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} style={{
                  color: index < product.rating ? '#ffd700' : '#ddd'
                }} />
              ))}
              <span>({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < productsData.length && (
        <button onClick={loadMore} style={styles.loadMoreButton}>
          Load More Products
        </button>
      )}
    </div>
  );
}

export default Products;




