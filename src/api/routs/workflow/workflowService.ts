import Workflow from "../../../db/workflowDB";
import {TaskService} from "../task/taskService";
import {ErrorType} from "../../../utils/enums";
import {WorkflowType} from "../../../utils/types";
import {Op} from "sequelize";

export class WorkflowService {
    static async get(ids?: number[]) {
        const whereConditions: any = [];

        if (ids && ids.length > 0) {
            whereConditions.push({id: {[Op.in]: ids}});
        }
        const whereClause = whereConditions.length === 0
            ? {}
            : whereConditions;

        return await Workflow.findAll({
            where: whereClause
        });
    }

    static async delete(id: number): Promise<any> {
        const workflow = await this.get([id]);
        if (workflow.length === 1) {
            await TaskService.deleteByParams({workflow_id: id});
            await workflow[0].destroy();
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async update(updateWorkflow: WorkflowType): Promise<any> {
        const workflow = await this.get([updateWorkflow.id]);
        if (workflow.length === 1) {
            await workflow[0].update({
                ...updateWorkflow,
                updatedAt: Date.now(),
            });
            return workflow[0];
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async create(newWorkflow: WorkflowType): Promise<any> {
        return await Workflow.create(newWorkflow);
    }
}