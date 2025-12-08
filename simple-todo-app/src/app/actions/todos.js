"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(title) {
    const todo = title.get('todo');
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/todos`, {
            method: 'POST',
            body: JSON.stringify({ todo })
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error);

    }
}


export async function editTodo(obj) {
    console.log(obj, "title");
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/todos`, {
            method: "PATCH",
            body: JSON.stringify(obj)
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error);

    }
}

export async function deleteTodo(obj) {
    console.log(obj, "delete");
    try {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/todos`, {
            method: "DELETE",
            body: JSON.stringify(obj)
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error);

    }
}