"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios";
import { useEffect, useState } from "react";

interface DropDownProps {
    category?: string[];
}

const ProductsDropDown = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const getProds=async()=>{
            try{
                const response= await axios.get("https://fakestoreapi.com/products/categories");
                const prodList=response.data;
                setProducts(prodList);
            }
            catch(e){
                console.log(e);
            }
        }
        getProds();
    },[]);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>Products</DropdownMenuTrigger>
                <DropdownMenuContent>
                    {
                        products?.map((item, index) => (
                            <DropdownMenuItem key={index} className=" cursor-pointer">
                                {item}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    );
};

export default ProductsDropDown;