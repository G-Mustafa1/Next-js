"use client"
import { addTodo } from '@/app/actions/todos';
import React, { useRef } from 'react'

const TodoFrom = () => {
    const formRef = useRef(null);
    if (!formRef) {
        return null;
    }
    return (
        <form ref={formRef} action={async (data) => {
            const todo = data.get("todo")?.trim();

            if (!todo) {
                alert("Task cannot be empty!");
                return;
            }

            await addTodo(data);
            formRef.current?.reset();
        }} className='flex gap-2.5 my-2.5'>
            <input type="text" placeholder='addTodo' name='todo' className='bg-white w-60 px-3 py-1.5 rounded-md shadow-md outline-none border border-gray-500' />
            <button type="submit" className='bg-blue-500 rounded-md py-1.5 px-3 text-white shadow-md'>Add Todos</button>
        </form>
    )
}

export default TodoFrom
