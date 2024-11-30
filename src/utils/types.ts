import {Dialect} from "sequelize";

export type dbSettingType = {
    DATABASE: string,
    USERNAME: string,
    PASSWORD: string,
    HOST: string,
    PORT:number,
    TYPE: Dialect
}

export type TaskType = {
    id: number
    name: string
    workflow_id: number
    createdAt: Date
    updatedAt: Date
}
export type WorkflowType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
}