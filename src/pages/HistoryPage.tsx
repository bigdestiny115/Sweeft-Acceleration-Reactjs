import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useSearch from "../hooks/useSearch";
import { Photo } from "../interfaces/interface";
import { HistoryStyle, Loading, MainPageStyle } from "../assets/styles/Pages";
import PhotoCard from "../components/card/PhotoCard";

const HistoryPage: React.FC = () => {
    const [value] = useLocalStorage<string[]>("ValueKeys", []);
    const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);
    const [cache, setCache] = useState(false);
    const { loading, searchProducts, setQuery } = useSearch();

    const onClick = (val: string) => {
        setQuery(val);
        setCache(true);
        setSearchedPhotos([]);
    };

    useEffect(() => {
        if (searchProducts && searchProducts.results) {
            setSearchedPhotos((prev) => {
                const searchedData: Photo[] =
                    searchProducts.results?.filter(
                        (newSearch: Photo) =>
                            !prev.some(
                                (prevSearch) => prevSearch.id === newSearch.id
                            )
                    ) || [];

                return [...prev, ...searchedData];
            });
        }
    }, [searchProducts]);

    return (
        <div>
            <HistoryStyle>
                <h1>Search History</h1>
                <select onChange={(e) => onClick(e.target.value)}>
                    <option value="">Select from history</option>
                    {value.map((searched, index) => (
                        <option key={index} value={searched}>
                            {searched}
                        </option>
                    ))}
                </select>
            </HistoryStyle>
            {cache && (
                <div>
                    <MainPageStyle>
                        {searchedPhotos?.map((photo: Photo, index) => (
                            <div key={index}>
                                <PhotoCard photo={photo} />
                            </div>
                        ))}
                        {loading && <Loading>Loading...</Loading>}
                    </MainPageStyle>
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
