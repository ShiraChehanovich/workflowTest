import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql/index";
import {TaskType, WorkflowType} from "../../../utils/types";
import {TaskService} from "../task/taskService";
import {ResponseType} from "../../../utils/enums";
import {WorkflowService} from "../workflow/workflowService";
import {TaskQL, WorkflowQL} from "./graphTypes";

export const graphMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTask: {
            type: TaskQL,
            args: {
                name: {type: GraphQLString},
                workflow_id: {type: GraphQLInt},
            },
            resolve: async (_, task: TaskType) => await TaskService.create(task),
        },
        updateTask: {
            type: TaskQL,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                workflow_id: {type: GraphQLInt},
            },
            resolve: async (_, updateTask) => await TaskService.update(updateTask),
        },
        deleteTask: {
            type: GraphQLString,
            args: {id: {type: GraphQLInt}},
            resolve: async (_, {id}) => {
                await TaskService.delete(id);
                return ResponseType.taskDeleted;
            },
        },
        createWorkflow: {
            type: WorkflowQL,
            args: {
                name: {type: GraphQLString},
            },
            resolve: async (_, workflow: WorkflowType) => await WorkflowService.create(workflow),
        },
        updateWorkflow: {
            type: WorkflowQL,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
            },
            resolve: async (_, workflow: WorkflowType) => await WorkflowService.update(workflow),
        },
        deleteWorkflow: {
            type: GraphQLString,
            args: {
                id: {type: GraphQLInt},
            },
            resolve: async (_, {id}) => {
                await WorkflowService.delete(id);
                return ResponseType.workflowDeleted;
            },
        }
    },
});