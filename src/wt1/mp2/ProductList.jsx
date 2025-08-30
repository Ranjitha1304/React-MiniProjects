
import ProductCard from "./ProductCard";
import product1 from "../../assets/smartphone.jpg";
import product2 from "../../assets/laptop.jpg";
import product3 from "../../assets/headphn.webp";
import product4 from "../../assets/watch.webp";


const ProductList = () => {
  const products = [
    {
      title: "Smartphone",
      price: 25000,
      isAvailable: true,
      discount: 10,
      image: product1,
    },
    {
      title: "Laptop",
      price: 60000,
      isAvailable: false, // ❌ will show Out of Stock
      image: product2,
    },
    {
      title: "Headphones",
      price: 2000,
      isAvailable: true,
      discount: 5,
      image: product3,
    },
    {
      title: "Smartwatch",
      price: 5000,
      isAvailable: true,
      // no discount → will use default 0
      image: product4,
    },
  ];

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
