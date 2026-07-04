import TodoItem from './TodoItem'

const TodoContainer = ({ filterItem, mode, editTodo, toggleTodo, deleteTodo }) => {
  return (
    <div className='flex flex-col gap-3 max-w-3xl mx-auto'>
      {mode === 'closed' && filterItem.map((todo) => (
        <TodoItem
          key={todo.id}
          todos={todo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoContainer
