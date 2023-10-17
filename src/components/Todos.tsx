import React from 'react';
import TodoForm from './TodoForm';
import { ITodo } from '../shared/Interfaces';
import Todo from './Todo';

interface IProps {
    todos: ITodo[]
}

const Todos = (props: IProps) => {
  const { todos } = props;
  return (
    <>
       <TodoForm />
       <section>
          {
            todos === null ? (
              <p>No tasks available!</p>
            ) : (
                
                    todos.map((todo: ITodo) => (
                        <Todo key={todo.id} description={todo.description} category={todo.category} id={todo.id} />
                    ))
                
            )
          }
       </section>
    </>
  )
}

export default Todos;