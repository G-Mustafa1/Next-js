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
        const user = new Categorys(body);
        await user.save();
        return Response.json(
            { message: "Category created successfully", user }, 
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