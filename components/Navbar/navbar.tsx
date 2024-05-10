"use client"
import Link from "next/link";
import { ModeToggle } from "../ui/modetoggle";
import ProductsDropDown from "./productsDropDown";
import axios from "axios";
import Search from "./search";
import { useState } from "react";

interface NavbarProps{
    onSearch?: (query: string) => void;
    onSelectCategory?:(category:string)=>void;
    showSearch?:boolean;
    showProductsDropDown?:boolean;
}

const Navbar:React.FC<NavbarProps>=({onSearch,onSelectCategory,showProductsDropDown=true,showSearch=true})=>{
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory]=useState("");

    const handleSearch = (query: string) => {
        if(onSearch)
            onSearch(query);
    };

    const handleSelectCategory=(category:string)=>{
        if(onSelectCategory)
            onSelectCategory(category);
    }
    return (
        <>
        <nav className="flex items-center m-5 mx-10 justify-between">
            <div className="text-4xl"><Link href="/">FakeStore</Link></div>
            {showSearch && <Search onSearch={handleSearch}></Search>}
            <div className="menu flex items-center gap-5">
                <ul className="list-none font-semibold flex gap-10">
                    {showProductsDropDown && <li><ProductsDropDown onCategorySelect={handleSelectCategory}></ProductsDropDown></li>}
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
        </>
    )
};

export default Navbar;