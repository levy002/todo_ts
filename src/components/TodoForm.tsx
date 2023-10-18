import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"
import { ITodo } from './shared/Interfaces';

const TodoForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<ITodo>();
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  const onSubmit: SubmitHandler<ITodo> = (data) => { 
  setTodos([...todos, {...data, id: Math.floor(Math.random() * 999)}]);
}

  return (
    <section className='flex flex-col gap-2 mt-5 mb-7'>
      <h2 className='text-blue-700 font-black text-l'>Add New Todo:</h2>
    <form onSubmit={handleSubmit(onSubmit)} className='flex bg-slate-200 rounded-r-full rounded-l-full relative '>
      <input {...register("description", { required: 'Description is required' })} placeholder='Description' className='cursor-pointer outline-none w-full rounded-l-full py-3 px-5 bg-slate-200'/>
      <select {...register("category", { required: 'Category is required' })} className='cursor-pointer outline-none w-7/12 rounded-l-full bg-orange-600 text-white p-2 font-medium'>
        <option value=''>Select category</option>
        <option value="Home">Home</option>
        <option value="School">School</option>
        <option value="Sport">Sport</option>
        <option value="Other">Other</option>
      </select>
     <div className='absolute text-red-600 top-12 flex gap-5 items-center mt-3 ml-6'>
     <ErrorMessage
        errors={errors}
        name="description"
        render={({ message }) => <p>{message}</p>}
      />

     <ErrorMessage
        errors={errors}
        name="category"
        render={({ message }) => <p>{message}</p>}
      />
     </div>
      

      <input type="submit" value='Add' className='cursor-pointer outline-none w-5/12 rounded-r-full text-white bg-blue-700 p-2 font-medium '/>
    </form>
    </section>
  )
};

export default TodoForm;