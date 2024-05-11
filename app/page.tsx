"use client";
import Navbar from "@/components/Navbar/navbar";
import Products from "@/components/ProductGrid/products";
import { useState } from "react";
import { CartProvider } from "@/components/Cart/cartContext";
import { CartDrawer } from "@/components/Cart/cart";
const Home = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearch(query);
  }

  const handleSelectCategory = (category: string) => {
    setCategory(category);
  }

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart=()=>{
    setIsCartOpen(false);
  }
  return (
    <>
      <Navbar onSearch={handleSearch} onSelectCategory={handleSelectCategory} onCartClick={handleCartClick}></Navbar>
      <Products searchQuery={search} selectedCategory={category}></Products>
      {isCartOpen && <CartDrawer onOpen={isCartOpen} onClose={handleCloseCart}></CartDrawer>}
    </>
  );
};

export default Home;