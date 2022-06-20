//https://github.com/sveltejs/kit/pull/3384

import type { RequestHandler } from "@sveltejs/kit";
import { dataset_dev } from "svelte/internal";
import { api } from "./_api";

export const del: RequestHandler = (event) => {
    return api(event);
}

export const patch: RequestHandler<{}, FormData> = (event) => {
    return api(event, {
        text: event.body.name
    });
}
//todos: Persist in database
let todos: Todo[] = [];

export const api: (event: RequestHandler, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;

    switch (event.method.toUpperCase()) {
            case "GET":
                body =  todos;
                status = 200;
            break;

            case "POST":
                todos.push(data as Todo);
                body = data;
                status = 201;
                break;      

            case "DELETE":
                todos = todos.filter(todo => todo.uid !== event.params.uid)
                status =  200;
                break;

            case "PATCH":
                todos = todos.map(todo => {
                    if(todo.uid === event.params.uid) {
                        if(data.text) todo.text = data.text as string;
                        else todo.done = data.done as boolean;
                    }
                    return todo;
                });
                status = 200;
                break;

            default:
                break;
        }

        if (event.method.toUpperCase() !== "GET") {
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