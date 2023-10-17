import React from "react";;

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
    <section>
    <input type="text" onChange={handleSearch} placeholder="Search" />
    
    <select onChange={handleCategory}>
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
