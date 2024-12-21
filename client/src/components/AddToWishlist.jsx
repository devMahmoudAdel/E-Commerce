import axios from "axios";
import Swal from "sweetalert2";
const AddToWishlist = async (product) => {
  console.log(product);
  try {
    const response = await axios.post(`/user/addToWishList/${product._id}`, {
      product: product,
    });
    Swal.fire({
      title: `${product.Name} added to wishlist!`,
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