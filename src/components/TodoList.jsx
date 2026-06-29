import {useState} from 'react'
import TodoItem from './TodoItem'

const TodoList = (elem , idx) => {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <TodoItem key={idx} />
    </div>
  )
}

export default TodoList
