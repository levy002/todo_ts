/* eslint-disable */
import React from 'react';;

interface IProps {
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void
}

const categories: string[] = ['All', 'School', 'Home', 'Sport']

const SearchFilter = (props: IProps) => {
  const { setSearchQuery, setCategory } = props;

  const handleSearch = (e: any) => {
    const query = e.target.value
    setSearchQuery(query.toLowerCase())
  }

  const handleCategory = (e: any) => {
    const category = e.target.value
    setCategory(category)
  }

  return (
    <section className='flex bg-slate-200 rounded-r-full rounded-l-full'>
    <input type="text" onChange={handleSearch} placeholder="Search" className='cursor-pointer outline-none w-full rounded-l-full py-3 px-5 bg-slate-200' />
    
    <select onChange={handleCategory} className='cursor-pointer outline-none w-6/12 rounded-full bg-orange-600 text-white p-2 font-medium'>
      {categories.map((category: string) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </section>
  );
};

export default SearchFilter;
