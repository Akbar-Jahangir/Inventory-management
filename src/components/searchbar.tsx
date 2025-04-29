import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchSvg } from "./IconsSvgs";
import { searchItem } from "../store/productSearchSlice/productSearchSlice";

export const Searchbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();

  // Dispatch search term when it changes
  useEffect(() => {
    dispatch(searchItem(searchTerm));
  }, [searchTerm, dispatch]);

  // Handle the change event for the search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="border md:w-[30%] h-[44px] flex px-[8px] py-[10px] items-center justify-center dark:rounded">
      <button>
        <SearchSvg />
      </button>

      <input
        className="ml-[8px] w-full focus:outline-none text-gray text-sm dark:bg-[#1E1E1E] "
        type="search"
        placeholder="Search product, supplier, order"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
