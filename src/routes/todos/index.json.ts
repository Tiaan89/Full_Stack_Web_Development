import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = async (event) => {
    return api(request);
}

export const post = RequestHandler = async (event) => {
    //const formData = await request.formData();

    return api (event, {
        created_at: new Date(),
        text: event.formData.name,
        done: false
    })
}