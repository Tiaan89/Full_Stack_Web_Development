import type { RequestHandler } from "@sveltejs/kit";

//todos: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = async ({request}) => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async ({request}) => {
    const formData = await request.formData();
    
    todos.push({
        created_at: new Date(),
        text: request.formData.name,
        done: false
    })

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}