"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useCart } from "@/components/Cart/cartContext";
import { CartDrawer } from "@/components/Cart/cart";

interface DetailsProps {
    params: { id: number };
}

interface Rating {
    rate: number;
    count: number;
}

interface ProductComp {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

const Details: React.FC<DetailsProps> = ({ params }) => {
    const [product, setProduct] = useState<ProductComp>();

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

    const {addToCart,cart}=useCart();

    const handleAddToCart=()=>{
        toast(`Added to Cart`,{
            description:`${product?.title}`
        }
        );
        if(product){
            addToCart({id:product?.id,name:product?.title,price:product?.price,quantity:1});
            console.log(cart);
        }
    }
    const handleCloseCart=()=>{
        setIsCartOpen(false);
      }
      const handleCartClick = () => {
        setIsCartOpen(true);
      };
      const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <>
            <Navbar showProductsDropDown={false} showSearch={false} onCartClick={handleCartClick} />
            {isCartOpen && <CartDrawer onOpen={isCartOpen} onClose={handleCloseCart}></CartDrawer>}
            {product && (
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-md">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded w-full h-auto max-h-96 object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Description</h2>
                            <p className="text-700">{product.description}</p>
                            <div className="mt-4 flex items-center">
                                <p className="text-700 mr-4">
                                    <button className="border-2 rounded-md p-1 text-sm border-black dark:border-white" >
                                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                    </button>
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
                                <Button onClick={handleAddToCart} className="mr-20">
                                    Add to Cart
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
