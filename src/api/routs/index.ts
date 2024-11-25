import express from "express";
import {endpoints} from "../../utils/config";
import workflowRouts from './workflow/workflowRout';
import taskRouts from './task/taskRout';

const router = express.Router();

router.use(`${endpoints.workflow}`, workflowRouts);
router.use(`${endpoints.task}`, taskRouts);

router.get('/test', (req, res) => {
    res.json("hello world!");
    res.status(200);
})

export default router;