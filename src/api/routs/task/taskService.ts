import Task from "../../../db/taskDB";
import {WhereOptions} from "sequelize";
import {ErrorType} from "../../../utils/enums";
import {TaskType} from "../../../utils/types";

export class TaskService {
    static async getAll(): Promise<any> {
        return await Task.findAll();
    }

    static async getById(id: number): Promise<any> {
        return await Task.findByPk(id);
    }

    static async delete(id: number): Promise<void> {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async deleteByParams(where?: WhereOptions): Promise<void> {
        await Task.destroy({where});
    }

    static async update(id: number, updatedTask: TaskType): Promise<any> {
        const task = await Task.findByPk(id);
        if (task) {
            await task.update({
                ...updatedTask,
                updatedAt: Date.now(),
            });
            return task;
        } else {
            throw new Error(ErrorType.notFound);
        }
    }

    static async create(newTask: TaskType): Promise<any> {
        return await Task.create(newTask);
    }
}
