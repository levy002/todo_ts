import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISearchQuery } from "./Interfaces";

interface IProps {
  setSearchQuery: (data: string) => void;
}

const SearchFilter = (props: IProps) => {
  const { setSearchQuery } = props;

  const handleSearch = (e: any) => {
    const query = e.target.value
    setSearchQuery(query.toLowerCase())
  }

  return (
      <div>
        <input type='text' onChange={handleSearch} placeholder='Search' />
      </div>
  );
};

export default SearchFilter;
