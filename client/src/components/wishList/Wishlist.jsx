import axios from "axios";
import { useState ,useEffect} from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import product1Image from "../../assets/productsimages/product1.jpg";
import product2Image from "../../assets/productsimages/product2.jpg";
import product3Image from "../../assets/productsimages/product3.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./index.css";
function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
     const fetchWishlist = async () => {
       try {
         const response = await axios.get("/user/getwishList");
         setWishlist(response.data);
         setLoading(false);
       } catch (error) {
         console.error("Error fetching wishlist:", error);
         setLoading(false);
       }
     };

     fetchWishlist();
   }, []);
    const deleteWishlistItem = async (id) => {
      try {
        await axios.delete(`https://your-api-endpoint.com/wishlist/${id}`);
        setWishlist(wishlist.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting wishlist item:", error);
      }
    };
    const moveAllToCart = async () => {
      try {
      await axios.post("https://your-api-endpoint.com/cart/move-all", {
      items: wishlist,
      });
      setWishlist([]);
      } catch (error) {
        console.error("Error moving items to cart:", error);
      }
    };
  return (
    <Container
      sx={{
        padding: "50px 6px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "26px",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Wishlist {`(${wishlist.length})`}
        </Typography>

        <button className="moveAllButton">Move All To Bag</button>
      </Box>

      <Box
        sx={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "20px",
          padding: "20px 0px",
          "@media(max-width :340px)": {
            gridGap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          },
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {wishlist.map((product) => (
          <Box
            sx={{
              margin: "0 auto",
              maxWidth: "250px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
            key={product.id}
          >
            <Box
              sx={{
                position: "relative",
                height: "270px",
    
                width: "100%",
                overflow: "hidden",
              }}
            >
              <button title="Delete" className="delete-btn">
                <DeleteIcon />
              </button>
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  height: "calc(100% - 41px)",
                  borderRadius: "5px",
                  padding: "2px 2px",
                  display: "flex",
                  justifyContent: "center",
                  background: "#dadada",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    padding: "2px 2px",
                    width: "100%",
                  }}
                  loading="lazy"
                  src={product.images}
                  alt={product.name}
                />
              </div>

              <button title="addToCart" className="add-to-cart">
                <ShoppingCartOutlinedIcon /> Add To Cart
              </button>
            </Box>

            <div className="product-info">
              <Typography
                sx={{
                  fontFamily: "inherit",
                }}
                className="product-name"
              >
                {product.name}
              </Typography>
              <Typography className="price">${product.price}</Typography>
            </div>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Wishlist;
