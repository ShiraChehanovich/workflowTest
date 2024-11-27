import {Dialect} from "sequelize";


export const DB_SETTINGS = {
    DATABASE: process.env.DATABASE || "",
    USERNAME: process.env.USERNAME || "",
    PASSWORD: process.env.PASSWORD || "",
    URL: process.env.URL || "",
    TYPE: 'postgres' as Dialect,
}
