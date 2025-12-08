"use client"
import { deleteTodo, editTodo } from '@/app/actions/todos';
import React, { useState } from 'react'

const TodoList = ({ arr }) => {
    const [edit, setEdit] = useState(null);
    const [task, setTask] = useState('');

    const onEdit = async (todo) => {
        setEdit(todo.id)
        setTask(todo.title)
    }

    const getDateTime = () => {
        const updateDate = new Date();
        const date = updateDate.toLocaleDateString();
        const time = updateDate.toLocaleTimeString();
        return { date, time };
    }

    const onSave = async (todo) => {
        if (task.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        const { date, time} = getDateTime();
        todo.title = task;
        todo.date = date;
        todo.time = time;

        await editTodo(todo)
        setEdit(null)
    }

    const onDelete = async (todo) => {
        await deleteTodo(todo)
        // setEdit(null)
    }

    const onComplete = async (todo) => {
        todo.completed = !todo.completed
        console.log(todo);
        await editTodo(todo)
    }
    return (
        <div className='my-2.5'>
            <ul className='flex flex-col gap-2.5'>
                {arr.length < 1 ? (
                    <h1 className='text-center text-gray-500 text-2xl'>No Todos</h1>
                ) : (
                    arr.map((todo) => (
                        <li key={todo.id} className={`bg-gray-400 rounded-md py-1.5 px-2.5 ${todo.completed ? 'line-through bg-green-500' : ''}`}>
                            <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo)} className='rounded-full' />
                            {edit === todo.id ?
                                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
                                    className='bg-white w-60 px-3 py-1.5 rounded-md shadow-md outline-none border border-gray-500' />
                                : <div>
                                    <p className='text-white text-lg'>{todo.title}</p>
                                    <span className='text-white text-sm'>{todo.date}   {todo.time}</span>
                                </div>
                                }
                            <div className='flex gap-2 mt-2.5'>
                                <button onClick={() => edit === todo.id ? onSave(todo) : onEdit(todo)} className='bg-purple-500 py-1 px-2 rounded-md text-white'>{edit === todo.id ? 'Save' : 'Edit'}</button>
                                <button onClick={() => onDelete(todo.id)} className='bg-red-500 py-1 px-2 rounded-md text-white'>Delete</button>
                            </div>
                        </li>
                    ))
                )
                }
            </ul>
        </div>
    )
}


export default TodoList
