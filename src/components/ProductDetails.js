import { Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";
import Shimmer from "./Shimmer";
const ProductDetails = ({ handleAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await commerce.products.retrieve(productId);
      setProduct(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  });
  console.log(product);

  if (!product) {
    return <Shimmer />;
  }
  return (
    <div className="card">
      <img className="card-image" src={product.image.url} alt={product.name} />
      <div className="card-details">
        <Typography variant="h4">{product.name}</Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <Typography variant="h5">
          {product.price.formatted_with_symbol}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          style={{ width: "30%", marginTop: "20px" }}
          onClick={() => handleAddToCart(product.id, 1)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default ProductDetails;
