import React, { useCallback, useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Todos from './components/Todos';
import { ITodo } from './shared/Interfaces';
import SearchFilter from './shared/searchFilters';


function App() {
  const todos = useReadLocalStorage<ITodo[]>('todos' || []);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedTodos, setDisplayedTodos] = useState<ITodo[]>([]);
 
  const handleSearch = useCallback((query: string) => {
   setSearchQuery(query);
  }, []);
 
  useEffect(() => {
    if (todos !== null) {
      const filteredTodos = todos.filter((todo) =>
        todo.description.toLowerCase().includes(searchQuery)
      );
      
      setDisplayedTodos(filteredTodos);
    } else {
      setDisplayedTodos([]);
    }
  }, [searchQuery, todos]);
  
 
   return (
     <div className="App">
       <SearchFilter setSearchQuery={handleSearch} />
      <Todos todos={displayedTodos}/>
     </div>
   );
 }
 

export default App;
