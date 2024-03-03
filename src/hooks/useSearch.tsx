import { useEffect, useState } from "react";
import { accessKey } from "../accessKey/AccessKey";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "../interfaces/interface";

const useSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // fetching search results
    const fetchData = async () => {
        try {
            const res = await fetch(
                `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${query}&client_id=${accessKey}`
            );

            if (!res.ok) {
                throw new Error("Response Failed");
            }

            return res.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

    const { data: searchProducts } = useQuery({
        queryKey: ["searchData", query, page],
        queryFn: fetchData,
    }) as { data: { results?: Photo[] } | null };

    // infinity scrolling
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setTimeout(() => {
                setPage((prev) => prev + 1);
                setLoading(false);
            }, 500);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { query, setQuery, page, searchProducts, loading };
};

export default useSearch;
