"use client"
import Link from "next/link";
import { ModeToggle } from "../ui/modetoggle";
import ProductsDropDown from "./products";
import axios from "axios";
import Search from "./search";
const Navbar=()=>{
    
    return (
        <>
        <nav className="flex items-center m-3 mx-10 justify-between">
            <div className="text-4xl">FakeStore</div>
            <Search></Search>
            <div className="menu flex items-center gap-5">
                <ul className="list-none font-semibold flex gap-10">
                    <li><Link href="/">Home</Link></li>
                    <li><ProductsDropDown></ProductsDropDown></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
        </>
    )
};

export default Navbar;