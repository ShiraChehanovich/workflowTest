import sequelize from "../db/index";
import {DataTypes} from "sequelize";
import Workflow from "./workflowDB";


const Task = sequelize.define('Task', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   name: DataTypes.STRING,
   workflow_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
Task.belongsTo(Workflow, {foreignKey: 'workflow_id'})
Workflow.hasMany(Task, {foreignKey: 'workflow_id'})

export default Task;