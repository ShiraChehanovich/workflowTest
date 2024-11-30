import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
} from "graphql";
import {TaskService} from "../task/taskService";
import {WorkflowService} from "../workflow/workflowService";
import {TaskQL, WorkflowQL} from "./graphTypes";


export const graphQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        tasks: {
            type: new GraphQLList(TaskQL),
            args: {
                ids: {type: new GraphQLList(GraphQLInt)},
                workflow_id: {type: new GraphQLList(GraphQLInt)},
            },
            resolve: async (_, {ids, workflow_id}) => await TaskService.get(ids, workflow_id),
        },
        workflows: {
            type: new GraphQLList(WorkflowQL),
            args: {id: {type: GraphQLInt}},
            resolve: async (_, {id}) => await WorkflowService.get(id),
        },
    },
});