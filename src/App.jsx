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

  const [mode, setMode] = useState("closed");
  const [editingTodo, setEditingTodo] = useState(null);

  const toggleTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, complete: !todo.complete };
    });
    setTodos(newTodo);
  };

  const editTodo = (todo) => {
    setMode('edit');
    setEditingTodo(todo);
  };


  const updateTodo = ({ title, description }) => {
    setTodos(prev => prev.map(t =>
      t.id === editingTodo.id ? { ...t, title, description } : t
    ));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos(prevtodos => [...prevtodos, {
      id: Date.now(),
      ...todo,
      complete: false
    }]);
  }

  const deleteTodo = (id)=>{
      const newTodo = todos.filter((todo)=>todo.id !== id);
      setTodos(newTodo);
  }

  return (
    <div className='min-h-screen bg-[var(--bg)] text-white flex'>

      <Sidebar />

      {/* Main content — shifts right on md+ to account for fixed sidebar */}
      <div className='flex-1 flex flex-col min-w-0 md:ml-[260px]'>

        <Navbar />

        <main className='flex-1 px-4 sm:px-8 py-8'>
          {/* Header row */}
          <div className='flex items-center justify-between mb-6 max-w-3xl mx-auto'>
            <div>
              <h1 className='text-2xl font-bold text-white'>All Tasks</h1>
              <p className='text-gray-500 text-sm mt-1'>{todos.length} task{todos.length !== 1 ? 's' : ''} total</p>
            </div>
          </div>

          {/* Empty state */}
          {todos.length === 0 && mode === 'closed' && (
            <div className='max-w-3xl mx-auto flex flex-col items-center justify-center py-24 text-center'>
              <div className='w-16 h-16 rounded-2xl bg-[var(--surface2)] flex items-center justify-center mb-4 border border-[var(--border)]'>
                <Plus size={28} className='text-gray-600' />
              </div>
              <p className='text-gray-400 font-medium'>No tasks yet</p>
              <p className='text-gray-600 text-sm mt-1'>Hit the + button to add your first task</p>
            </div>
          )}

          {/* Todo list */}
          <div className='flex flex-col gap-3 max-w-3xl mx-auto'>
            {(mode === 'closed') && todos.map((todo) => (
              <TodoItem key={todo.id} editTodo = {editTodo} toggleTodo = {toggleTodo} deleteTodo={deleteTodo} todos={todo} />
            ))}
          </div>
        </main>

        {/* Floating add button */}
        {(mode === 'closed') && (
          <button
            onClick={() => { setMode('create'); setEditingTodo(null); }}
            className='glow-btn fixed bottom-8 right-8 bg-[var(--accent)] hover:bg-violet-500 text-white rounded-2xl p-4 shadow-xl transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 z-40'
            aria-label='Add task'
          >
            <Plus size={24} />
          </button>
        )}

        {/* Form modal rendered at root level so it overlays everything */}
        {(mode === 'create' || mode === 'edit') && (
          <TodoForm
            addTodo={mode === 'edit' ? updateTodo : addTodo}
            onClose={() => setMode('closed')}
            mode={mode}
            edit={editingTodo}
          />
        )}
      </div>
    </div>
  )
}

export default App
