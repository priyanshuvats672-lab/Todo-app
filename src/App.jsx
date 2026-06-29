import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm';
import { Plus } from 'lucide-react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';

const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos(prevtodos => [...prevtodos, todo]);
  }

  return (
    <div className='min-h-screen bg-black text-white flex'>

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main content — offset by sidebar width */}
      <div className='flex-1 flex flex-col'>

        {/* Navbar sits at top of content area */}
        <Navbar />

        {/* Todo list */}
        <div className='flex flex-col gap-4 p-8 max-w-3xl w-full mx-auto'>
          {!showForm && todos.map((todo, index) => (
            <TodoItem key={index} todos={todo} />
          ))}
        </div>

        {/* Add button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className='fixed bottom-10 right-10 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-4 shadow-lg transition-all duration-200 cursor-pointer'
          >
            <Plus size={28} />
          </button>
        )}

        {/* TodoForm modal */}
        {showForm && (
          <TodoForm
            addTodo={addTodo}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  )
}

export default App
