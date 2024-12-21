import { useState , useEffect} from "react";
import {Link} from "react-router-dom";
import { faTrashCan, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import UrlPath from "./UrlPath";
import axios from "axios";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get("/user/getCart");
        setCartItems(response.data);

        const calculatedTotal = response.data.reduce(
           (sum, item) => sum + item.price * item.quantity,
        );
          setTotal(calculatedTotal);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }

    fetchCartItems();
    }, []);
//Delete products
const deleteProduct = async (productId) => {
  try {
    await axios.delete(`/user/deleteFromCart/${productId}`);
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);

    // Recalculate total
    // calculatedTotal = updatedCart.reduce(
    //   ((sum, item) => sum + item.price * item.quantity, 0)
    // );
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

  return (
    <div className="cart-container">
      <UrlPath prev="Home" current="Cart" />
      {cartItems.length ? (
        <>
        <table className="cart-table">
        <thead className="cart-table-head">
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.item}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max={item.quantity}
                  defaultValue={item.quantity}
                />
              </td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="delete-icon"
                  onClick={() => deleteProduct(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-buttons">
        <Link to="/" className="link">
          Return to Shop
        </Link>
        <button className="update">Update Cart</button>
      </div></>
      ) : (
        <div className="cart-empty"><p>Cart is empty</p>
        <Link to="/" className="link">
          Return to Shop
        </Link></div>
        
      )}
      {total > 0 && (<div className="cart-total">
        <h3>Cart Total</h3>
        <p className="sub">sub totale $${total}</p>
        <p className="sub">Shoping Free</p>
        <p>Total $${total}</p>
        <Link to="/checkout" className="checkout">
          Checkout
        </Link>
      </div>)}
    </div>
  );
}

export default Cart;
