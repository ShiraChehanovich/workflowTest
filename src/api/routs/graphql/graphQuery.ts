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
            resolve: async () => await TaskService.getAll(),
        },
        task: {
            type: TaskQL,
            args: {id: {type: GraphQLInt}},
            resolve: async (_, {id}) => await TaskService.getById(id),
        },
        workflows: {
            type: new GraphQLList(WorkflowQL),
            resolve: async () => await WorkflowService.getAll(),
        },
        workflow: {
            type: WorkflowQL,
            args: {id: {type: GraphQLInt}},
            resolve: async (_, {id}) => await WorkflowService.get(id),
        },
    },
});