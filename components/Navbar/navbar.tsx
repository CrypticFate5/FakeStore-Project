"use client"
import Link from "next/link";
import { ModeToggle } from "../ui/modetoggle";
import ProductsDropDown from "./productsDropDown";
import axios from "axios";
import Search from "./search";
import { useState } from "react";

interface NavbarProps{
    onSearch: (query: string) => void;
    onSelectCategory:(category:string)=>void;
}

const Navbar:React.FC<NavbarProps>=({onSearch,onSelectCategory})=>{
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory]=useState("");

    const handleSearch = (query: string) => {
        setSearch(query);
    };

    const handleSelectCategory=(category:string)=>{
        onSelectCategory(category);
    }
    return (
        <>
        <nav className="flex items-center m-5 mx-10 justify-between">
            <div className="text-4xl">FakeStore</div>
            <Search onSearch={onSearch}></Search>
            <div className="menu flex items-center gap-5">
                <ul className="list-none font-semibold flex gap-10">
                    <li><ProductsDropDown onCategorySelect={handleSelectCategory}></ProductsDropDown></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
        </>
    )
};

export default Navbar;