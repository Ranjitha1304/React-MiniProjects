
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      title: "Smartphone",
      price: 25000,
      isAvailable: true,
      discount: 10,
      image: "/src/assets/smartphone.jpg",
    },
    {
      title: "Laptop",
      price: 60000,
      isAvailable: false, // ❌ will show Out of Stock
      image: "/src/assets/laptop.jpg",
    },
    {
      title: "Headphones",
      price: 2000,
      isAvailable: true,
      discount: 5,
      image: "/src/assets/headphn.webp",
    },
    {
      title: "Smartwatch",
      price: 5000,
      isAvailable: true,
      // no discount → will use default 0
      image: "/src/assets/watch.webp",
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
