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

interface ProductsProps {
    searchQuery: string;
    selectedCategory: string;
}

const Products: React.FC<ProductsProps> = ({ searchQuery, selectedCategory }) => {
    const [products, setProducts] = useState<ProductComp[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductComp[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory && selectedCategory !== "All") {
            filtered = filtered.filter(product =>
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        setFilteredProducts(filtered);
    }, [products, searchQuery, selectedCategory]);

    return (
        <>
            <div className="mx-20 flex flex-wrap gap-4">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="">
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
