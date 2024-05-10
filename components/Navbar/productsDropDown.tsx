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

interface ProductsDropDownProps {
    onCategorySelect: (category: string) => void;
}
const ProductsDropDown:React.FC<ProductsDropDownProps> = ({onCategorySelect}) => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        const getProds=async()=>{
            try{
                const response= await axios.get("https://fakestoreapi.com/products/categories");
                const prodList=response.data;
                setCategories(prodList);
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
                    <DropdownMenuItem onClick={() => onCategorySelect("All")} key={0} className="cursor-pointer">All</DropdownMenuItem>
                    {
                        categories?.map((item:string, index) => (
                            <DropdownMenuItem key={index} className=" cursor-pointer" onClick={()=>onCategorySelect(item)}>
                                {item.charAt(0).toUpperCase()+item.slice(1)}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    );
};

export default ProductsDropDown;