//https://github.com/sveltejs/kit/pull/3384

import type { RequestHandler } from "@sveltejs/kit";

//todos: Persist in database
let todos: Todo[] = [];

export const api = (request: RequestHandler, todo?: Todo) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
            case "GET":
                body =  todos;
                status = 200;
            break;

            case "POST":
                todos.push(todo);
                body = tody;
                status = 201;
                break;      

            case "DELETE":
                todos = todos.filter(todo => todo.uid !== request.params.uid)
                status =  200;
                break;

            default:
                break;
        }

        if (request.method.toUpperCase() !== "GET") {
            return {
                    status: 300,
                    headers: {
                        location: "/"
                    }             
                };
        }

        return {
            status,
            body
        }
    }