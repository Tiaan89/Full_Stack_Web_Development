import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = async ({reques}) => {
    return api({request});
}

export const post: RequestHandler = async ({request}) => {
    const formData = await request.formData();

    return api (request, {
        uid: `${Date.now()}`, //replace with the UID from the DB
        created_at: new Date(),
        text: request.formData.name,
        done: false
    })
}