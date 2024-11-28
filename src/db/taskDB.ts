import sequelize from "../db/index";
import {DataTypes} from "sequelize";
import Workflow from "./workflowDB";


const Task = sequelize.define('Task', {
   id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
   },
   name: DataTypes.STRING,
   workflow_id: {
      type: DataTypes.UUID,
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