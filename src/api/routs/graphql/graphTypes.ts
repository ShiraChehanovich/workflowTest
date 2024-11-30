import {GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString, Kind} from "graphql/index";

const DateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Custom Date scalar type",
    serialize(value: any) {
        return value instanceof Date ? value.toISOString() : null;
    },
    parseValue(value: any) {
        return typeof value === "string" ? new Date(value) : null;
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value);
        }
        return null;
    },
});

export const TaskQL = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        workflow_id: {type: GraphQLInt},
        createdAt: {type: DateScalar},
        updatedAt: {type: DateScalar},
    }),
});

export const WorkflowQL = new GraphQLObjectType({
    name: "Workflow",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        createdAt: {type: DateScalar},
        updatedAt: {type: DateScalar},
    }),
});