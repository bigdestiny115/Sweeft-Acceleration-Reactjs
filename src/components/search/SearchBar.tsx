import React, { useState, ChangeEvent, useEffect } from "react";
import { FormStyle } from "../../assets/styles/Components";
import { SearchBarProps } from "../../interfaces/propsInterface";

const SearchBar: React.FC<SearchBarProps> = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearchValue("");
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleChange(searchValue);
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <FormStyle onSubmit={onSubmit}>
      <input
        className="search-input"
        type="search"
        value={searchValue}
        onChange={onChange}
        placeholder="Search images"
      />
    </FormStyle>
  );
};

export default SearchBar;
