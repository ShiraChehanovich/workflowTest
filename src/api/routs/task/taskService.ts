import Task from "../../../db/taskDB";
import {Op, WhereOptions} from "sequelize";
import {ErrorType} from "../../../utils/enums";
import {TaskType} from "../../../utils/types";
import {WorkflowService} from "../workflow/workflowService";

export class TaskService {
    static async get(ids?: number[], workflowId?: number[]) {
        const whereConditions: any = [];

        if (ids && ids.length > 0) {
            whereConditions.push({id: {[Op.in]: ids}});
        }

        if (workflowId && workflowId.length > 0) {
            whereConditions.push({workflow_id: {[Op.in]: workflowId}});
        }

        const whereClause = whereConditions.length === 0
            ? {}
            :  {[Op.or]: whereConditions};

        return await Task.findAll({
            where: whereClause
        });
    }

    static async delete(id: number): Promise<void> {
        const task = await this.get([id]);
        if (task.length === 1) {
            await task[0].destroy();
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async deleteByParams(where?: WhereOptions): Promise<void> {
        await Task.destroy({where});
    }

    static async update(updatedTask: TaskType): Promise<any> {
        const task = await this.get([updatedTask.id]);
        const workflow = await WorkflowService.get([updatedTask.workflow_id]);
        if (task.length === 1 && workflow.length === 1) {
            await task[0].update({
                ...updatedTask,
                updatedAt: Date.now(),
            });
            return task[0];
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async create(newTask: TaskType): Promise<any> {
        const workflow = await WorkflowService.get([newTask.workflow_id]);
        if (workflow.length === 1) {
            return await Task.create(newTask);
        } else {
            throw new Error(ErrorType.notFound);
        }
    }
}
