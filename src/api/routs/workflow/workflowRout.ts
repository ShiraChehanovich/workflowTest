import express from "express";
import {WorkflowService} from "./workflowService";
import {ErrorType, ResponseType} from "../../../utils/enums";
import {WorkflowType} from "../../../utils/types";

const router = express.Router();

router.get('/', async (_, res) => {
    const workflows = await WorkflowService.get();
    res.status(200).json(workflows);
})

router.get('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    const workflow = await WorkflowService.get([id]);
    if(workflow.length === 1) {
        res.status(200).json(workflow[0]);
    } else {
        res.status(404).json({message: ResponseType.workflowNotFound});
    }
})

router.delete('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    try {
        await WorkflowService.delete(id);
        res.status(200).json({message: ResponseType.workflowDeleted});
    } catch (error: any) {
        if (error.message === ErrorType.notFound) {
            res.status(404).json({message: ResponseType.workflowNotFound});
        }
        res.status(500).json({message: error.message});
    }

})

router.put('/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    const workflow: WorkflowType = req.body;
    workflow.id = id;
    try {
        const updatedWorkflow = await WorkflowService.update(workflow);
        res.status(200).json(updatedWorkflow);
    } catch (error: any) {
        if (error.message === ErrorType.notFound) {
            res.status(404).json({message: ResponseType.workflowNotFound});
        }
        res.status(500).json({message: error.message});
    }
})

router.post('/', async (req, res) => {
    const body: WorkflowType = req.body;
    const workflow = await WorkflowService.create(body);
    res.status(201).json(workflow);
})

export default router;