import { connectDB } from "@/lib/config/db";
import { SubCategory } from "@/lib/models/Subcategorie";

export async function GET(request) {
    try {
        await connectDB();

        const reqUrl = request.url;
        const {searchParams} = new URL(reqUrl);

        const query = {}
        if (searchParams.get('category')) {
            query.category = searchParams.get('category')
        }
        console.log(query ,"bolll");
        
        const users = await SubCategory.find(query).populate('category', 'title');
                
        return Response.json(
            { message: "SubCategories fetched successfully", users }, { status: 200 });

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
        const user = new SubCategory(body);
        await user.save();
        return Response.json(
            { message: "SubCategory created successfully", user }, 
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