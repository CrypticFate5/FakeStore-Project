import axios from "axios";
import { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

interface SearchProps {
    onSearch: (query: string) => void;
};

const Search:React.FC<SearchProps> = ({onSearch}) => {

    const [search,setSearch]=useState("");

    const handleChange = (e: any) => {
        setSearch(e.target.value);
        onSearch(search);
        // console.log(e.target.value);
    };
    const handleSubmit = (e: any) => {
        setSearch("");
        onSearch(search);
        e.preventDefault();
        // console.log(e.target);
    };
    const products1=["Search","Fake","Faster"];

    return (
        <PlaceholdersAndVanishInput placeholders={products1} onChange={handleChange} onSubmit={handleSubmit}></PlaceholdersAndVanishInput>
    );
};

export default Search;