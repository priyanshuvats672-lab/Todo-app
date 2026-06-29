import { useState } from 'react'
import { X } from 'lucide-react';

const TodoForm = ({ addTodo, onClose }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    addTodo({ title, description });

    setDescription('');
    setTitle('');
    onClose();
  }

  return (

    <div className='flex h-screen w-screen justify-center items-center bg-black'>
      <div className='border-2 border-emerald-600 pb-15 pl-15 pr-15 pt-5 rounded-xl'>
        <button type='button' onClick={onClose} className='text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer'><X /></button>
        <h1 className='text-gray-500 text-5xl font-bold mb-7'>Enter Task</h1>
        <form onSubmit={(e) => {
          submitHandler(e);
        }} className='flex flex-col justify-center items-center gap-5 text-white'>
          <input 
          value={title} 
          onChange={(e) => {setTitle(e.target.value)}} 
          type="text" placeholder='Note heading' 
          className='border-2 border-emerald-600 rounded-xl resize-none py-3 px-5 text-xl bg-transparent outline-none placeholder:text-gray-400' />
          <textarea 
          value={description} 
          onChange={(e) => {setDescription(e.target.value)}} 
          placeholder='description' 
          className='border-2 border-emerald-600 rounded-xl resize-none w-full py-3 px-5 text-xl bg-transparent outline-none placeholder:text-gray-400'></textarea>
          <button 
          className='bg-emerald-600 rounded-full mt-5 py-3 px-5 text-xl outline-none border-none w-1/2'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm
