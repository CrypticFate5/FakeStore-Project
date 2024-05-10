"use client";
import Navbar from "@/components/Navbar/navbar";
import Products from "@/components/ProductGrid/products";
import { useState } from "react";
const Home = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (query: string) => {
    setSearch(query);
  }

  const handleSelectCategory = (category: string) => {
    setCategory(category);
  }
  return (
    <>
      <Navbar onSearch={handleSearch} onSelectCategory={handleSelectCategory}></Navbar>
      <Products searchQuery={search} selectedCategory={category}></Products>
    </>
  );
};

export default Home;