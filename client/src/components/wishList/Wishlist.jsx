import { Box, Button, Container, Typography } from "@mui/material";
import product1Image from "../../assets/productsimages/product1.jpg";
import product2Image from "../../assets/productsimages/product2.jpg";
import product3Image from "../../assets/productsimages/product3.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./index.css";
const wishlist = [
  {
    id: 1,
    name: "Product 1",
    brand: "Brand 1",
    Categories: ["Category1", "Category2 ", "Category3 "],
    description: "Product 1 description",
    price: 100,
    images: product1Image,
    varaity1: "Varaity1 ",
    varaity2: "Varaity2 ",
    varaity3: "Varaity3 ",
    countInInverntory: 20,
    isInStock: true,
    orderedManyTimes: 10,
  },

  {
    id: 2,
    name: "Product 2",
    brand: "Brand 2",
    Categories: ["Category1", "Category2 ", "Category3 "],
    description: "Product 2 description",
    price: 200,
    images: product2Image,
    varaity1: "Varaity1 ",
    varaity2: "Varaity2 ",
    varaity3: "Varaity3 ",
    countInInverntory: 15,
    isInStock: true,
    orderedManyTimes: 5,
  },

  {
    id: 3,
    name: "Product 3",
    brand: "Brand 3",
    Categories: ["Category1", "Category2 ", "Category3 "],
    description: "Product 3 description",
    price: 210,
    images: product3Image,
    varaity1: "Varaity1 ",
    varaity2: "Varaity2 ",
    varaity3: "Varaity3 ",
    countInInverntory: 15,
    isInStock: true,
    orderedManyTimes: 5,
  },

  {
    id: 4,
    name: "Product 3",
    brand: "Brand 3",
    Categories: ["Category1", "Category2 ", "Category3 "],
    description: "Product 3 description",
    price: 210,
    images: product3Image,
    varaity1: "Varaity1 ",
    varaity2: "Varaity2 ",
    varaity3: "Varaity3 ",
    countInInverntory: 15,
    isInStock: true,
    orderedManyTimes: 5,
  },
  {
    id: 5,
    name: "Product 3",
    brand: "Brand 3",
    Categories: ["Category1", "Category2 ", "Category3 "],
    description: "Product 3 description",
    price: 210,
    images: product3Image,
    varaity1: "Varaity1 ",
    varaity2: "Varaity2 ",
    varaity3: "Varaity3 ",
    countInInverntory: 15,
    isInStock: true,
    orderedManyTimes: 5,
  },
];
function Wishlist() {
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
