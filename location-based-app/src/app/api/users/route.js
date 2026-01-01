import { connectDB } from "@/lib/config/db";
import { Users } from "@/lib/models/Users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
        const { fullName, email, password, location, profileImage, address, bio } = body;

        if (!fullName || !email || !password) {
            return Response.json(
                { message: "Full name, email and password are required" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

        const user = new Users({
            fullName,
            email,
            password: hashedPassword,
            location,
            profileImage,
            address,
            bio
        })

        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

        return Response.json(
            { message: "User created successfully", user, token },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { message: "Failed to create user", },
            { status: 500 }
        );
    }
}

export async function DELETE(request) { }

export async function PATCH(request) { }