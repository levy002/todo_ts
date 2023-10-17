import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import Todos from './components/Todos';
import { ITodo } from './shared/Interfaces';

function App() {
 const todos = useReadLocalStorage<ITodo[]>('todos' || []);

  return (
    <div className="App">
     <Todos todos={todos}/>
    </div>
  );
}

export default App;
