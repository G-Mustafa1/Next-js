import Link from 'next/link'
import React from 'react'
import { addTodo } from './actions/todos';
import TodoFrom from '@/components/TodoFrom';
import TodoList from '@/components/TodoList';

const Home = async () => {
  const api = await fetch('http://localhost:3000/api/todos',{
    cache: 'no-cache'
  })
  const responst = await api.json();
  const arr = responst.todos
  return (
    <div className='bg-gray-50 min-h-screen flex justify-center items-center'>
      <div className='bg-amber-100 py-2.5 px-5 rounded-md'>
        <h1 className='text-2xl font-bold text-center'>Todo App</h1>
        <TodoFrom />
        <TodoList arr={arr} />
      </div>
    </div>
  )
}

export default Home
