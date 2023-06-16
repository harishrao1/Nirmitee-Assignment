import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
} from "@mui/material";

import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";

const ProductCard = ({ product, handleAddToCart }) => {
  const { image } = product;
  console.log(image.url);
  return (
    <>
      <Card className="card-root">
        <Link to={`/product/${product.id}`}>
          <CardMedia
            height="200"
            component="img"
            image={image.url}
            title={product.name}
          />
          <CardContent>
            <Typography fontWeight="500">{product.name}</Typography>
            <Typography paddingY="0.5rem" fontWeight="800">
              ₹{product.price.formatted}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing className="cardActions">
          <IconButton
            aria-label="Add to Cart"
            className="icon-btn"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
