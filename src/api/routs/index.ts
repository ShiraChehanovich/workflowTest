import express from "express";
import {endpoints} from "../../utils/config";
import workflowRouts from './workflow/workflowRout';
import taskRouts from './task/taskRout';
import graphql from './graphql/graphql';

const router = express.Router();

router.use(`${endpoints.workflow}`, workflowRouts);
router.use(`${endpoints.task}`, taskRouts);
router.use(`${endpoints.graphql}`, graphql);

export default router;