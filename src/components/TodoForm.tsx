import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

enum CategoryEnum {
    Home = "Home",
    School = "School",
    Sport = "Sport",
    Other = "Other"
}

interface ITodoInput {
  description: string
  category: CategoryEnum
}

const TodoForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ITodoInput>()
  const onSubmit: SubmitHandler<ITodoInput> = (data) => {
    console.log(data);
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