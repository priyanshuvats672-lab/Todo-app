import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Navbar from '../Navbar/Navbar'
import TodoList from './TodoList'

const Task = () => {
    return (
        <div className='flex w-full flex-col'>
            <Sidebar/>
            <Navbar/>
            <TodoList/>
        </div>
    )
}

export default Task
