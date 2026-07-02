import { Trash2, GripVertical, SquarePen } from 'lucide-react'

const TodoItem = ({ toggleTodo , editTodo ,  todos, deleteTodo}) => {
  
  return (
    <div className='todo-item group flex items-start gap-4 w-full rounded-2xl px-5 py-4 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface2)] transition-all duration-200 shadow-sm'>

      {/* Drag handle (visual only) */}
      <div className='mt-1 text-gray-700 group-hover:text-gray-500 transition-colors cursor-grab'>
        <GripVertical size={16} />
      </div>

      {/* Checkbox */}
      <div className='mt-0.5 flex-shrink-0'>
        <input
          className='w-4.5 h-4.5 rounded accent-[var(--accent)] cursor-pointer'
          type='checkbox'
          checked={todos.complete}
          onChange={() => toggleTodo(todos.id)}
        />
      </div>

      {/* Content */}
      <div className='flex-1 min-w-0'>
        <p className={`text-base font-semibold capitalize leading-snug ${todos.complete ? 'line-through text-gray-500' : 'text-white'}`}>
          {todos.title}
        </p>
        {todos.description && (
          <p className={`mt-1 text-sm leading-relaxed ${todos.complete ? 'text-gray-600' : 'text-gray-400'}`}>
            {todos.description}
          </p>
        )}
      </div>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todos.id)}
        className='flex-shrink-0 mt-0.5 p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer'
        aria-label='Delete task'
      >
        <Trash2 size={16} />
      </button>

      {/* Edit Button */}
      <button
       className='flex-shrink-0 mt-0.5 p-1.5 rounded-lg text-gray-600 hover:text-green-400 hover:bg-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer'
       onClick={()=>editTodo(todos)}
       >
        <SquarePen />
      </button>
    </div>
  )
}

export default TodoItem
