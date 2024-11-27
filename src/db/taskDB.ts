import sequelize from "../db/index";
import {DataTypes} from "sequelize";


const Task = sequelize.define('Task', {
   id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
   },
   name: DataTypes.STRING,
   workflow: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
         model: 'Workflow',
         key: 'id',
      },
   },
   createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
   },
   updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
   },
});

export default Task;