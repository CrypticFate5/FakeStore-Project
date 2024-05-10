"use client";
import Navbar from "@/components/Navbar/navbar";
import Products from "@/components/ProductGrid/products";
import { useState } from "react";
const Home=()=>{

  const [search,setSearch]=useState("");

  const handleSearch=(query:string)=>{
    setSearch(query);
  }
  return (
    <>
        <Navbar onSearch={handleSearch}></Navbar>
        <Products searchQuery={search}></Products>
    </>
  );
};

export default Home;