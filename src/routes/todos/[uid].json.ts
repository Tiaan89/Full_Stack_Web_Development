import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (event) => {
    return api(event);
}

export const patch = RequestHandler<{}, FormData> = (event) => {
    return api (event, {
        text: event.formData.name,
        done: event.body.has("done") ? !!event.body.get("done") : undefined
    });
}