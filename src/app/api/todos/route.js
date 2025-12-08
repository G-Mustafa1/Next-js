const arr = [];

export async function GET() {
    return Response.json({ todos: arr });
}

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body,"body POST");
        
        const obj = {
            id: arr.length + 1,
            title: body.todo,
            completed: false,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };

        arr.push(obj);

        console.log("Updated Todos POST:", arr);

        return new Response(
            JSON.stringify({ data: arr, msg: 'success' }),
            {
                status: 200,
            }
        );
        
    } catch (error) {
        return new Response(
            JSON.stringify({ msg: 'error', error: error.message }),
            {
                status: 500,
            }
        );
    }
}


export async function PATCH(request) {
    try {
        const body = await request.json();
        console.log(body);
        const todoId = arr.findIndex((todo) => todo.id === body.id);
        arr[todoId] = body;        
        console.log("Updated Todos: PATCH", arr);

        return new Response(
            JSON.stringify({ data: arr, msg: 'success' }),
            {
                status: 200,
            }
        );
        
    } catch (error) {
        return new Response(
            JSON.stringify({ msg: 'error', error: error.message }),
            {
                status: 500,
            }
        );
    }
}


export async function DELETE(request) {
    try {
        const body = await request.json();
        console.log(body, "body DELETE");
        const todoId = arr.findIndex((todo) => todo.id === body.id);
        arr.splice(todoId, 1);        
        console.log("Updated Todos: DELETE", arr);

        return new Response(
            JSON.stringify({ data: arr, msg: 'success' }),
            {
                status: 200,
            }
        );
        
    } catch (error) {
        return new Response(
            JSON.stringify({ msg: 'error', error: error.message }),
            {
                status: 500,
            }
        );
    }
}
