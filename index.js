const express = require('express');

const app = express();

app.get("/", (request, response) => { 
    return response.send("Hello world");
});

app.listen(3333, () => console.log("Listening on port 3333"));
