
import {Sequelize} from "sequelize";
import {DB_SETTINGS} from "../application/configiration";

import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(DB_SETTINGS.DATABASE, DB_SETTINGS.USERNAME, DB_SETTINGS.PASSWORD, {
    host: DB_SETTINGS.URL,
    dialect: DB_SETTINGS.TYPE
});


module.exports = sequelize;
