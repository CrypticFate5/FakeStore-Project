"use client"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/product";
import axios from "axios";

interface Rating {
    rate: number;
    count: number;
};

interface ProductComp {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

const Products = () => {
    const [products, setProducts] = useState<ProductComp[]>([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
                console.log(products);
            } catch (e) {
                console.log(e);
            }
        }
        getProduct();
    }, []);

    return (
        <>
            <div className="mx-20 flex flex-wrap gap-4">
                {
                    products.map((product, index) => (
                        <div className="">
                            <ProductCard key={index} id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating}></ProductCard>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Products;