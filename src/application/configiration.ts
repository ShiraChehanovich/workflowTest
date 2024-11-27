import {Dialect} from "sequelize";
import {dbSettingType} from "../utils/types";


export const DB_SETTINGS: dbSettingType = {
    DATABASE: `${process.env.DB_DATABASE}` || "",
    USERNAME: `${process.env.DB_USERNAME}` || "",
    PASSWORD: `${process.env.DB_PASSWORD}` || "",
    HOST: process.env.DB_HOST || "",
    PORT: Number(process.env.DB_PORT) || 5432,
    TYPE: 'postgres' as Dialect,
}
