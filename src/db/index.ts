import {Sequelize} from "sequelize";
import {DB_SETTINGS} from "../application/configiration";

export const sequelize = new Sequelize(DB_SETTINGS.DATABASE, DB_SETTINGS.USERNAME, DB_SETTINGS.PASSWORD, {
    host: DB_SETTINGS.HOST,
    port: DB_SETTINGS.PORT,
    dialect: DB_SETTINGS.TYPE
});

sequelize.sync()
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((error) => {
        console.error("Error syncing database:", error);
    });


export default sequelize;