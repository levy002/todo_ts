/* eslint-disable */
import React from 'react';
import { ITodo } from './shared/Interfaces';
import Todo from './Todo';

interface IProps {
    todos: ITodo[]
}

const Todos = (props: IProps) => {
  const { todos } = props;
  return (
    <>
       <section className='flex flex-col gap-4 mt-5'>
          {
            todos.length === 0 ? (
              <p  className="flex bg-slate-50 items-center justify-center px-4 py-3 rounded-lg shadow-2xl text-blue-700 font-medium italic">No tasks!</p>
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