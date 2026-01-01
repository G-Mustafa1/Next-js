"use server"

import { revalidatePath } from "next/cache"

export async function addCategories(obj) {
    try {
        const added = await fetch(`${process.env.BASE_URL}/api/categories`,
            {
                method: "POST",
                body: JSON.stringify(obj)
            })

        const data = await added.json();
        console.log("res API", data);
        
        if (!added.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        revalidatePath("/admin/categories");
        return data;
    } catch (error) {
        console.error("Add category error:", error.message);
    }
}

export const getCategories = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/categories`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}