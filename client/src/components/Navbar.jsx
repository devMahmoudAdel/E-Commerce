import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import WishListIcon from "../assets/Images/Wishlist.png";
import CartIcon from "../assets/Images/Cart1.png";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from "../assets/Images/search.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [products, setProducts] = useState([]); // Store the full product data (name and image)
  const navigate = useNavigate();

  // Fetch product data from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await axios.get('/product/getAll');
        const productData = response.data.data.map((product) => ({
          name: product.Name,
          image: product.images[0].secure_url,
          id: product._id
          // Adjust the key based on your backend response
        }));
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle navigation to the Order page
  const goToProductPage = (id) => {
    navigate(`/productDetails/:${id}`);
  };

  return (
    <div className="navbar">
      <h1>Exclusive</h1>
      <div className="links-desktop">
        <ul className="links-desktop">
          <li><Link to="/">Home</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
        </ul>
      </div>

      <div className="search">
        <Autocomplete
          options={products}
          onChange={
            (e, v) => {
              if (v == null || v == undefined) {
                return
              } else {
                console.log(v)
                goToProductPage(v.id)
              }

            }
          }
          getOptionLabel={(option) => option.name} // Use the product name as the label
          renderOption={(props, option) => (
            <li {...props} key={option.name} className="autocomplete-option">
              <img
                src={option.image} // Display the product image
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                }}
              />
              {option.name}
            </li>
          )}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none !imporant', // Remove the inner border
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important', // Remove the hover border
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none !important', // Remove the border when focused
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none !important"
            },
            width: 300
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "&.MuiOutlinedInput-notchedOutline": {
                  border: "none !important"
                },
              }}
              {...params}
              placeholder="Search for products"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <img src={SearchIcon} alt="search" style={{ marginRight: '8px' }} />
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </div>

      <div className="icons">
        <div><img src={WishListIcon} alt="Wishlist" /></div>
        <div><img src={CartIcon} alt="Cart" /></div>
      </div>

      {/* Add Order Button */}
      {/* <div className="order-button">
        <button onClick={goToProductPage} className="order-btn">
          Order
        </button>
      </div> */}

      <div className="links">
        <span className="icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
