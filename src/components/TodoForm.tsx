import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useForm, SubmitHandler } from "react-hook-form";
import { ITodo } from '../shared/Interfaces';

const TodoForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ITodo>();
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  const onSubmit: SubmitHandler<ITodo> = (data) => { 
  setTodos([...todos, {...data, id: Math.floor(Math.random() * 999)}]);
}

  return (
    <section>
      <h2>Add New Todo</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("description", { required: true })} placeholder='Description'/>
      <select {...register("category", { required: true })}>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Sport">Sport</option>
        <option value="Other">Other</option>
      </select>
      <input type="submit" />
    </form>
    </section>
  )
};

export default TodoForm;