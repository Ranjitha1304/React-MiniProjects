
import "./ProductCard.css";

const ProductCard = ({ title, price, isAvailable, discount, image }) => {
  return (
    <div className="product-card">
      {/* ✅ JSX Attribute src={image} */}
      <img src={image} alt={title} className="product-img" />

      <h2>{title}</h2>
      <p>Price: ₹{price}</p>

      {/* ✅ Conditional Rendering */}
      {isAvailable ? (
        <p style={{ color: "green" }}>In Stock</p>
      ) : (
        <p style={{ color: "red" }}>Out of Stock</p>
      )}

      {/* ✅ Conditional: only show discount if available */}
      {discount > 0 && <p className="discount">Discount: {discount}%</p>}
    </div>
  );
};

// ✅ Default Props
ProductCard.defaultProps = {
  discount: 0,
  image: "https://via.placeholder.com/150", // default image
};

export default ProductCard;
