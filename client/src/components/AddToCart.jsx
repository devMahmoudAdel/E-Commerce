import axios from "axios";
export const AddToCart = async (product) => {
  try {
    await axios.post(`/user/addToCart/${product.id}`, {
      item: product,
    });
    console.log(`Added ${product.name} to the cart!`);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
