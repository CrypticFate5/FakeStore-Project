"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Star } from "lucide-react";
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { SquarePlus } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Rating {
    rate: number;
    count: number;
};


interface ProductProps {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: Rating;
}

const ProductCard: React.FC<ProductProps> = (props) => {
    return (
        <div className="m-10">
            <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
                <div className="h-[525px] w-[350px] relative cursor-pointer">
                    <div className="flex justify-between p-3">
                        <Heart className="size-8 bg-red-500 p-1 rounded-3xl"></Heart>
                        <ShoppingCart className="size-8 bg-green-500 p-1 rounded-3xl"></ShoppingCart>
                    </div>
                    <div className="h-[350px] w-full absolute top-0 left-0">
                        <div className="h-full flex justify-center items-center">
                            <div className="w-[200px] mx-auto flex justify-center items-center">
                                <Image
                                    src={props.image}
                                    alt={props.title}
                                    height={100}
                                    width={300}
                                    className="max-h-[300px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-0 right-0 text-center">
                        <div className="font-semibold m-1">{props.title}</div>
                        <div className="rating flex items-center justify-evenly  font-medium">
                            <div className="flex items-center">
                                <div>{props.rating.rate}</div>
                                <Star className="mx-1 size-4 text-green-500"></Star>
                            </div>
                            <div>{props.rating.count} Ratings</div>
                        </div>
                        <div className="mt-3 flex font-bold text-2xl justify-around items-center">
                            <div >
                                ₹{props.price}
                            </div>
                        </div>
                    </div>
                </div>

            </BackgroundGradient>
        </div>
    );
}

export default ProductCard;