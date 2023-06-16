import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { commerce } from "./lib/commerce";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  const fetchCart = async () => {
    try {
      const response = await commerce.cart.retrieve();
      setCart(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
    console.log(response);
  };

  const handleFilter = (searchText) => {
    if (!searchText) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const response = await commerce.cart.update(lineItemId, { quantity });
      setCart((prevCart) => ({
        ...prevCart,
        ...response,
      }));
    } catch (error) {
      console.log("Error updating cart:", error);
    }
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log("Hello");
  console.log(products);
  // console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart?.total_items} handleFilter={handleFilter} />
        <Switch>
          <Route exact path="/">
            <Products
              products={filteredProducts}
              handleAddToCart={handleAddToCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onEmptyCart={handleEmptyCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
