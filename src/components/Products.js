import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import "./ProductCard.css";
import img from "../assets/img.png";
import Shimmer from "./Shimmer";
const Products = ({ products, handleAddToCart }) => {
  if (!products.length) {
    return <Shimmer />;
  }
  return (
    <main className="card-content">
      <div className="card-toolBar" />
      <img className="crousel-img" src={img} alt="img" />
      <Grid container marginY="0.5rem" paddingX="0.5rem" spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} md={3}>
            <ProductCard product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
