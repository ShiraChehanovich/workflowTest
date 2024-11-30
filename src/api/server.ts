import express from "express";
import bodyParser from "body-parser";
import routes from "./routs";
import {endpoints} from "../utils/config";

const port = 3000;
const server = express()
server.use(bodyParser.json());

server.use(routes);
server.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`);
    console.log(`⚡ [server]: swagger is available at http://localhost:${port}${endpoints.swagger}`);
})