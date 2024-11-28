import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
const router = express.Router();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'world',
            },
        },
    }),
});

router.all('/',createHandler({ schema }));

export default router;