import React from 'react'
import { Trash2 } from 'lucide-react'

const TodoItem = ({todos}) => {
    
    return (
        <div className='w-full rounded-2xl px-6 py-4 flex items-center justify-between bg-zinc-800 shadow-lg'>
            <span className='flex items-center gap-x-4'>
                <input
                    className='w-5 h-5 rounded accent-violet-500 cursor-pointer'
                    type="checkbox"
                />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold capitalize shadow-blue-200 text-white'>{todos.title}</h1>
                    <p className='text-white text-lg'>{todos.description}</p>
                </div>
            </span>
            <button className='text-zinc-400 hover:text-red-400 hover:scale-110 transition-all duration-200 cursor-pointer'>
                <Trash2 size={20} />
            </button>
        </div>
    )
}

export default TodoItem
