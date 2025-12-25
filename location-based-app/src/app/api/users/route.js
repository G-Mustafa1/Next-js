import { connectDB } from "@/lib/config/db";
import { Users } from "@/lib/models/Users";

export async function GET(request) {
    try {
        await connectDB();

        const users = await Users.find({});
        return Response.json(
            { message: "Users fetched successfully", users }, { status: 200 });

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
        const user = new Users(body);
        await user.save();
        return Response.json(
            { message: "User created successfully", user }, 
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