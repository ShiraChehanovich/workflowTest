import {Dialect} from "sequelize";

export interface dbSettingType{
    DATABASE: string,
    USERNAME: string,
    PASSWORD: string,
    HOST: string,
    PORT:number,
    TYPE: Dialect
}