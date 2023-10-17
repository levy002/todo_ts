/* eslint-disable */
import React, { useCallback, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Todos from './Todos';
import { ITodo } from './shared/Interfaces';
import SearchFilter from './shared/searchFilters';
import TodoForm from './TodoForm';


const HomePage = () => {
  const todos = useReadLocalStorage<ITodo[]>('todos' || []);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [displayedTodos, setDisplayedTodos] = useState<ITodo[]>([]);
 
  const handleSearch = useCallback((query: string) => {
   setSearchQuery(query);
  }, []);

  const handleCategory = useCallback((category: string) => {
    setCategory(category);
   }, []);
 
  useEffect(() => {
    if (todos !== null) {
      const filteredBySearch = todos.filter((todo) =>
        todo.description.toLowerCase().includes(searchQuery)
      );

      const filteredByCategory = category === 'All' ? filteredBySearch : filteredBySearch.filter((todo) => todo.category === category);

      setDisplayedTodos(filteredByCategory);
    } else {
      setDisplayedTodos([]);
    }
  }, [searchQuery, category, todos]);
  
 
   return (
     <div className='bg-slate-100 p-7 rounded-md flex flex-col gap-6 lg-w-2/5 w-11/12'>
        <div className='flex justify-center items-center gap-4'>
            <h1 className='text-blue-700 font-black text-2xl'>TO-DO List</h1>
            <img src="./assets/icon.png" alt="icon" className='h-8'/>
        </div>
       <SearchFilter setSearchQuery={handleSearch} setCategory={handleCategory} />
      <Todos todos={displayedTodos}/>
      <TodoForm />
     </div>
   );
 }
 

export default HomePage;
