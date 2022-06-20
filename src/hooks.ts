import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    // if (event.query.has("_method")) {
    //     event.method = event.query.get("_method").toUpperCase();
    // }

    const response = await resolve(event);
    
    return response;
};