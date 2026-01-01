import { connectDB } from "@/lib/config/db";
import { Categorys } from "@/lib/models/Categories";

export async function GET(request) {
    try {
        await connectDB();

        const users = await Categorys.find({});
        return Response.json(
            { message: "Categories fetched successfully", users }, { status: 200 });

    } catch (error) {
        return Response.json(
            { message: "Failed to fetch users", error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const { title, description, thumbnail} = body;
        // const user = new Categorys(body);
        if (!title || !thumbnail) {
            return Response.json(
                { message: "Title and thumbnail are required" },
                { status: 400 }
            );
        }

        const categories = new Categorys({
            title,
            description,
            thumbnail
        })

        await categories.save();
        return Response.json(
            { message: "Category created successfully", categories }, 
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { message: "Failed to create user", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request) { }

export async function PATCH(request) { }