import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import {graphQuery} from "./graphQuery";
import {GraphQLSchema} from "graphql/type";
import {graphMutation} from "./graphMutation";
const router = express.Router();

const schema = new GraphQLSchema({
    query: graphQuery,
    mutation: graphMutation,
});

router.all('/',createHandler({ schema }));

export default router;