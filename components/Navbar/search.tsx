import axios from "axios";
import { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
const Search = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProds = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/categories");
                const prodList = response.data;
                console.log(products);
                setProducts(prodList);
            }
            catch (e) {
                console.log(e);
            }
        }
        getProds();
        console.log(products);
    }, [products]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    const products1=["Search","Fake","Faster"];

    return (
        <PlaceholdersAndVanishInput placeholders={products1} onChange={handleChange} onSubmit={onSubmit}></PlaceholdersAndVanishInput>
    );
};

export default Search;