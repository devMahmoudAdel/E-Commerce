import React from 'react';

import product1Image from '../assets/productsimages/product1.jpg';
import product2Image from '../assets/productsimages/product2.jpg';
import product3Image from '../assets/productsimages/product3.jpg';

// JSON data
const productsData = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 29.99,
    "description": "Description for product 1",
    // "image": "https://via.placeholder.com/150"
    "image": product1Image
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 49.99,
    "description": "Description for product 2",
    "image": product2Image
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 19.99,
    "description": "Description for product 3",
    "image": product3Image
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 39.99,
    "description": "Description for product 4",
    "image": product2Image  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 59.99,
    "description": "Description for product 5",
    "image": product3Image
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 24.99,
    "description": "Description for product 6",
    "image": product1Image
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 24.99,
    "description": "Description for product 6",
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 24.99,
    "description": "Description for product 6",
    "image": product3Image
  },
  {
    "id": 9,
    "name": "Product 8",
    "price": 24.99,
    "description": "Description for product 6",
    "image": product3Image
  },
  {
    "id": 10,
    "name": "Product 8",
    "price": 24.99,
    "description": "Description for product 6",
    "image": product3Image
  }
];

// React component
function Products() {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
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
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      transition: '0.3s',
      textAlign: 'center',
      backgroundColor: '#fff',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '150px',
      borderRadius: '5px',
      objectFit: 'cover'
    },
    name: {
      fontSize: '1.5em',
      margin: '10px 0',
      color: '#333'
    },
    description: {
      fontSize: '1em',
      color: '#777',
      marginBottom: '10px'
    },
    price: {
      fontWeight: 'bold',
      color: "#333",
      fontSize: '1.1em'
    }

    
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Products</h1>
      <div style={styles.productsWrapper}>
        {productsData.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h2 style={styles.name}>{product.name}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;