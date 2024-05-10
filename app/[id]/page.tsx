"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

interface DetailsProps {
    params: { id: number };
}

interface Rating {
    rate: number;
    count: number;
}

interface ProductComp {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

const Details: React.FC<DetailsProps> = ({ params }) => {
    const [product, setProduct] = useState<ProductComp>();
    const [quantity, setQuantity] = useState<number>(1);
    const [cartItems, setCartItems] = useState<ProductComp[]>([]);

    useEffect(() => {
        const getProd = async () => {
            try {
                const prod = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
                setProduct(prod.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        getProd();
    }, [params.id]);

    const addToCart = () => {
        if (product) {
            const itemToAdd = { ...product, quantity };
            setCartItems([...cartItems, itemToAdd]);
            toast("Item added to Cart", {
                description: product.title,
            });
        }
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <>
            <Navbar showProductsDropDown={false} showSearch={false} />
            {product && (
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-lg w-full h-auto max-h-96 object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="font-bold">Description</h2>
                            <p className="text-700">{product.description}</p>
                            <div className="mt-4 flex items-center">
                                <p className="text-700 mr-4">
                                    <span className="font-bold">Category:</span>{" "}
                                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                </p>
                                <p className="text-700">
                                    <span className="font-bold">Rating:</span>{" "}
                                    {product.rating.rate} ({product.rating.count} reviews)
                                </p>
                            </div>

                            <p className="text-2xl mr-4 my-5">
                                <span className="font-bold">Price:</span> ₹{product.price.toFixed(2)}
                            </p>
                            <div className="mt-6 flex items-center">
                                <Button onClick={addToCart} className="mr-20">
                                    Add to Cart
                                </Button>
                                <Button variant="secondary" onClick={decrementQuantity}>
                                    -
                                </Button>
                                <Button>{quantity}</Button>
                                <Button variant="secondary" onClick={incrementQuantity}>
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Toaster />
        </>
    );
};

export default Details;
