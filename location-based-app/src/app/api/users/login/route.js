import { connectDB } from "@/lib/config/db";
import { Users } from "@/lib/models/Users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();
        const { email, password } = body;

        const user = await Users.findOne({ email });

        if (!user) {
            return Response.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        const hashedPassword = await bcrypt.compare(password, user.password);

        if (!hashedPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
        }


        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

        return Response.json(
            { message: "User Logged in successfully", user, token },
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