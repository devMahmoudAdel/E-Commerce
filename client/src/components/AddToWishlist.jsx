import axios from "axios";
import Swal from "sweetalert2";
const AddToWishlist = async (product) => {
  console.log(product._id);
  try {
    await axios
      .post(`/user/addToWishList/${product._id}`)
      .then(() => {
        console.log("Product added to wishlist");
        Swal.fire({
          title: `${product.Name} added to wishlist!`,
          icon: "success",
          customClass: {
            confirmButton: "success-button",
          },
        });
      })
      .catch((e) => {
        console.error("Error adding to wishlist:", e);
        Swal.fire({
          title: "Error adding to wishlist",
          icon: "error",
          customClass: {
            confirmButton: "error-button",
          },
        });
      });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};
export default AddToWishlist;
