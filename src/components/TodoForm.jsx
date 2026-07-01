import { useEffect, useState } from 'react'
import { X, Type, AlignLeft, Plus } from 'lucide-react'

const TodoForm = ({ addTodo, mode , onClose , edit }) => {

  
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (!edit){
          setTitle('')
          setDescription('')
          return;
        }
        setTitle(edit.title);
        setDescription(edit.description);
    }, [edit])


  const submitHandler = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    addTodo({ title, description })
    setDescription('')
    setTitle('')
    onClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'>
      <div className='modal-card w-full max-w-md bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden'>

        {/* Header */}
        <div className='flex items-center justify-between px-6 pt-6 pb-4 border-b border-[var(--border)]'>
          <div>
            <h2 className='text-white font-bold text-xl tracking-tight'>{mode === 'edit' ? 'Edit Task' : 'New Task'}</h2>
            <p className='text-gray-500 text-xs mt-0.5'>Fill in the details below</p>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer'
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className='px-6 py-5 space-y-4'>

          {/* Title input */}
          <div className='space-y-1.5'>
            <label className='flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider'>
              <Type size={12} /> Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='e.g. Review pull request'
              className='w-full bg-[var(--surface2)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[var(--accent)] transition-colors duration-200'
            />
          </div>

          {/* Description textarea */}
          <div className='space-y-1.5'>
            <label className='flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider'>
              <AlignLeft size={12} /> Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Add a short description…'
              rows={3}
              className='w-full bg-[var(--surface2)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none'
            />
          </div>

          {/* Actions */}
          <div className='flex gap-3 pt-1'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 py-3 rounded-xl border border-[var(--border)] text-gray-400 hover:text-white hover:border-gray-500 text-sm font-medium transition-all duration-200 cursor-pointer'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--accent)] hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 cursor-pointer shadow-lg shadow-violet-900/30'
            >
              <Plus size={16} />
              {(mode === 'edit') ? 'Edit Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm
