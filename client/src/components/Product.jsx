import { useNavigate } from "react-router-dom";
import AddToWishlist from "./AddToWishlist";
import { Eye, Heart } from "lucide-react";
import { AddToCart } from "./AddToCart";
function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div key={product._id} className="product-card">
      <div className="product-image-container">
        {product.isNew && <span className="new-badge">NEW</span>}
        <img
          src={product.image[0].secure_url}
          alt={product.Name}
          className="product-image"
        />
        <div className="product-overlay">
          <button
            className="icon-button heart-button"
            onClick={() => AddToWishlist(product)}
          >
            <Heart size={20} />
          </button>
          <button
            className="icon-button eye-button"
            onClick={() => navigate(`/productdetails/${product.id}`)}
          >
            <Eye size={20} />
          </button>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => <AddToCart props={product} />}
        >
          Add To Cart
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <div className="product-rating">
            {renderStars(product.rating)}
            <span className="review-count">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
