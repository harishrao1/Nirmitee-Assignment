import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
} from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ totalItems, handleFilter }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    handleFilter(e.target.value);
  };
  return (
    <>
      <AppBar
        position="sticky"
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        className="appBar"
        color="inherit"
      >
        <Toolbar>
          <img
            src="https://images-platform.99static.com//cTANeLvHk_EibhtgJcTQG_HMyko=/0x599:601x1200/fit-in/500x500/99designs-contests-attachments/101/101270/attachment_101270547"
            alt="Commerce.js"
            height="25px"
            className="navbar-image"
          />
          <Typography variant="h6" className="navbar-title" color="inherit">
            CommerceJs
          </Typography>
          <div className="grow" />
          <div className="Navbar-search">
            <InputBase
              placeholder="Search..."
              className="searchInput"
              value={searchText}
              onChange={handleSearch}
            />
            <div className="searchIcon">
              <Search />
            </div>
          </div>
          <div className="Navbar-button">
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
