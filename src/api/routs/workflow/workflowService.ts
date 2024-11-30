import Workflow from "../../../db/workflowDB";
import {TaskService} from "../task/taskService";
import {ErrorType} from "../../../utils/enums";
import {WorkflowType} from "../../../utils/types";

export class WorkflowService {
    static async get(id: number) {
        return await Workflow.findByPk(id);
    }
    static async getAll(): Promise<any[]> {
        return await Workflow.findAll();
    }
    static async delete(id: number): Promise<any> {
        const workflow =  await this.get(id);
        if (workflow) {
            await TaskService.deleteByParams({workflow_id: id});
            await workflow.destroy();
        } else {
            throw new Error(ErrorType.notFound);
        }
    }
    static async update(updateWorkflow: WorkflowType): Promise<any> {
        const workflow = await Workflow.findByPk(updateWorkflow.id);
        if (workflow) {
            await workflow.update({
                ...updateWorkflow,
                updatedAt: Date.now(),
            });
            return workflow;
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async create(newWorkflow: WorkflowType): Promise<any> {
        return await Workflow.create(newWorkflow);
    }
}