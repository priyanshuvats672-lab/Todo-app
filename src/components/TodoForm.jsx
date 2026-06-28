import React from 'react'

const TodoForm = () => {
  return (
    <div className='flex h-screen w-screen justify-center items-center bg-transparent'>
      <div className='border-2 border-emerald-600 p-15 rounded-xl'>
        <h1 className='text-white text-5xl font-bold mb-7'>Enter Task</h1>
        <form className='flex flex-col justify-center items-center gap-5 text-white'>
            <input type="text" placeholder='Note heading' className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl bg-transparent outline-none placeholder:text-gray-400' />
            <textarea placeholder='description' className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl bg-transparent outline-none placeholder:text-gray-400'></textarea>
            <button className= 'bg-emerald-600 rounded-full mt-5 py-3 px-5 text-xl outline-none border-none w-1/2'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm
