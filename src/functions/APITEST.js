import { app } from "@azure/functions";

app.http('API-02-TEST', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { jsonBody : {
            "code" : "200",
            "status" : request
        } };
    }
});
