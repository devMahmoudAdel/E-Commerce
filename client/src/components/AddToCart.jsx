import axios from "axios";
export const AddToCart = async (product) => {
  try {
    await axios.post(`/user/addToCart/${product._id}`).then((r) => {
      console.log(r.data.data);
      console.log(`Added ${product.Name} to the cart!`);
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
