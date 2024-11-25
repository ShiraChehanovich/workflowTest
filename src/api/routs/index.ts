import express from "express";
import {endpoints} from "../../utils/config";
import workflowRouts from './workflow/workflowRout';

const router = express.Router();

router.use(`${endpoints.workflow}`, workflowRouts);

router.get('/test', (req, res) => {
    res.json("hello world!");
    res.status(200);
})

export default router;