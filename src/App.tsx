import React, { useCallback, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Todos from './components/Todos';
import { ITodo } from './shared/Interfaces';
import SearchFilter from './shared/searchFilters';


function App() {
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
     <div className="App">
       <SearchFilter setSearchQuery={handleSearch} setCategory={handleCategory} />
      <Todos todos={displayedTodos}/>
     </div>
   );
 }
 

export default App;
