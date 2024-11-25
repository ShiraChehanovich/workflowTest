import express from "express";
import bodyParser from "body-parser";
import routes from "./routs";

const port = 3000;
const server = express()
server.use(bodyParser.json());

server.use(routes);
server.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`);
})