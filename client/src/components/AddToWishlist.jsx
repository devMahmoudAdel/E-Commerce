import axios from "axios";
import Swal from "sweetalert2";
const AddToWishlist = async (product) => {
  try {
    const response = await axios.post(`/user/addToWishList/${product.id}`, {
      product: product,
    });
    Swal.fire({
      title: `${product.name} added to wishlist!`,
      icon: "success",
      customClass: {
        confirmButton: "success-button",
      },
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};
export default AddToWishlist;